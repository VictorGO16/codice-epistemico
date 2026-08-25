'use client';

import { useState } from 'react';

interface ConversationMessage {
  speaker: 'user' | 'ai';
  text: string;
}

export interface TierInfo {
  model: string;
  degraded: boolean;
  remaining: number;
  warn: boolean;
  limit: number;
}

export interface OracleReply {
  text: string;
  tier?: TierInfo;
}

export function useOracle() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * El texto llega por streaming. onChunk recibe lo acumulado hasta el momento,
   * como mucho cada 50 ms, para no reprocesar el markdown en cada trozo.
   */
  const askOracle = async (
    conceptId: string,
    message: string,
    conversationHistory: ConversationMessage[] = [],
    usedHighQuality = 0,
    onChunk?: (accumulated: string) => void
  ): Promise<OracleReply> => {
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
          usedHighQuality,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get oracle response');
      }

      const tier: TierInfo | undefined = response.headers.get('X-Tier-Model')
        ? {
            model: response.headers.get('X-Tier-Model') || '',
            degraded: response.headers.get('X-Tier-Degraded') === 'true',
            remaining: Number(response.headers.get('X-Tier-Remaining') || 0),
            warn: response.headers.get('X-Tier-Warn') === 'true',
            limit: Number(response.headers.get('X-Tier-Limit') || 0),
          }
        : undefined;

      const reader = response.body?.getReader();
      if (!reader) throw new Error('Sin cuerpo de respuesta');

      const decoder = new TextDecoder();
      let text = '';
      let lastEmit = 0;

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        const now = performance.now();
        if (onChunk && now - lastEmit > 50) {
          lastEmit = now;
          onChunk(text);
        }
      }
      text += decoder.decode();
      onChunk?.(text);

      return { text, tier };
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

  const analyzeWithParadigm = async (
    paradigmId: string,
    objectOfStudy: string,
    usedHighQuality = 0
  ) => {
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
          usedHighQuality,
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