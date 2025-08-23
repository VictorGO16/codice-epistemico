import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DebateMessage {
  id: string;
  participantId: string;
  participantName: string;
  text: string;
  timestamp: Date;
  isLoading?: boolean;
}

export interface DebateSession {
  id: string;
  topic: string;
  participantIds: string[];
  messages: DebateMessage[];
  isActive: boolean;
  currentSpeaker: number;
  createdAt: Date;
  lastActivity: Date;
}

interface DebateState {
  // Current session (only one at a time)
  currentSession: DebateSession | null;
  
  // Current analysis (linked to current session)
  currentAnalysis: any | null;
  
  // UI state
  isDebateOpen: boolean;
  isAnalysisOpen: boolean;
  
  // Actions
  startSession: (topic: string, participantIds: string[]) => void;
  restoreSession: (session: DebateSession, analysis?: any) => void;
  endSession: () => void;
  addMessage: (message: Omit<DebateMessage, 'id' | 'timestamp'>) => string;
  updateMessage: (messageId: string, updates: Partial<DebateMessage>) => void;
  nextSpeaker: () => void;
  setDebateOpen: (open: boolean) => void;
  setAnalysisOpen: (open: boolean) => void;
  setCurrentAnalysis: (analysis: any) => void;
  clearCurrentSession: () => void;
  
  // Navigation between debate and analysis
  returnToDebate: () => void;
  openAnalysis: () => void;
}

export const useDebateStore = create<DebateState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      currentAnalysis: null,
      isDebateOpen: false,
      isAnalysisOpen: false,

      startSession: (topic: string, participantIds: string[]) => {
        const sessionId = `debate-${Date.now()}`;
        
        const newSession: DebateSession = {
          id: sessionId,
          topic,
          participantIds,
          messages: [],
          isActive: true,
          currentSpeaker: 0,
          createdAt: new Date(),
          lastActivity: new Date(),
        };

        set({
          currentSession: newSession,
          currentAnalysis: null, // Reset analysis when starting new debate
          isDebateOpen: true,
          isAnalysisOpen: false,
        });
      },

      restoreSession: (session: DebateSession, analysis?: any) => {
        set({
          currentSession: {
            ...session,
            isActive: true,
            lastActivity: new Date(),
          },
          currentAnalysis: analysis || null,
          isDebateOpen: false, // Don't auto-open, let the caller decide
          isAnalysisOpen: false,
        });
      },

      endSession: () => {
        const { currentSession } = get();
        if (currentSession) {
          const updatedSession = {
            ...currentSession,
            isActive: false,
            lastActivity: new Date(),
          };

          set({
            currentSession: updatedSession, // Keep session for potential analysis
            isDebateOpen: false,
          });
        }
      },

      addMessage: (message) => {
        const { currentSession } = get();
        if (!currentSession) return '';

        const newMessage: DebateMessage = {
          ...message,
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date(),
        };

        const updatedSession = {
          ...currentSession,
          messages: [...currentSession.messages, newMessage],
          lastActivity: new Date(),
        };

        set({
          currentSession: updatedSession,
        });

        return newMessage.id;
      },

      updateMessage: (messageId, updates) => {
        const { currentSession } = get();
        if (!currentSession) return;

        const updatedMessages = currentSession.messages.map(msg =>
          msg.id === messageId ? { ...msg, ...updates } : msg
        );

        const updatedSession = {
          ...currentSession,
          messages: updatedMessages,
          lastActivity: new Date(),
        };

        set({
          currentSession: updatedSession,
        });
      },

      nextSpeaker: () => {
        const { currentSession } = get();
        if (!currentSession) return;

        // Only advance speaker for participant messages, not moderator messages
        const nextSpeakerIndex = (currentSession.currentSpeaker + 1) % currentSession.participantIds.length;
        
        const updatedSession = {
          ...currentSession,
          currentSpeaker: nextSpeakerIndex,
          lastActivity: new Date(),
        };

        set({
          currentSession: updatedSession,
        });
      },

      clearCurrentSession: () => {
        set({
          currentSession: null,
          currentAnalysis: null,
          isDebateOpen: false,
          isAnalysisOpen: false,
        });
      },

      setDebateOpen: (open) => {
        set({ 
          isDebateOpen: open,
          isAnalysisOpen: false // Close analysis when opening debate
        });
        if (!open) {
          get().endSession();
        }
      },

      setAnalysisOpen: (open) => {
        set({ 
          isAnalysisOpen: open,
          isDebateOpen: false // Close debate when opening analysis
        });
      },

      setCurrentAnalysis: (analysis) => {
        set({ currentAnalysis: analysis });
      },

      returnToDebate: () => {
        const { currentSession } = get();
        if (currentSession) {
          set({
            isDebateOpen: true,
            isAnalysisOpen: false,
          });
        }
      },

      openAnalysis: () => {
        const { currentSession, currentAnalysis } = get();
        if (currentSession) {
          set({
            isDebateOpen: false,
            isAnalysisOpen: true,
          });
        }
      },
    }),
    {
      name: 'debate-session',
      partialize: (state) => ({
        currentSession: state.currentSession,
        currentAnalysis: state.currentAnalysis,
      }),
    }
  )
);