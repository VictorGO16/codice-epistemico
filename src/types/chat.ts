// Chat message types
export interface ChatMessage {
  id: string;
  speaker: 'user' | 'ai';
  text: string;
  timestamp: Date;
  isLoading?: boolean;
}

// Oracle session management
export interface OracleSession {
  conceptId: string;
  conceptName: string;
  messages: ChatMessage[];
  isActive: boolean;
  createdAt: Date;
  lastActivity: Date;
}

// Chat state management
export interface ChatState {
  sessions: Record<string, OracleSession>;
  activeSession: string | null;
  isLoading: boolean;
  error: string | null;
}

// AI conversation context
export interface ConversationContext {
  conceptId: string;
  conceptName: string;
  conceptType: string;
  corePhilosophy: string;
  conversationHistory: ChatMessage[];
}