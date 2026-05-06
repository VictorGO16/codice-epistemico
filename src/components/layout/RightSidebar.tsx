'use client';

import { useState } from 'react';
import { 
  BeakerIcon, 
  ChatBubbleLeftRightIcon, 
  BookOpenIcon,
  HomeIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  XMarkIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  TrashIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { useUIStore } from '@/lib/stores/ui-store';
import { useConceptStore } from '@/lib/stores/concept-store';
import { useSessionStore } from '@/lib/stores/session-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { TabId } from '@/types';
import { IconForum, IconAnalysis } from '@/components/ui/Icons';

interface DebateMessage {
  id: string;
  participantId: string;
  participantName: string;
  text: string;
  timestamp: Date;
  isLoading?: boolean;
}

interface DebateAnalysis {
  arguments: Array<{
    participantName: string;
    thesis: string;
    strength: number;
    coherence: number;
    arguments: string[];
  }>;
  participantScores: Record<string, number>;
  moderatorConclusion: string;
  overallAnalysis: string;
}

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const mainNavigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    icon: HomeIcon,
    description: 'Página principal'
  },
  {
    id: 'paradigm',
    label: 'Análisis',
    icon: BeakerIcon,
    description: 'Análisis paradigmático'
  },
  {
    id: 'debate',
    label: 'Debate',
    icon: ChatBubbleLeftRightIcon,
    description: 'Debates filosóficos'
  }
];

const conceptNavigationItems: NavigationItem[] = [
  {
    id: 'context',
    label: 'Contexto',
    icon: BookOpenIcon,
    description: 'Información del concepto'
  },
  {
    id: 'psychology',
    label: 'Psicología',
    icon: AcademicCapIcon,
    description: 'Aspectos psicológicos'
  },
  {
    id: 'methodology',
    label: 'Metodología',
    icon: MagnifyingGlassIcon,
    description: 'Métodos y enfoques'
  },
  {
    id: 'oracle',
    label: 'Diálogo',
    icon: SparklesIcon,
    description: 'Chat con el pensador'
  }
];

