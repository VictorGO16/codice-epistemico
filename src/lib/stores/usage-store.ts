import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { DIALOGUE_LIMIT, HEAVY_LIMIT, QuotaKind } from '@/lib/ai/quota';

/**
 * Consumo de calidad alta en esta sesión de trabajo.
 *
 * La cuota del diálogo es por conversación: se reinicia al abrir un diálogo
 * nuevo o al descartar el hilo. Lo que limita no es cuánto usa un estudiante,
 * sino cuánto crece una sola conversación arrastrando todo su historial.
 *
 * Debate y análisis llevan un contador propio.
 */

interface UsageState {
  dialogue: number;
  heavy: number;
  consume: (kind: QuotaKind) => void;
  used: (kind: QuotaKind) => number;
  remaining: (kind: QuotaKind) => number;
  isDegraded: (kind: QuotaKind) => boolean;
  resetKind: (kind: QuotaKind) => void;
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

      resetKind: (kind) => set({ [kind]: 0 } as Partial<UsageState>),

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
