import { useState } from 'react';
import { philosophicalData } from '@/lib/data/philosophical-data';

interface DebateResponse {
  participantId: string;
  response: string;
}

export function useDebate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateDebateResponse = async (
    topic: string,
    participantId: string,
    conversationHistory: Array<{ participantId: string; text: string; participantName: string }>,
    allParticipantIds: string[]
  ): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const participant = philosophicalData[participantId];
      if (!participant) {
        throw new Error('Participante no encontrado');
      }

      console.log('Generating debate response for:', participant.name, 'Topic:', topic);

      // Get other participants for context
      const otherParticipants = allParticipantIds
        .filter(id => id !== participantId)
        .map(id => philosophicalData[id])
        .filter(Boolean);

      const requestBody = {
        topic,
        participant: {
          id: participant.id,
          name: participant.name,
          coreIdea: participant.coreIdea,
          year: participant.year,
          type: participant.type,
        },
        otherParticipants: otherParticipants.map(p => ({
          id: p.id,
          name: p.name,
          coreIdea: p.coreIdea,
          year: p.year,
          type: p.type,
        })),
        conversationHistory,
      };

      console.log('Sending request to /api/debate:', requestBody);

      const response = await fetch('/api/debate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      if (!data.success) {
        throw new Error(data.error || 'Error desconocido');
      }

      return data.response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      console.error('useDebate error:', err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const generateOpeningStatement = async (
    topic: string,
    participantId: string,
    allParticipantIds: string[]
  ): Promise<string> => {
    return generateDebateResponse(topic, participantId, [], allParticipantIds);
  };

  return {
    generateDebateResponse,
    generateOpeningStatement,
    isLoading,
    error,
  };
}