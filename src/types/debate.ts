// Debate participant information
export interface DebateParticipant {
  conceptId: string;
  name: string;
  color: string;
  philosophy: string;
}

// Individual debate turn/message
export interface DebateTurn {
  id: string;
  speaker: string; // participant name or "Moderador"
  text: string;
  timestamp: Date;
  turnNumber: number;
}

// Debate session management
export interface DebateSession {
  id: string;
  topic: string;
  participants: DebateParticipant[];
  turns: DebateTurn[];
  status: 'setup' | 'active' | 'completed' | 'analyzing';
  createdAt: Date;
  completedAt?: Date;
  analysis?: DebateAnalysis;
}

// Debate analysis structures
export interface ArgumentCard {
  id: string;
  participantName: string;
  argument: string;
  refutation?: {
    by: string;
    text: string;
    refutesId: string;
  };
}

export interface ParticipantAnalysis {
  name: string;
  thesis: string;
  keyArguments: ArgumentCard[];
  score: number;
  justification: string;
}

export interface DebateAnalysis {
  participants: ParticipantAnalysis[];
  moderatorConclusion: {
    summary: string;
    winnerAnalysis: string;
    scores: Array<{
      name: string;
      score: number;
      justification: string;
    }>;
  };
  argumentMap: ArgumentCard[];
  createdAt: Date;
}

// Debate state management
export interface DebateState {
  currentDebate: DebateSession | null;
  availableParticipants: DebateParticipant[];
  isLoading: boolean;
  error: string | null;
}