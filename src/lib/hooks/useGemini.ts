'use client';

import { useState } from 'react';

interface ConversationMessage {
  speaker: 'user' | 'ai';
  text: string;
}

export function useOracle() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const askOracle = async (
    conceptId: string,
    message: string,
    conversationHistory: ConversationMessage[] = []
  ): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/oracle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conceptId,
          message,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get oracle response');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Oracle response was not successful');
      }

      return data.response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    askOracle,
    isLoading,
    error,
  };
}

export function useDebate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startDebate = async (topic: string, participantIds: string[]) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/debate/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          participantIds,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to start debate');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const continueDebate = async (debateId: string, userInput?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/debate/continue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          debateId,
          userInput,
          action: 'continue',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to continue debate');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const analyzeDebate = async (debateId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/debate/continue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          debateId,
          action: 'analyze',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze debate');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    startDebate,
    continueDebate,
    analyzeDebate,
    isLoading,
    error,
  };
}

export function useParadigmLab() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeWithParadigm = async (paradigmId: string, objectOfStudy: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/paradigm/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paradigmId,
          objectOfStudy,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze with paradigm');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    analyzeWithParadigm,
    isLoading,
    error,
  };
}