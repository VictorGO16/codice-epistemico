import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConceptState {
  currentConcept: string | null;
  previousConcept: string | null;
  breadcrumb: string[];
  setCurrentConcept: (conceptId: string | null) => void;
  goBack: () => void;
  clearHistory: () => void;
}

export const useConceptStore = create<ConceptState>()(
  persist(
    (set, get) => ({
      currentConcept: null,
      previousConcept: null,
      breadcrumb: [],

      setCurrentConcept: (conceptId: string | null) => {
        const { currentConcept, breadcrumb } = get();
        
        set({
          previousConcept: currentConcept,
          currentConcept: conceptId,
          breadcrumb: currentConcept 
            ? [...breadcrumb.slice(-4), currentConcept] // Keep last 5 items
            : breadcrumb,
        });
      },

      goBack: () => {
        const { previousConcept, breadcrumb } = get();
        
        if (previousConcept) {
          set({
            currentConcept: previousConcept,
            previousConcept: breadcrumb[breadcrumb.length - 1] || null,
            breadcrumb: breadcrumb.slice(0, -1),
          });
        }
      },

      clearHistory: () => {
        set({
          currentConcept: null,
          previousConcept: null,
          breadcrumb: [],
        });
      },
    }),
    {
      name: 'concept-navigation',
      partialize: (state) => ({
        currentConcept: state.currentConcept,
        previousConcept: state.previousConcept,
        breadcrumb: state.breadcrumb,
      }),
    }
  )
);