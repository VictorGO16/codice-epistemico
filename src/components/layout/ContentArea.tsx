'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { useSessionStore } from '@/lib/stores/session-store';
import ConceptDetail from '@/components/features/ConceptExplorer/ConceptDetail';
import HomePage from '@/components/features/Home/HomePage';
import DebateSetup from '@/components/features/Debate/DebateSetup';
import DebateChat from '@/components/features/Debate/DebateChat';
import DebateAnalysis from '@/components/features/Debate/DebateAnalysis';
import ParadigmLab from '@/components/features/Paradigm/ParadigmLab';
import OracleChat from '@/components/features/Oracle/OracleChat';

export default function ContentArea() {
  const { activeTab, setActiveTab } = useUIStore();
  const { currentConcept } = useConceptStore();
  const { 
    isDebateOpen, 
    isAnalysisOpen, 
    currentSession, 
    currentAnalysis,
    setDebateOpen, 
    setAnalysisOpen 
  } = useDebateStore();
  const { getActiveSession, clearActiveSession } = useSessionStore();
  
  const activeSession = getActiveSession();

  const renderContent = () => {
    // Si hay una sesión activa, mostrar el contenido de esa sesión
    if (activeSession && activeSession.type === activeTab) {
      switch (activeSession.type) {
        case 'debate':
          // Always show setup for session-based debates, modal handles active debates
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
        // Show analysis if it's open and available
        if (isAnalysisOpen && currentSession && currentAnalysis) {
          return (
            <DebateAnalysis
              session={currentSession}
              onClose={() => setAnalysisOpen(false)}
            />
          );
        }
        // Don't render debate as page content, always use modal
        // Default to setup
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
      
      {/* SOLO UN MODAL A LA VEZ */}
      {isDebateOpen && currentSession && (
        <DebateChat 
          onClose={() => {
            setDebateOpen(false);
            setActiveTab('home');
            clearActiveSession(); // Desactivar sesión activa
          }}
        />
      )}
      
      {!isDebateOpen && isAnalysisOpen && currentSession && currentAnalysis && (
        <DebateAnalysis
          session={currentSession}
          onClose={() => {
            setAnalysisOpen(false);
            setActiveTab('home');
            clearActiveSession(); // Desactivar sesión activa
          }}
        />
      )}
    </>
  );
}