'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { useUIStore } from '@/lib/stores/ui-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { useSessionStore } from '@/lib/stores/session-store';

interface DebateSetupProps {
  onClose?: () => void;
  onStartDebate?: (topic: string, participantIds: string[]) => void;
}

export default function DebateSetup({ onClose, onStartDebate }: DebateSetupProps) {
  const [topic, setTopic] = useState('');
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);
  const { addNotification, setActiveTab } = useUIStore();
  const { startSession } = useDebateStore();
  const { createSession, switchToSession } = useSessionStore();

  // Error boundary effect
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('DebateSetup error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  // Get available thinkers (philosophers and scientists)
  const availableThinkers = useMemo(() => {
    try {
      if (!philosophicalData) {
        return [];
      }

      return Object.values(philosophicalData)
        .filter(item => item.type === 'philosopher' || item.type === 'scientist')
        .sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error('Error processing philosophical data:', error);
      return [];
    }
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

  if (!philosophicalData || availableThinkers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Error de Carga</h2>
            <p className="text-gray-400">No se pudieron cargar los datos filosóficos.</p>
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

  const handleParticipantToggle = (conceptId: string) => {
    setSelectedParticipants(prev => {
      if (prev.includes(conceptId)) {
        return prev.filter(id => id !== conceptId);
      } else {
        return prev.length < 4 ? [...prev, conceptId] : prev;
      }
    });
  };

  const validateSetup = () => {
    const newErrors: string[] = [];
    
    if (!topic.trim()) {
      newErrors.push('El tema del debate es requerido');
    }
    
    if (selectedParticipants.length < 2) {
      newErrors.push('Selecciona al menos 2 participantes');
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleStartDebate = () => {
    if (!validateSetup()) return;
    
    try {
      // Crear una nueva sesión de debate
      const sessionName = `Debate: ${topic.substring(0, 30)}${topic.length > 30 ? '...' : ''}`;
      const sessionId = createSession('debate', sessionName, {
        topic,
        participants: selectedParticipants,
        status: 'active'
      });
      
      // Cambiar a la nueva sesión
      switchToSession(sessionId);
      
      // Iniciar el debate en el debate store
      startSession(topic, selectedParticipants);
      
      // Cambiar a la tab de debate
      setActiveTab('debate');
      
      addNotification({
        type: 'success',
        title: 'Debate Iniciado',
        message: `Debate sobre "${topic}" ha comenzado`
      });
      
      if (onStartDebate) {
        onStartDebate(topic, selectedParticipants);
      }
      
      // Cerrar el setup
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Error starting debate:', error);
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'No se pudo iniciar el debate'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Configurar Debate</h2>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Topic Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tema del Debate
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ej: La naturaleza de la realidad"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Participants Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Participantes (2-4)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {availableThinkers.map((thinker) => (
                <button
                  key={thinker.id}
                  onClick={() => handleParticipantToggle(thinker.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    selectedParticipants.includes(thinker.id)
                      ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                      : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <div className="font-medium">{thinker.name}</div>
                  <div className="text-sm opacity-75">
                    {thinker.year > 0 ? thinker.year : `${Math.abs(thinker.year)} a.C.`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Errors */}
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <ul className="text-red-300 text-sm space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleStartDebate}
              disabled={selectedParticipants.length < 2 || !topic.trim()}
              className="flex-1 px-6 py-3 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              Iniciar Debate
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}