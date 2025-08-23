'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { TabId } from '@/types';

export default function MainNavigation() {
  const { activeTab, setActiveTab } = useUIStore();
  const { currentConcept } = useConceptStore();

  const mainTabs = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'debate', label: 'Debate', icon: '🗣️' },
    { id: 'paradigm', label: 'Laboratorio', icon: '🔬' },
  ];

  const conceptTabs = currentConcept ? [
    { id: 'context', label: 'Contexto', icon: '📖' },
    { id: 'psychology', label: 'Psicología', icon: '🧠' },
    { id: 'methodology', label: 'Metodología', icon: '🔬' },
    { id: 'oracle', label: 'Oráculo', icon: '🔮' },
  ] : [];

  const allTabs = [...mainTabs, ...conceptTabs];

  return (
    <div className="bg-gray-800/50 border-b border-gray-700 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-1 p-1 overflow-x-auto">
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-md font-medium text-sm transition-all duration-200 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }
              `}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}