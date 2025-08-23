import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ChatMessage {
  id: string;
  speaker: 'user' | 'ai';
  text: string;
  timestamp: Date;
  isLoading?: boolean;
}

export interface OracleSession {
  conceptId: string;
  conceptName: string;
  messages: ChatMessage[];
  isActive: boolean;
  createdAt: Date;
  lastActivity: Date;
}

interface OracleState {
  // Current session
  currentSession: OracleSession | null;
  
  // Session history
  sessions: Record<string, OracleSession>;
  
  // UI state
  isOracleOpen: boolean;
  
  // Actions
  startSession: (conceptId: string, conceptName: string) => void;
  endSession: () => void;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => string;
  updateMessage: (messageId: string, updates: Partial<ChatMessage>) => void;
  clearSession: (conceptId: string) => void;
  clearAllSessions: () => void;
  setOracleOpen: (open: boolean) => void;
  
  // Getters
  getSessionHistory: (conceptId: string) => OracleSession | null;
  getAllSessions: () => OracleSession[];
}

export const useOracleStore = create<OracleState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      sessions: {},
      isOracleOpen: false,

      startSession: (conceptId: string, conceptName: string) => {
        const existingSession = get().sessions[conceptId];
        
        if (existingSession) {
          // Resume existing session
          set({
            currentSession: {
              ...existingSession,
              isActive: true,
              lastActivity: new Date(),
            },
            isOracleOpen: true,
          });
        } else {
          // Create new session
          const newSession: OracleSession = {
            conceptId,
            conceptName,
            messages: [
              {
                id: '1',
                speaker: 'ai',
                text: `Saludos. Soy ${conceptName}. ¿Qué cuestiones filosóficas te inquietan? Estoy aquí para compartir contigo mis reflexiones y dialogar sobre los grandes temas del pensamiento.`,
                timestamp: new Date(),
              }
            ],
            isActive: true,
            createdAt: new Date(),
            lastActivity: new Date(),
          };

          set({
            currentSession: newSession,
            sessions: {
              ...get().sessions,
              [conceptId]: newSession,
            },
            isOracleOpen: true,
          });
        }
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
              [currentSession.conceptId]: updatedSession,
            },
            isOracleOpen: false,
          });
        }
      },

      addMessage: (message) => {
        const { currentSession } = get();
        if (!currentSession) return '';

        const newMessage: ChatMessage = {
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
            [currentSession.conceptId]: updatedSession,
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
            [currentSession.conceptId]: updatedSession,
          },
        });
      },

      clearSession: (conceptId) => {
        const { sessions, currentSession } = get();
        const newSessions = { ...sessions };
        delete newSessions[conceptId];

        set({
          sessions: newSessions,
          currentSession: currentSession?.conceptId === conceptId ? null : currentSession,
          isOracleOpen: currentSession?.conceptId === conceptId ? false : get().isOracleOpen,
        });
      },

      clearAllSessions: () => {
        set({
          sessions: {},
          currentSession: null,
          isOracleOpen: false,
        });
      },

      setOracleOpen: (open) => {
        set({ isOracleOpen: open });
        if (!open) {
          get().endSession();
        }
      },

      getSessionHistory: (conceptId) => {
        return get().sessions[conceptId] || null;
      },

      getAllSessions: () => {
        return Object.values(get().sessions).sort(
          (a, b) => b.lastActivity.getTime() - a.lastActivity.getTime()
        );
      },
    }),
    {
      name: 'oracle-sessions',
      partialize: (state) => ({
        sessions: state.sessions,
      }),
    }
  )
);