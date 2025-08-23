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
              className="flex items-center w-full px-2 py-2 text-sm font-semibold text-gray-400 hover:text-gray-300 hover:bg-gray-700/50 rounded-md transition-colors"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
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
                      className={`
                        flex items-center w-full px-3 py-2 text-sm rounded-md transition-all duration-200
                        ${isSelected
                          ? 'bg-teal-500 text-white font-semibold shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/70'
                        }
                        ${isPhilosopher ? 'border-l-2 border-yellow-400/50' : ''}
                      `}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.02, 
                        x: 4,
                        boxShadow: isSelected 
                          ? '0 8px 25px rgba(20, 184, 166, 0.4)' 
                          : '0 4px 15px rgba(0, 0, 0, 0.2)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex-1 text-left">
                        <div className="font-medium">{concept.name}</div>
                        {concept.year && (
                          <div className="text-xs opacity-70">
                            {concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}
                          </div>
                        )}
                      </div>
                      {isPhilosopher && (
                        <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
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