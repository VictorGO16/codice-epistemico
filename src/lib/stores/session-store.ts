import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TabId } from '@/types';

export interface Session {
  id: string;
  name: string;
  type: TabId;
  createdAt: Date;
  lastAccessed: Date;
  data?: Record<string, unknown>; // Para almacenar datos específicos de cada sesión
}

interface SessionState {
  sessions: Session[];
  activeSessionId: string | null;
  
  // Session management
  createSession: (type: TabId, name: string, data?: Record<string, unknown>) => string;
  removeSession: (sessionId: string) => void;
  switchToSession: (sessionId: string) => void;
  clearActiveSession: () => void;
  updateSession: (sessionId: string, updates: Partial<Session>) => void;
  duplicateSession: (sessionId: string) => string;
  
  // Session data management
  updateSessionData: (sessionId: string, data: Record<string, unknown>) => void;
  getSessionData: (sessionId: string) => Record<string, unknown> | undefined;
  
  // Utilities
  getActiveSession: () => Session | null;
  getSessionsByType: (type: TabId) => Session[];
  clearOldSessions: (maxAge: number) => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      sessions: [],
      activeSessionId: null,

      createSession: (type: TabId, name: string, data = {}) => {
        const sessionId = `${type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newSession: Session = {
          id: sessionId,
          name,
          type,
          createdAt: new Date(),
          lastAccessed: new Date(),
          data
        };

        set((state) => ({
          sessions: [...state.sessions, newSession],
          activeSessionId: sessionId
        }));

        return sessionId;
      },

      removeSession: (sessionId: string) => {
        set((state) => {
          const newSessions = state.sessions.filter(s => s.id !== sessionId);
          const newActiveSessionId = state.activeSessionId === sessionId 
            ? (newSessions.length > 0 ? newSessions[newSessions.length - 1].id : null)
            : state.activeSessionId;

          return {
            sessions: newSessions,
            activeSessionId: newActiveSessionId
          };
        });
      },

      switchToSession: (sessionId: string) => {
        set((state) => {
          const updatedSessions = state.sessions.map(session =>
            session.id === sessionId
              ? { ...session, lastAccessed: new Date() }
              : session
          );

          return {
            sessions: updatedSessions,
            activeSessionId: sessionId
          };
        });
      },

      clearActiveSession: () => {
        set({ activeSessionId: null });
      },

      updateSession: (sessionId: string, updates: Partial<Session>) => {
        set((state) => ({
          sessions: state.sessions.map(session =>
            session.id === sessionId
              ? { ...session, ...updates, lastAccessed: new Date() }
              : session
          )
        }));
      },

      duplicateSession: (sessionId: string) => {
        const session = get().sessions.find(s => s.id === sessionId);
        if (!session) return '';

        const newSessionId = get().createSession(
          session.type,
          `${session.name} (copia)`,
          { ...session.data }
        );

        return newSessionId;
      },

      updateSessionData: (sessionId: string, data: Record<string, unknown>) => {
        set((state) => ({
          sessions: state.sessions.map(session =>
            session.id === sessionId
              ? { 
                  ...session, 
                  data: { ...session.data, ...data },
                  lastAccessed: new Date()
                }
              : session
          )
        }));
      },

      getSessionData: (sessionId: string) => {
        const session = get().sessions.find(s => s.id === sessionId);
        return session?.data;
      },

      getActiveSession: () => {
        const { sessions, activeSessionId } = get();
        return sessions.find(s => s.id === activeSessionId) || null;
      },

      getSessionsByType: (type: TabId) => {
        return get().sessions.filter(s => s.type === type);
      },

      clearOldSessions: (maxAge: number) => {
        const cutoffDate = new Date(Date.now() - maxAge);
        set((state) => ({
          sessions: state.sessions.filter(session => 
            session.lastAccessed > cutoffDate
          )
        }));
      }
    }),
    {
      name: 'session-store',
      partialize: (state) => ({
        sessions: state.sessions,
        activeSessionId: state.activeSessionId
      })
    }
  )
);