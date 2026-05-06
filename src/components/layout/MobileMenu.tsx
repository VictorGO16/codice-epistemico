'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import ConceptTree from '@/components/features/ConceptExplorer/ConceptTree';
import { IconForum, IconParadigm } from '@/components/ui/Icons';

export default function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen, setActiveTab } = useUIStore();
  const { currentConcept, setCurrentConcept } = useConceptStore();

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  const handleConceptSelect = (conceptId: string) => {
    // Set the selected concept, switch to context tab, and close mobile menu
    setCurrentConcept(conceptId);
    setActiveTab('context');
    setMobileMenuOpen(false);
  };

  if (!isMobileMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className="fixed inset-y-0 left-0 w-80 bg-gray-800 border-r-2 border-teal-400 z-50 md:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-600 flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">El Códice Epistémico</h1>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Tree */}
          <div className="flex-1 overflow-y-auto p-4">
            <ConceptTree 
              onConceptSelect={handleConceptSelect}
            />
          </div>

          {/* Feature Buttons */}
          <div className="p-4 border-t border-gray-600 space-y-2">
            <button 
              onClick={() => {
                setActiveTab('debate');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <IconForum size={16} className="shrink-0" />
              Iniciar Debate
            </button>
            <button 
              onClick={() => {
                setActiveTab('paradigm');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <IconParadigm size={16} className="shrink-0" />
              Análisis Paradigmático
            </button>
          </div>
        </div>
      </div>
    </>
  );
}