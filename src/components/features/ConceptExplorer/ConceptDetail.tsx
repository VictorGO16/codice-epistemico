'use client';

import { useState } from 'react';
import type { ComponentType } from 'react';
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
import {
  TypeIcon,
  IconBook,
  IconMind,
  IconMethod,
  IconDialogue,
  IconLightbulb,
  IconLink,
  IconAnalysis,
  IconWarning,
  IconClose,
} from '@/components/ui/Icons';

type IconProps = { size?: number | string; className?: string };

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
          <IconBook size={52} className="text-gray-600 mb-4 mx-auto" />
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
          <IconWarning size={52} className="text-red-800/50 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-red-400 mb-2">Concepto no encontrado</h2>
          <p className="text-gray-400">El concepto solicitado no existe en la base de datos.</p>
        </div>
      </div>
    );
  }

  const relatedConnections = conceptConnections.filter(
    (conn) => conn.source === currentConcept || conn.target === currentConcept
  );

  /*
   * Decisión 2 — Las pestañas son las tres CARAS DEL CONTENIDO.
   * "Diálogo" salió de aquí: no es una faceta del texto, es una herramienta,
   * y mezclarla con las otras tres hacía que la fila significara dos cosas.
   * Ahora es una acción primaria en la cabecera, disponible desde cualquier
   * pestaña en lugar de estar escondida en la cuarta posición.
   */
  const tabs: { id: string; label: string; Icon: ComponentType<IconProps> }[] = [
    { id: 'context',     label: 'Contexto',    Icon: IconBook },
    { id: 'psychology',  label: 'Psicología',  Icon: IconMind },
    { id: 'methodology', label: 'Metodología', Icon: IconMethod },
  ];

  const canDialogue = concept.type === 'philosopher' || concept.type === 'scientist';

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'philosopher': return 'Filósofo';
      case 'scientist':   return 'Científico';
      case 'concept':     return 'Concepto';
      case 'method':      return 'Método';
      default:            return type;
    }
  };

  const getConnectionTypeLabel = (type: string) => {
    switch (type) {
      case 'influence':    return 'Influencia';
      case 'critique':     return 'Crítica';
      case 'continuation': return 'Continuación';
      case 'application':  return 'Aplicación';
      default:             return type;
    }
  };

  return (
    /*
      Decisión 1 — Antes el artículo ocupaba todo el ancho disponible: a 1920 px
      las líneas llegaban a 145 caracteres (el rango legible es 65–75).
      max-w-4xl acota la columna; el texto en sí queda en 68ch vía .rich-content.
    */
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-gray-700 relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="mt-1 shrink-0">
            <TypeIcon type={concept.type} size={44} className="text-teal-400/70" />
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              {concept.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
                {getTypeLabel(concept.type)}
              </span>
              <span className="text-base">
                {concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/*
              Acción primaria única de la pantalla (Decisión 5: un solo acento).
              Texto oscuro sobre el relleno teal: 9.4:1 en vez de los 2.42:1
              que daba el texto blanco.
            */}
            {canDialogue && (
              <button
                onClick={() => startSession(concept.id, concept.name)}
                className="hidden sm:flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-[#04211f] font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                <IconDialogue size={17} className="shrink-0" />
                Dialogar con {concept.name.split(' ').slice(-1)[0]}
              </button>
            )}

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(concept.id)}
              className={`p-3 rounded-full transition-colors duration-200 ${isFavorite(concept.id)
                ? 'text-red-400 hover:text-red-300 bg-red-500/10'
                : 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
                }`}
              title={isFavorite(concept.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              aria-pressed={isFavorite(concept.id)}
            >
              {isFavorite(concept.id) ? (
                <HeartSolidIcon className="w-6 h-6" />
              ) : (
                <HeartIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* En móvil la acción primaria va a ancho completo, bajo la cabecera */}
        {canDialogue && (
          <button
            onClick={() => startSession(concept.id, concept.name)}
            className="sm:hidden w-full flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-[#04211f] font-semibold px-4 py-3 rounded-lg transition-colors"
          >
            <IconDialogue size={17} className="shrink-0" />
            Dialogar con {concept.name}
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-1 bg-gray-800/50 p-1 rounded-lg overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
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

      {/* Content */}
      <div className="bg-gray-800/30 rounded-xl p-6 md:p-8 border border-gray-700/50">
        {activeTab === 'context' && (
          <div className="space-y-8">
            <div>
              {/*
                Decisión 5 — Los encabezados de sección dejan de ser de color:
                antes "Idea Central" y el enlace "David Hume" eran ambos teal,
                así que no se distinguía un título de algo pulsable.
              */}
              <h2 className="section-label mb-5 flex items-center gap-2.5">
                <IconLightbulb size={16} className="text-teal-400 shrink-0" />
                Idea Central
              </h2>
              <EnhancedRichContent content={concept.coreIdea} />
            </div>

            {relatedConnections.length > 0 && (
              <div>
                <h2 className="section-label mb-5 flex items-center gap-2.5">
                  <IconLink size={16} className="text-teal-400 shrink-0" />
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
                          <TypeIcon type={relatedConcept.type} size={28} className="text-gray-400/70 mt-0.5 shrink-0" />
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
                              className="text-lg font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-2 text-left"
                              onClick={() => useConceptStore.getState().setCurrentConcept(relatedId)}
                            >
                              {relatedConcept.name}
                            </button>
                            <p className="text-gray-300 leading-relaxed measure">
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
            <h2 className="section-label mb-5 flex items-center gap-2.5">
              <IconMind size={16} className="text-teal-400 shrink-0" />
              Conexiones con la Psicología
            </h2>
            {concept.psychologyLink ? (
              <EnhancedRichContent content={concept.psychologyLink} />
            ) : (
              <div className="text-center py-12">
                <IconMind size={48} className="text-gray-700 mb-4 mx-auto" />
                <p className="text-gray-400 text-lg">
                  La conexión directa con la psicología no está especificada para este concepto.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'methodology' && (
          <div>
            <h2 className="section-label mb-5 flex items-center gap-2.5">
              <IconMethod size={16} className="text-teal-400 shrink-0" />
              Metodología de Investigación
            </h2>
            {concept.methodologyLink ? (
              <EnhancedRichContent content={concept.methodologyLink} />
            ) : (
              <div className="text-center py-12">
                <IconAnalysis size={48} className="text-gray-700 mb-4 mx-auto" />
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
                <IconDialogue size={56} className="text-teal-400/50 mb-6 mx-auto" />
                <h2 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">
                  Diálogo con {concept.name}
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
                  Conversa con una simulación inteligente de {concept.name}.
                  Plantea tus preguntas filosóficas y recibe respuestas basadas en su pensamiento y obra.
                </p>
                <button
                  onClick={() => startSession(concept.id, concept.name)}
                  className="bg-teal-400 hover:bg-teal-300 text-[#04211f] font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Iniciar Conversación
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <IconClose size={40} className="text-gray-700 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-400 mb-2">
                  Diálogo no disponible
                </h3>
                <p className="text-gray-500">
                  El Diálogo solo está disponible para filósofos y científicos individuales.
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
