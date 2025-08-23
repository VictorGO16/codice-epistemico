'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import ConceptDetail from '@/components/features/ConceptExplorer/ConceptDetail';
import HomePage from '@/components/features/Home/HomePage';
import DebateSetup from '@/components/features/Debate/DebateSetup';
import DebateChat from '@/components/features/Debate/DebateChat';
import ParadigmLab from '@/components/features/Paradigm/ParadigmLab';
import MainNavigation from '@/components/layout/MainNavigation';

export default function ContentArea() {
  const { activeTab, setActiveTab } = useUIStore();
  const { currentConcept } = useConceptStore();
  const { isDebateOpen, currentSession, setDebateOpen } = useDebateStore();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'debate':
        return (
          <DebateSetup 
            onClose={() => setActiveTab('home')}
            onStartDebate={(topic, participantIds) => {
              // This will be handled by the DebateSetup component itself
            }}
          />
        );
      case 'paradigm':
        return <ParadigmLab />;
      case 'context':
      case 'psychology':
      case 'methodology':
      case 'oracle':
        return currentConcept ? <ConceptDetail /> : <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <MainNavigation />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
      
      {/* Debate Chat Modal */}
      {isDebateOpen && currentSession && (
        <DebateChat 
          onClose={() => setDebateOpen(false)}
        />
      )}
    </>
  );
}