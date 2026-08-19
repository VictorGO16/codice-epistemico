'use client';

import { useState, useMemo } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { categoryInfo } from '@/lib/data/categories';
import { useConceptStore } from '@/lib/stores/concept-store';
import { PhilosophicalConcept, ConceptCategory } from '@/types';
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer';

import { motion, AnimatePresence } from 'framer-motion';

interface ConceptTreeProps {
  onConceptSelect: (conceptId: string) => void;
}

export default function ConceptTree({
  onConceptSelect,
}: ConceptTreeProps) {
  const { currentConcept } = useConceptStore();
  const [expandedCategories, setExpandedCategories] = useState<
    Set<ConceptCategory>
  >(new Set(['ancient', 'pre-columbian', 'modernity', '19th_century', '20th_century', 'contemporary', 'methods']));

  // Group all concepts by category - Updated
  const groupedConcepts = useMemo(() => {
    const allConcepts = Object.values(philosophicalData);
    console.log('ConceptTree - Total concepts loaded:', allConcepts.length);
    console.log('ConceptTree - Concept names:', allConcepts.map(c => c.name));
    const grouped = {} as Record<ConceptCategory, PhilosophicalConcept[]>;

    allConcepts.forEach((concept) => {
      if (!grouped[concept.category]) {
        grouped[concept.category] = [];
      }
      grouped[concept.category].push(concept);
    });

    // Sort concepts within each category by year
    Object.keys(grouped).forEach((category) => {
      grouped[category as ConceptCategory].sort((a, b) => a.year - b.year);
    });

    return grouped;
  }, []);

  // Get categories in order
  const categories = Object.values(categoryInfo).sort((a, b) => a.order - b.order);

  const toggleCategory = (categoryId: ConceptCategory) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleConceptClick = (conceptId: string) => {
    onConceptSelect(conceptId);
  };

  return (
    <StaggerContainer className="space-y-1">
      {categories.map((category) => {
        const concepts = groupedConcepts[category.id] || [];
        const isExpanded = expandedCategories.has(category.id);
        const hasResults = concepts.length > 0;

        if (!hasResults) {
          return null;
        }

        return (
          <StaggerItem key={category.id} className="select-none">
            {/* Category Header */}
            <motion.button
              onClick={() => toggleCategory(category.id)}
              className="flex items-center w-full px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors"
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <ChevronDownIcon className="w-4 h-4 mr-2 flex-shrink-0" />
              ) : (
                <ChevronRightIcon className="w-4 h-4 mr-2 flex-shrink-0" />
              )}
              <span className="uppercase tracking-wide text-xs">
                {category.name}
              </span>
              {hasResults && (
                <span className="ml-auto text-xs text-gray-500">
                  {concepts.length}
                </span>
              )}
            </motion.button>

            {/* Concepts List */}
            <AnimatePresence>
              {isExpanded && hasResults && (
                <motion.div 
                  className="ml-6 mt-1 space-y-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {concepts.map((concept, index) => {
                  const isSelected = currentConcept === concept.id;
                  const isPhilosopher =
                    concept.type === 'philosopher' ||
                    concept.type === 'scientist';

                  return (
                    <motion.button
                      key={concept.id}
                      onClick={() => handleConceptClick(concept.id)}
                      /*
                        Estado activo: antes era texto BLANCO sobre relleno teal
                        sólido (#00bba7) = 2.42:1, por debajo del mínimo AA de
                        4.5:1 — el elemento seleccionado era el menos legible de
                        la pantalla. Ahora: fondo teal al 13 %, texto teal claro
                        (9.8:1) y barra izquierda como marca de posición.
                      */
                      className={`
                        relative flex items-center w-full min-h-[44px] px-3 py-2 text-sm rounded-md
                        transition-colors duration-150
                        ${isSelected
                          ? 'bg-teal-400/15 text-teal-200 font-semibold before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2.5px] before:rounded-full before:bg-teal-400'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/70'
                        }
                        ${isPhilosopher ? 'border-l-2 border-yellow-400/40' : ''}
                      `}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.02 }}
                      aria-current={isSelected ? 'true' : undefined}
                    >
                      <div className="flex-1 text-left">
                        <div className="font-medium">{concept.name}</div>
                        {concept.year && (
                          <div className="text-xs opacity-70">
                            {concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}
                          </div>
                        )}
                      </div>
                      {/* El punto no tenía leyenda ni etiqueta accesible: marcaba
                          algo que solo sabía quien escribió el código. */}
                      {isPhilosopher && (
                        <span
                          className="ml-2 w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"
                          title="Pensador: permite diálogo"
                          aria-label="Pensador: permite diálogo"
                          role="img"
                        />
                      )}
                    </motion.button>
                  );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}