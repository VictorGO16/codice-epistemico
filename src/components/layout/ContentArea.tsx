'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { useSessionStore } from '@/lib/stores/session-store';
import ConceptDetail from '@/components/features/ConceptExplorer/ConceptDetail';
import HomePage from '@/components/features/Home/HomePage';
import DebateSetup from '@/components/features/Debate/DebateSetup';
import DebateChat from '@/components/features/Debate/DebateChat';
import ParadigmLab from '@/components/features/Paradigm/ParadigmLab';
import OracleChat from '@/components/features/Oracle/OracleChat';

export default function ContentArea() {
  const { activeTab, setActiveTab } = useUIStore();
  const { currentConcept } = useConceptStore();
  const { isDebateOpen, currentSession, setDebateOpen } = useDebateStore();
  const { getActiveSession } = useSessionStore();
  
  const activeSession = getActiveSession();

  const renderContent = () => {
    // Si hay una sesión activa, mostrar el contenido de esa sesión
    if (activeSession && activeSession.type === activeTab) {
      switch (activeSession.type) {
        case 'debate':
          // Si hay una sesión de debate activa, mostrar el chat del debate
          if (activeSession.data?.status === 'active') {
            return (
              <DebateChat 
                onClose={() => setDebateOpen(false)}
              />
            );
          } else {
            // Si la sesión existe pero no está activa, mostrar el setup
            return (
              <DebateSetup 
                onClose={() => setActiveTab('home')}
                onStartDebate={(topic, participantIds) => {
                  // This will be handled by the DebateSetup component itself
                }}
              />
            );
          }
        case 'paradigm':
          return <ParadigmLab />;
        case 'oracle':
          if (activeSession.data?.conceptId && activeSession.data?.conceptName) {
            return (
              <OracleChat 
                conceptId={activeSession.data.conceptId}
                conceptName={activeSession.data.conceptName}
              />
            );
          }
          return currentConcept ? <ConceptDetail /> : <HomePage />;
        default:
          break;
      }
    }
    
    // Comportamiento por defecto cuando no hay sesión activa
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
      <div className="w-full">
        {renderContent()}
      </div>
      
      {/* Debate Chat Modal - Solo mostrar si no está siendo renderizado como contenido principal */}
      {isDebateOpen && currentSession && (!activeSession || activeSession.type !== 'debate') && (
        <DebateChat 
          onClose={() => setDebateOpen(false)}
        />
      )}
    </>
  );
}