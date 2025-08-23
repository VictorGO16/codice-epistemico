// API request/response types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Gemini API types
export interface GeminiRequest {
  contents: Array<{
    role: 'user' | 'model';
    parts: Array<{
      text: string;
    }>;
  }>;
}

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
    finishReason: string;
  }>;
}

// Chat API types
export interface ChatRequest {
  conceptId: string;
  message: string;
  conversationHistory: Array<{
    speaker: 'user' | 'ai';
    text: string;
  }>;
}

export interface ChatResponse {
  message: string;
  conceptName: string;
}

// Debate API types
export interface DebateRequest {
  topic: string;
  participantIds: string[];
  conversationHistory?: Array<{
    speaker: string;
    text: string;
  }>;
  userInstruction?: string;
}

export interface DebateResponse {
  turns: Array<{
    speaker: string;
    text: string;
  }>;
}

// Debate analysis API types
export interface DebateAnalysisRequest {
  debateTranscript: string;
  participantNames: string[];
}

export interface DebateAnalysisResponse {
  participants: Array<{
    name: string;
    thesis: string;
    key_arguments: Array<{
      id: string;
      argument: string;
      refutation?: {
        by: string;
        text: string;
        refutes_id: string;
      };
    }>;
  }>;
  moderator_conclusion: {
    summary: string;
    scores: Array<{
      name: string;
      score: number;
      justification: string;
    }>;
  };
}

// Paradigm analysis API types
export interface ParadigmAnalysisRequest {
  paradigmId: string;
  objectOfStudy: string;
}

export interface ParadigmAnalysisResponse {
  sections: Array<{
    title: string;
    text: string;
  }>;
}

// Export functionality types
export interface ExportRequest {
  type: 'html' | 'pdf';
  content: 'chat' | 'debate' | 'paradigm';
  data: unknown;
  filename: string;
}

export interface ExportResponse {
  success: boolean;
  downloadUrl?: string;
  error?: string;
}