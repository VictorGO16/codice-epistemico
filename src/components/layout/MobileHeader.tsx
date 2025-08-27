'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { philosophicalData } from '@/lib/data/philosophical-data';

interface MobileHeaderProps {
  onLeftSidebarToggle?: () => void;
}

export default function MobileHeader({ onLeftSidebarToggle }: MobileHeaderProps) {
  const { toggleSidebar } = useUIStore();
  const { currentConcept } = useConceptStore();

  const concept = currentConcept ? philosophicalData[currentConcept] : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Button */}
        <button
          onClick={onLeftSidebarToggle || toggleSidebar}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Abrir explorador de conceptos"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="flex-1 text-center px-4">
          {concept ? (
            <div>
              <h1 className="text-lg font-semibold text-white truncate">
                {concept.name}
              </h1>
              <p className="text-xs text-gray-400">
                {concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}
              </p>
            </div>
          ) : (
            <h1 className="text-lg font-semibold text-white">
              Códice Epistémico
            </h1>
          )}
        </div>

        {/* Right space for balance - navigation is now in right sidebar */}
        <div className="w-10"></div>
      </div>
    </header>
  );
}