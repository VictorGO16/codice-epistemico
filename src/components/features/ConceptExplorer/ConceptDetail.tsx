'use client';

import { useState } from 'react';
import { useConceptStore } from '@/lib/stores/concept-store';
import { useUIStore } from '@/lib/stores/ui-store';
import { useOracleStore } from '@/lib/stores/oracle-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { useFavoritesStore } from '@/lib/stores/favorites-store';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { conceptConnections } from '@/lib/data/connections';
import { TabId } from '@/types';
import EnhancedRichContent from '@/components/ui/EnhancedRichContent';
import OracleChat from '@/components/features/Oracle/OracleChat';
import DebateSetup from '@/components/features/Debate/DebateSetup';
import DebateChat from '@/components/features/Debate/DebateChat';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';


export default function ConceptDetail() {
  const { currentConcept } = useConceptStore();
  const { activeTab, setActiveTab } = useUIStore();
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { startSession, isOracleOpen } = useOracleStore();
  const { startSession: startDebateSession, isDebateOpen } = useDebateStore();
  const [showDebateSetup, setShowDebateSetup] = useState(false);

  const handleStartDebate = (topic: string, participantIds: string[]) => {
    startDebateSession(topic, participantIds);
    setShowDebateSetup(false);
  };

  if (!currentConcept) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h2 className="text-2xl font-bold text-white mb-2">Selecciona un Concepto</h2>
          <p className="text-gray-400">Elige un concepto del menú lateral para explorar su contenido.</p>
        </div>
      </div>
    );
  }

  const concept = philosophicalData[currentConcept];
  if (!concept) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">Concepto no encontrado</h2>
          <p className="text-gray-400">El concepto solicitado no existe en la base de datos.</p>
        </div>
      </div>
    );
  }

  // Find related connections
  const relatedConnections = conceptConnections.filter(
    (conn) => conn.source === currentConcept || conn.target === currentConcept
  );

  const tabs = [
    { id: 'context', label: 'Contexto', icon: '📖' },
    { id: 'psychology', label: 'Psicología', icon: '🧠' },
    { id: 'methodology', label: 'Metodología', icon: '🔬' },
    { id: 'oracle', label: 'Oráculo', icon: '🔮' },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'philosopher': return '👤';
      case 'scientist': return '🔬';
      case 'concept': return '💭';
      case 'method': return '📊';
      default: return '📖';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'philosopher': return 'Filósofo';
      case 'scientist': return 'Científico';
      case 'concept': return 'Concepto';
      case 'method': return 'Método';
      default: return type;
    }
  };

  const getConnectionTypeLabel = (type: string) => {
    switch (type) {
      case 'influence': return 'Influencia';
      case 'critique': return 'Crítica';
      case 'continuation': return 'Continuación';
      case 'application': return 'Aplicación';
      default: return type;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-gray-700 relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">{getTypeIcon(concept.type)}</div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {concept.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
                {getTypeLabel(concept.type)}
              </span>
              <span className="text-lg">
                {concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}
              </span>
            </div>
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(concept.id)}
            className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${isFavorite(concept.id)
              ? 'text-red-400 hover:text-red-300 bg-red-500/10'
              : 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
              }`}
            title={isFavorite(concept.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {isFavorite(concept.id) ? (
              <HeartSolidIcon className="w-6 h-6" />
            ) : (
              <HeartIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-1 bg-gray-800/50 p-1 rounded-lg overflow-x-auto">
          {tabs.map((tab) => (
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

      {/* Content */}
      <div className="bg-gray-800/30 rounded-xl p-6 md:p-8 border border-gray-700/50">
        {activeTab === 'context' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                <span>💡</span>
                Idea Central
              </h2>
              <EnhancedRichContent content={concept.coreIdea} />
            </div>

            {relatedConnections.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <span>🔗</span>
                  Relaciones Conceptuales
                </h2>
                <div className="grid gap-4">
                  {relatedConnections.map((connection, index) => {
                    const isSource = connection.source === currentConcept;
                    const relatedId = isSource ? connection.target : connection.source;
                    const relatedConcept = philosophicalData[relatedId];

                    if (!relatedConcept) return null;

                    return (
                      <div key={index} className="bg-gray-700/50 p-5 rounded-lg border border-gray-600/50 hover:border-teal-500/50 transition-all duration-200">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{getTypeIcon(relatedConcept.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-gray-400 bg-gray-600/50 px-2 py-1 rounded">
                                {getConnectionTypeLabel(connection.type)}
                              </span>
                              <span className="text-gray-500">
                                {isSource ? '→' : '←'}
                              </span>
                            </div>
                            <button
                              className="text-xl font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-2 text-left"
                              onClick={() => useConceptStore.getState().setCurrentConcept(relatedId)}
                            >
                              {relatedConcept.name}
                            </button>
                            <p className="text-gray-300 leading-relaxed">
                              {connection.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'psychology' && (
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
              <span>🧠</span>
              Conexiones con la Psicología
            </h2>
            {concept.psychologyLink ? (
              <EnhancedRichContent content={concept.psychologyLink} />
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 opacity-50">🤔</div>
                <p className="text-gray-400 text-lg">
                  La conexión directa con la psicología no está especificada para este concepto.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'methodology' && (
          <div>
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2">
              <span>🔬</span>
              Metodología de Investigación
            </h2>
            {concept.methodologyLink ? (
              <EnhancedRichContent content={concept.methodologyLink} />
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 opacity-50">📊</div>
                <p className="text-gray-400 text-lg">
                  La traducción metodológica no está especificada para este concepto.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'oracle' && (
          <div>
            {concept.type === 'philosopher' || concept.type === 'scientist' ? (
              <div className="text-center py-12">
                <div className="text-8xl mb-6 animate-pulse">🔮</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Oráculo de {concept.name}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Conversa con una simulación inteligente de {concept.name}.
                  Plantea tus preguntas filosóficas y recibe respuestas basadas en su pensamiento y obra.
                </p>
                <button
                  onClick={() => startSession(concept.id, concept.name)}
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Iniciar Conversación
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 opacity-50">🚫</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  Oráculo no disponible
                </h3>
                <p className="text-gray-500">
                  El Oráculo solo está disponible para filósofos y científicos individuales.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Oracle Chat Modal */}
      {isOracleOpen && concept && (
        <OracleChat
          conceptId={concept.id}
          conceptName={concept.name}
        />
      )}

      {/* Debate Setup Modal */}
      {showDebateSetup && (
        <DebateSetup
          onClose={() => setShowDebateSetup(false)}
          onStartDebate={handleStartDebate}
        />
      )}

      {/* Debate Chat Modal */}
      {isDebateOpen && <DebateChat />}
    </div>
  );
}