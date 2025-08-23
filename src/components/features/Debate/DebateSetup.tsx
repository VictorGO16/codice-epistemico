'use client';

import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { useUIStore } from '@/lib/stores/ui-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { validateDebateSetup } from '@/lib/utils/validation';

interface DebateSetupProps {
  onClose?: () => void;
  onStartDebate?: (topic: string, participantIds: string[]) => void;
}

export default function DebateSetup({ onClose, onStartDebate }: DebateSetupProps) {
  const [topic, setTopic] = useState('');
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { addNotification, setActiveTab } = useUIStore();
  const { startSession } = useDebateStore();

  // Error boundary effect
  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('DebateSetup error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Error Inesperado</h2>
            <p className="text-gray-400">Ha ocurrido un error al cargar el componente.</p>
            {onClose && (
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              >
                Volver
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Debug: Log the philosophical data
  React.useEffect(() => {
    console.log('DebateSetup mounted. Philosophical data:', {
      exists: !!philosophicalData,
      type: typeof philosophicalData,
      keys: philosophicalData ? Object.keys(philosophicalData).length : 0,
      sample: philosophicalData ? Object.keys(philosophicalData).slice(0, 5) : []
    });
  }, []);

  // Early return if there's a critical error
  if (!philosophicalData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Error de Carga</h2>
            <p className="text-gray-400">No se pudieron cargar los datos filosóficos.</p>
            <p className="text-gray-500 text-sm mt-2">
              Tipo de datos: {typeof philosophicalData}
            </p>
            {onClose && (
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              >
                Volver
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Get available thinkers (philosophers and scientists)
  const availableThinkers = React.useMemo(() => {
    try {
      console.log('Processing philosophical data...', { 
        hasData: !!philosophicalData, 
        dataKeys: philosophicalData ? Object.keys(philosophicalData).length : 0 
      });
      
      if (!philosophicalData) {
        console.warn('philosophicalData is not available');
        setIsLoading(false);
        return [];
      }
      
      const values = Object.values(philosophicalData);
      console.log('Values extracted:', { count: values?.length || 0, sample: values?.slice(0, 3) || [] });
      
      if (!values || values.length === 0) {
        console.warn('philosophicalData has no values');
        setIsLoading(false);
        return [];
      }
      
      const filtered = values.filter(
        concept => concept && (concept.type === 'philosopher' || concept.type === 'scientist')
      );
      
      console.log('Filtered thinkers:', { count: filtered?.length || 0, sample: filtered?.slice(0, 3) || [] });
      
      if (!filtered || filtered.length === 0) {
        console.warn('No philosophers or scientists found in data');
        setIsLoading(false);
        return [];
      }
      
      setIsLoading(false);
      return filtered?.sort((a, b) => a.name.localeCompare(b.name)) || [];
    } catch (error) {
      console.error('Error processing philosophical data:', error);
      setIsLoading(false);
      return [];
    }
  }, []);

  const handleParticipantToggle = (conceptId: string) => {
    setSelectedParticipants(prev => {
      const currentParticipants = prev || [];
      if (currentParticipants.includes(conceptId)) {
        return currentParticipants.filter(id => id !== conceptId);
      } else if (currentParticipants.length < 5) {
        return [...currentParticipants, conceptId];
      } else {
        addNotification({
          type: 'warning',
          title: 'Límite alcanzado',
          message: 'Solo puedes seleccionar hasta 5 participantes para un debate.',
        });
        return currentParticipants;
      }
    });
  };

  const handleSubmit = () => {
    const participants = selectedParticipants || [];
    const validationErrors = validateDebateSetup(topic, participants);

    if (validationErrors && validationErrors.length > 0) {
      setErrors(validationErrors.map(error => error.message));
      return;
    }

    setErrors([]);
    
    // Start the debate session
    startSession(topic.trim(), participants);
    
    // Go back to home tab so the modal can be seen
    setActiveTab('home');
    
    // Call onStartDebate if provided
    if (onStartDebate) {
      onStartDebate(topic.trim(), participants);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'philosopher': return '👤';
      case 'scientist': return '🔬';
      default: return '📖';
    }
  };

  try {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🗣️</div>
              <div>
                <h2 className="text-xl font-bold text-white">Configurar Debate Filosófico</h2>
                <p className="text-sm text-gray-400">Selecciona un tema y los participantes</p>
              </div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="p-6 space-y-6">
            {/* Topic Input */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Tema del Debate
              </label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ej: ¿Cuál es la naturaleza del conocimiento científico? ¿Es la verdad absoluta o relativa?"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-2">
                Describe el tema o pregunta que quieres que debatan los filósofos
              </p>
            </div>

            {/* Participant Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Participantes ({selectedParticipants?.length || 0}/5)
              </label>
              <p className="text-sm text-gray-400 mb-4">
                Selecciona entre 2 y 5 filósofos o científicos para el debate
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="col-span-full text-center py-8 text-gray-400">
                    <p>Cargando pensadores disponibles...</p>
                  </div>
                ) : availableThinkers.length === 0 ? (
                  <div className="col-span-full text-center py-8 text-gray-400">
                    <p>No se encontraron pensadores disponibles.</p>
                    <p className="text-sm mt-2">Por favor, verifica que los datos estén cargados correctamente.</p>
                  </div>
                ) : (
                  availableThinkers.map((thinker) => {
                  const isSelected = selectedParticipants?.includes(thinker.id) || false;

                  return (
                    <button
                      key={thinker.id}
                      onClick={() => handleParticipantToggle(thinker.id)}
                      className={`
                      p-4 rounded-lg border-2 transition-all duration-200 text-left
                      ${isSelected
                          ? 'border-teal-500 bg-teal-500/20 text-white'
                          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                        }
                    `}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(thinker.type)}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold">{thinker.name}</h3>
                          <p className="text-xs opacity-70">
                            {thinker.year > 0 ? thinker.year : `${Math.abs(thinker.year)} a.C.`}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                  })
                )}
              </div>
            </div>

            {/* Selected Participants Preview */}
            {selectedParticipants?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Participantes Seleccionados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedParticipants?.map((participantId) => {
                    const participant = philosophicalData?.[participantId];
                    if (!participant) return null;

                    return (
                      <div
                        key={participantId}
                        className="bg-teal-500/20 border border-teal-500/50 rounded-lg px-3 py-2 flex items-center gap-2"
                      >
                        <span>{getTypeIcon(participant.type)}</span>
                        <span className="text-sm font-medium text-teal-300">
                          {participant.name}
                        </span>
                        <button
                          onClick={() => handleParticipantToggle(participantId)}
                          className="text-teal-300 hover:text-white ml-1"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Errors */}
            {errors && errors.length > 0 && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                <h4 className="text-red-400 font-semibold mb-2">Errores de validación:</h4>
                <ul className="text-red-300 text-sm space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700 flex justify-end gap-3">
            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancelar
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={isLoading || (selectedParticipants?.length || 0) < 2 || !topic.trim()}
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
            >
              Iniciar Debate
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DebateSetup render error:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Error de Renderizado</h2>
            <p className="text-gray-400">Ha ocurrido un error al mostrar el componente.</p>
            <p className="text-gray-500 text-sm mt-2">
              {error instanceof Error ? error.message : 'Error desconocido'}
            </p>
            {onClose && (
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              >
                Volver
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}