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
  // Current session
  currentSession: DebateSession | null;
  
  // Session history
  sessions: Record<string, DebateSession>;
  
  // UI state
  isDebateOpen: boolean;
  
  // Actions
  startSession: (topic: string, participantIds: string[]) => void;
  endSession: () => void;
  addMessage: (message: Omit<DebateMessage, 'id' | 'timestamp'>) => string;
  updateMessage: (messageId: string, updates: Partial<DebateMessage>) => void;
  nextSpeaker: () => void;
  clearSession: (sessionId: string) => void;
  clearAllSessions: () => void;
  setDebateOpen: (open: boolean) => void;
  
  // Getters
  getSessionHistory: (sessionId: string) => DebateSession | null;
  getAllSessions: () => DebateSession[];
}

export const useDebateStore = create<DebateState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      sessions: {},
      isDebateOpen: false,

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
          sessions: {
            ...get().sessions,
            [sessionId]: newSession,
          },
          isDebateOpen: true,
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
            currentSession: null,
            sessions: {
              ...get().sessions,
              [currentSession.id]: updatedSession,
            },
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
          sessions: {
            ...get().sessions,
            [currentSession.id]: updatedSession,
          },
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
          sessions: {
            ...get().sessions,
            [currentSession.id]: updatedSession,
          },
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
          sessions: {
            ...get().sessions,
            [currentSession.id]: updatedSession,
          },
        });
      },

      clearSession: (sessionId) => {
        const { sessions, currentSession } = get();
        const newSessions = { ...sessions };
        delete newSessions[sessionId];

        set({
          sessions: newSessions,
          currentSession: currentSession?.id === sessionId ? null : currentSession,
          isDebateOpen: currentSession?.id === sessionId ? false : get().isDebateOpen,
        });
      },

      clearAllSessions: () => {
        set({
          sessions: {},
          currentSession: null,
          isDebateOpen: false,
        });
      },

      setDebateOpen: (open) => {
        set({ isDebateOpen: open });
        if (!open) {
          get().endSession();
        }
      },

      getSessionHistory: (sessionId) => {
        return get().sessions[sessionId] || null;
      },

      getAllSessions: () => {
        return Object.values(get().sessions).sort(
          (a, b) => b.lastActivity.getTime() - a.lastActivity.getTime()
        );
      },
    }),
    {
      name: 'debate-sessions',
      partialize: (state) => ({
        sessions: state.sessions,
      }),
    }
  )
);