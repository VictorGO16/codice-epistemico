import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { DIALOGUE_LIMIT, HEAVY_LIMIT, QuotaKind } from '@/lib/ai/quota';

/**
 * Consumo de calidad alta en esta sesión de trabajo.
 *
 * Vive en sessionStorage y no en localStorage: la cuota es por sesión, así que
 * el reinicio lo da el propio navegador al cerrar la pestaña.
 *
 * El contador del diálogo es compartido entre autores. Debate y análisis
 * comparten uno propio, porque una ronda de debate son varias llamadas y un
 * análisis es una sola llamada larga.
 */

interface UsageState {
  dialogue: number;
  heavy: number;
  consume: (kind: QuotaKind) => void;
  used: (kind: QuotaKind) => number;
  remaining: (kind: QuotaKind) => number;
  isDegraded: (kind: QuotaKind) => boolean;
  reset: () => void;
}

const LIMITS: Record<QuotaKind, number> = {
  dialogue: DIALOGUE_LIMIT,
  heavy: HEAVY_LIMIT,
};

export const useUsageStore = create<UsageState>()(
  persist(
    (set, get) => ({
      dialogue: 0,
      heavy: 0,

      consume: (kind) =>
        set((state) => ({
          [kind]: Math.min(state[kind] + 1, LIMITS[kind]),
        }) as Partial<UsageState>),

      used: (kind) => get()[kind],

      remaining: (kind) => Math.max(0, LIMITS[kind] - get()[kind]),

      isDegraded: (kind) => get()[kind] >= LIMITS[kind],

      reset: () => set({ dialogue: 0, heavy: 0 }),
    }),
    {
      name: 'episte-usage',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? window.sessionStorage : localStorage,
      ),
      partialize: (state) => ({ dialogue: state.dialogue, heavy: state.heavy }),
    },
  ),
);

export { DIALOGUE_LIMIT, HEAVY_LIMIT };