export default function RightSidebar({ isOpen, onClose }: RightSidebarProps) {
  const { activeTab, setActiveTab, isModalActive } = useUIStore();
  const { currentConcept } = useConceptStore();
  const { 
    sessions, 
    activeSessionId, 
    createSession, 
    switchToSession, 
    removeSession,
    duplicateSession 
  } = useSessionStore();
  const { 
    restoreSession,
    setDebateOpen, 
    setAnalysisOpen,
    currentSession, 
    currentAnalysis, 
    openAnalysis, 
    returnToDebate,
    isDebateOpen,
    isAnalysisOpen
  } = useDebateStore();
  const [showSessionMenu, setShowSessionMenu] = useState<string | null>(null);

  const concept = currentConcept ? philosophicalData[currentConcept] : null;

  // Dynamic z-index based on modal state
  const sidebarZIndex = isModalActive ? "z-[55]" : "z-40";
  const overlayZIndex = isModalActive ? "z-[50]" : "z-[35]";

  const handleNavigation = (tabId: TabId) => {
    // Cerrar debate/análisis si navegamos fuera del tab debate
    if (tabId !== 'debate' && (isDebateOpen || isAnalysisOpen)) {
      setDebateOpen(false);
      setAnalysisOpen(false);
    }
    
    setActiveTab(tabId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handleCreateSession = (type: TabId) => {
    const allNavigationItems = [...mainNavigationItems, ...conceptNavigationItems];
    const sessionName = `${allNavigationItems.find(item => item.id === type)?.label} ${sessions.filter(s => s.type === type).length + 1}`;
    
    // Preparar datos específicos según el tipo de sesión
    let sessionData = {};
    if (type === 'oracle' && currentConcept && concept) {
      sessionData = {
        conceptId: currentConcept,
        conceptName: concept.name
      };
    }
    
    const sessionId = createSession(type, sessionName, sessionData);
    
    // Cambiar a la nueva sesión y tab
    switchToSession(sessionId);
    setActiveTab(type);
    
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const getSessionsByType = (type: TabId) => {
    return sessions.filter(session => session.type === type);
  };

  const handleSessionAction = (action: string, sessionId: string) => {
    setShowSessionMenu(null);
    
    switch (action) {
      case 'duplicate':
        duplicateSession(sessionId);
        break;
      case 'delete':
        removeSession(sessionId);
        break;
    }
  };

  return (
    <>
      {/* Overlay for mobile/tablet */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 ${overlayZIndex} lg:hidden`}
          onClick={onClose}
        />
      )}

      {/* Right Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-700 ${sidebarZIndex} transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:relative lg:translate-x-0 lg:z-auto
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white">
              Navegación
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white lg:hidden"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-400 px-2">
                  Navegación Principal
                </div>
                {mainNavigationItems.map((item) => {
                  const Icon = item.icon;
                  const sessionsOfType = getSessionsByType(item.id);
                  
                  return (
                    <div key={item.id} className="space-y-2">
                      {/* Main Navigation Button */}
                      <div className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                          : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'
                      }`}>
                        <button
                          onClick={() => handleNavigation(item.id)}
                          className="flex items-center gap-3 flex-1 text-left hover:transform hover:scale-[1.02] transition-transform"
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs opacity-75">{item.description}</div>
                          </div>
                        </button>
                        {item.id !== 'home' && (
                          <button
                            onClick={() => handleCreateSession(item.id)}
                            className="p-1 text-gray-400 hover:text-teal-400 transition-colors flex-shrink-0"
                            title="Nueva sesión"
                          >
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Active Sessions */}
                      {sessionsOfType.length > 0 && (
                        <div className="ml-8 space-y-1">
                          <div className="text-xs text-gray-500 font-medium">
                            Sesiones ({sessionsOfType.length})
                          </div>
                          
                          {/* Show current debate and analysis options if available */}
                          {item.id === 'debate' && currentSession && (
                            <div className="space-y-1 mb-2 p-2 bg-gray-800/20 rounded-lg border border-gray-700/30">
                              <div className="text-xs text-gray-400 font-medium mb-1">
                                Debate Actual
                              </div>
                              <button
                                onClick={() => {
                                  returnToDebate();
                                  handleNavigation('debate');
                                }}
                                className={`w-full text-left text-xs p-2 rounded border transition-all ${
                                  isDebateOpen 
                                    ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                                    : 'bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-600/30'
                                }`}
                              >
                                <span className="inline-flex items-center gap-1.5">
                                  <IconForum size={12} className="shrink-0 opacity-60" />
                                  {currentSession.topic.slice(0, 30)}...
                                </span>
                              </button>
                              {currentAnalysis && (
                                <button
                                  onClick={() => {
                                    openAnalysis();
                                    handleNavigation('debate');
                                  }}
                                  className={`w-full text-left text-xs p-2 rounded border transition-all ${
                                    isAnalysisOpen 
                                      ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                                      : 'bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-600/30'
                                  }`}
                                >
                                  <span className="inline-flex items-center gap-1.5">
                                    <IconAnalysis size={12} className="shrink-0 opacity-60" />
                                    Análisis del debate
                                  </span>
                                </button>
                              )}
                            </div>
                          )}
                          
                          {sessionsOfType.map((session) => (
                            <div
                              key={session.id}
                              className={`relative flex items-center gap-2 p-2 rounded-lg border transition-all duration-200 ${
                                activeSessionId === session.id
                                  ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                                  : 'bg-gray-800/30 border-gray-700/30 text-gray-400 hover:bg-gray-700/30'
                              }`}
                            >
                              <button
                                onClick={() => {
                                  switchToSession(session.id);
                                  handleNavigation(session.type);
                                  
                                  // Restaurar el estado específico según el tipo de sesión
                                  if (session.type === 'debate' && session.data) {
                                    // Restaurar el debate desde la sesión guardada
                                    if (session.data.topic && session.data.participants && session.data.messages) {
                                      const restoredSession = {
                                        id: session.data.sessionId as string,
                                        topic: session.data.topic as string,
                                        participantIds: session.data.participants as string[],
                                        messages: session.data.messages as DebateMessage[],
                                        isActive: false,
                                        currentSpeaker: 0,
                                        createdAt: new Date(session.createdAt),
                                        lastActivity: new Date(session.data.lastActivity as string || session.lastAccessed),
                                      };
                                      
                                      restoreSession(restoredSession, session.data.analysis as DebateAnalysis);
                                      setDebateOpen(true);
                                    }
                                  }
                                }}
                                className="flex-1 text-left text-sm truncate"
                              >
                                {session.name}
                              </button>
                              
                              <div className="relative">
                                <button
                                  onClick={() => setShowSessionMenu(
                                    showSessionMenu === session.id ? null : session.id
                                  )}
                                  className="p-1 text-gray-500 hover:text-gray-300 transition-colors"
                                >
                                  <EllipsisVerticalIcon className="w-3 h-3" />
                                </button>
                                
                                {showSessionMenu === session.id && (
                                  <div className="absolute right-0 top-full mt-1 w-32 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10">
                                    <button
                                      onClick={() => handleSessionAction('duplicate', session.id)}
                                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                                    >
                                      <DocumentDuplicateIcon className="w-3 h-3" />
                                      Duplicar
                                    </button>
                                    <button
                                      onClick={() => handleSessionAction('delete', session.id)}
                                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                                    >
                                      <TrashIcon className="w-3 h-3" />
                                      Eliminar
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Concept Navigation - Only show when a concept is selected */}
              {concept && (
                <div className="space-y-3 border-t border-gray-700 pt-4">
                  <div className="text-sm font-medium text-gray-400 px-2">
                    {concept.name}
                  </div>
                  <div className="text-xs text-gray-500 px-2 mb-3">
                    {concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`} • {concept.category}
                  </div>
                  {conceptNavigationItems.map((item) => {
                    const Icon = item.icon;
                    const sessionsOfType = getSessionsByType(item.id);
                    
                    return (
                      <div key={item.id} className="space-y-2">
                        {/* Concept Navigation Button */}
                        <div className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                          activeTab === item.id
                            ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                            : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'
                        }`}>
                          <button
                            onClick={() => handleNavigation(item.id)}
                            className="flex items-center gap-3 flex-1 text-left hover:transform hover:scale-[1.02] transition-transform"
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-medium">{item.label}</div>
                              <div className="text-xs opacity-75">{item.description}</div>
                            </div>
                          </button>
                        </div>

                        {/* Active Sessions */}
                        {sessionsOfType.length > 0 && (
                          <div className="ml-8 space-y-1">
                            <div className="text-xs text-gray-500 font-medium">
                              Sesiones ({sessionsOfType.length})
                            </div>
                            {sessionsOfType.map((session) => (
                              <div
                                key={session.id}
                                className={`relative flex items-center gap-2 p-2 rounded-lg border transition-all duration-200 ${
                                  activeSessionId === session.id
                                    ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                                    : 'bg-gray-800/30 border-gray-700/30 text-gray-400 hover:bg-gray-700/30'
                                }`}
                              >
                                <button
                                  onClick={() => {
                                    switchToSession(session.id);
                                    handleNavigation(session.type);
                                    
                                    // Restaurar el estado específico según el tipo de sesión
                                    if (session.type === 'debate' && session.data) {
                                      // Restaurar el debate desde la sesión guardada
                                      if (session.data.topic && session.data.participants && session.data.messages) {
                                        const restoredSession = {
                                          id: session.data.sessionId as string,
                                          topic: session.data.topic as string,
                                          participantIds: session.data.participants as string[],
                                          messages: session.data.messages as DebateMessage[],
                                          isActive: false,
                                          currentSpeaker: 0,
                                          createdAt: new Date(session.createdAt),
                                          lastActivity: new Date(session.data.lastActivity as string || session.lastAccessed),
                                        };
                                        
                                        restoreSession(restoredSession, session.data.analysis as DebateAnalysis);
                                        setDebateOpen(true);
                                      }
                                    }
                                  }}
                                  className="flex-1 text-left text-sm truncate"
                                >
                                  {session.name}
                                </button>
                                
                                <div className="relative">
                                  <button
                                    onClick={() => setShowSessionMenu(
                                      showSessionMenu === session.id ? null : session.id
                                    )}
                                    className="p-1 text-gray-500 hover:text-gray-300 transition-colors"
                                  >
                                    <EllipsisVerticalIcon className="w-3 h-3" />
                                  </button>
                                  
                                  {showSessionMenu === session.id && (
                                    <div className="absolute right-0 top-full mt-1 w-32 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10">
                                      <button
                                        onClick={() => handleSessionAction('duplicate', session.id)}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                                      >
                                        <DocumentDuplicateIcon className="w-3 h-3" />
                                        Duplicar
                                      </button>
                                      <button
                                        onClick={() => handleSessionAction('delete', session.id)}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                                      >
                                        <TrashIcon className="w-3 h-3" />
                                        Eliminar
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-xs text-gray-500 text-center">
              <div>Sesiones paralelas</div>
              <div>& Navegación rápida</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}