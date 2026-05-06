'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { TabId } from '@/types';
import {
  IconHome, IconForum, IconParadigm,
  IconBook, IconMind, IconMethod, IconDialogue,
} from '@/components/ui/Icons';
import type { ComponentType } from 'react';

type IconProps = { size?: number | string; className?: string };

export default function MainNavigation() {
  const { activeTab, setActiveTab } = useUIStore();
  const { currentConcept } = useConceptStore();

  const mainTabs: { id: string; label: string; Icon: ComponentType<IconProps> }[] = [
    { id: 'home',     label: 'Inicio',   Icon: IconHome },
    { id: 'debate',   label: 'Debate',   Icon: IconForum },
    { id: 'paradigm', label: 'Análisis', Icon: IconParadigm },
  ];

  const conceptTabs: { id: string; label: string; Icon: ComponentType<IconProps> }[] = currentConcept ? [
    { id: 'context',     label: 'Contexto',    Icon: IconBook },
    { id: 'psychology',  label: 'Psicología',  Icon: IconMind },
    { id: 'methodology', label: 'Metodología', Icon: IconMethod },
    { id: 'oracle',      label: 'Diálogo',     Icon: IconDialogue },
  ] : [];

  const allTabs = [...mainTabs, ...conceptTabs];

  return (
    <div className="bg-gray-800/50 border-b border-gray-700 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-1 p-1 overflow-x-auto scrollbar-hide">
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-md font-medium text-sm transition-all duration-200 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50 border border-transparent'
                }
              `}
            >
              <tab.Icon size={15} className="shrink-0" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
