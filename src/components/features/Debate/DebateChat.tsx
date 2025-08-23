'use client';

import { useState, useRef, useEffect } from 'react';
import { XMarkIcon, PlayIcon, PauseIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useDebate } from '@/lib/hooks/useDebate';
import { useUIStore } from '@/lib/stores/ui-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import { useSessionStore } from '@/lib/stores/session-store';
import { philosophicalData } from '@/lib/data/philosophical-data';
import DebateAnalysis from './DebateAnalysis';
import ExportButton from '@/components/ui/ExportButton';
import { exportDebateToPDF, exportToHTML, DebateExportData } from '@/lib/utils/export';
import EnhancedRichContent from '@/components/ui/EnhancedRichContent';

interface AnalysisArgument {
  participantName: string;
  thesis: string;
  strength: number;
  coherence: number;
  arguments: string[];
}

interface DebateChatProps {
  onClose?: () => void;
}

export default function DebateChat({ onClose }: DebateChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [autoInterval, setAutoInterval] = useState<NodeJS.Timeout | null>(null);
  const [isGeneratingOpenings, setIsGeneratingOpenings] = useState(false);
  const hasGeneratedOpeningsRef = useRef<string | null>(null);
  const [userInput, setUserInput] = useState('');
  const [isSubmittingInput, setIsSubmittingInput] = useState(false);
  const [isContinuingDebate, setIsContinuingDebate] = useState(false);

  const { generateDebateResponse, generateOpeningStatement, isLoading } = useDebate();
  const { addNotification } = useUIStore();
  const {
    currentSession,
    currentAnalysis,
    isAnalysisOpen,
    addMessage,
    updateMessage,
    nextSpeaker,
    endSession,
    setDebateOpen,
    setAnalysisOpen,
    openAnalysis,
  } = useDebateStore();
  const { createSession, updateSessionData, getSessionsByType } = useSessionStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentSession?.messages]);

  useEffect(() => {
    // Start with opening statements when debate begins - only once per session
    if (currentSession &&
      currentSession.messages.length === 0 &&
      !isLoading &&
      !isGeneratingOpenings &&
      hasGeneratedOpeningsRef.current !== currentSession.id) {

      hasGeneratedOpeningsRef.current = currentSession.id;
      generateOpeningStatements();
    }
  }, [currentSession?.id, currentSession?.messages?.length, isLoading, isGeneratingOpenings]);

  useEffect(() => {
    return () => {
      if (autoInterval) {
        clearInterval(autoInterval);
      }
    };
  }, [autoInterval]);

  const generateOpeningStatements = async () => {
    if (!currentSession || isGeneratingOpenings) return;

    setIsGeneratingOpenings(true);

    // First, moderator introduces the debate
    const moderatorIntro = addMessage({
      participantId: 'moderator',
      participantName: 'Moderador',
      text: '',
      isLoading: true,
    });

    const participantNames = currentSession.participantIds
      .map(id => philosophicalData[id]?.name)
      .filter(Boolean)
      .join(', ');

    updateMessage(moderatorIntro, {
      text: `¡Bienvenidos a este fascinante debate filosófico! Hoy exploraremos el tema: "${currentSession.topic}". 

Nos acompañan distinguidos pensadores: ${participantNames}. Cada uno aportará su perspectiva única desde su tradición filosófica.

Comenzaremos con las declaraciones de apertura. Cada participante presentará su posición inicial sobre el tema.`,
      isLoading: false,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate opening statements for all participants
    for (let i = 0; i < currentSession.participantIds.length; i++) {
      const participantId = currentSession.participantIds[i];
      const participant = philosophicalData[participantId];

      if (!participant) continue;

      // Add loading message
      const loadingMessageId = addMessage({
        participantId,
        participantName: participant.name,
        text: '',
        isLoading: true,
      });

      try {
        // Add delay before API call to avoid rate limiting
        if (i > 0) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }

        const response = await generateOpeningStatement(
          currentSession.topic,
          participantId,
          currentSession.participantIds
        );

        console.log(`💬 Generated opening for ${participant.name}:`, response);

        // Update with actual response
        updateMessage(loadingMessageId, {
          text: response,
          isLoading: false,
        });

      } catch (error) {
        console.error(`❌ Error generating opening for ${participant.name}:`, error);
        updateMessage(loadingMessageId, {
          text: 'Lo siento, no pude generar mi declaración de apertura en este momento.',
          isLoading: false,
        });
      }
    }

    // Wait a bit more to ensure all opening statements are processed
    await new Promise(resolve => setTimeout(resolve, 4000));

    addMessage({
      participantId: 'moderator',
      participantName: 'Moderador',
      text: 'Excelentes declaraciones de apertura. Ahora procederemos con el intercambio de ideas. Cada participante podrá responder y desarrollar sus argumentos.',
      isLoading: false,
    });
    
    console.log('✅ Opening statements generation completed');

    setIsGeneratingOpenings(false);
  };

  const handleNextResponse = async () => {
    if (!currentSession || isLoading) return;

    // Count only participant messages (not moderator or opening statements)
    const participantMessages = currentSession.messages.filter(msg =>
      !msg.isLoading &&
      msg.participantId !== 'moderator' &&
      currentSession.participantIds.includes(msg.participantId)
    );

    const shouldModeratorIntervene = participantMessages.length > currentSession.participantIds.length &&
      participantMessages.length % (currentSession.participantIds.length * 2) === 0;

    if (shouldModeratorIntervene) {
      // Moderator intervention
      const moderatorMessageId = addMessage({
        participantId: 'moderator',
        participantName: 'Moderador',
        text: '',
        isLoading: true,
      });

      try {
        // Add delay before moderator intervention
        await new Promise(resolve => setTimeout(resolve, 1000));

        const recentMessages = currentSession.messages
          .filter(msg => !msg.isLoading && msg.participantId !== 'moderator')
          .slice(-3) // Last 3 participant messages
          .map(msg => `${msg.participantName}: ${msg.text}`)
          .join('\n\n');


        const response = await fetch('/api/debate/moderate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: currentSession.topic,
            conversationHistory: recentMessages.split('\n\n').map((msg: string) => ({
              participantName: msg.split(':')[0],
              text: msg.split(':').slice(1).join(':').trim()
            }))
          }),
        });

        const data = await response.json();

        updateMessage(moderatorMessageId, {
          text: data.response || 'Continuemos con el debate, manteniendo el foco en nuestro tema central.',
          isLoading: false,
        });

      } catch {
        updateMessage(moderatorMessageId, {
          text: 'Excelentes puntos. Continuemos explorando estas ideas desde diferentes perspectivas.',
          isLoading: false,
        });
      }

      await new Promise(resolve => setTimeout(resolve, 2000));

      // Don't advance speaker after moderator intervention
      // The current speaker should continue
    }

    const currentParticipantId = currentSession.participantIds[currentSession.currentSpeaker];
    const participant = philosophicalData[currentParticipantId];

    if (!participant) return;

    // Add loading message
    const loadingMessageId = addMessage({
      participantId: currentParticipantId,
      participantName: participant.name,
      text: '',
      isLoading: true,
    });

    try {
      // Prepare conversation history
      const conversationHistory = currentSession.messages
        .filter(msg => !msg.isLoading && msg.participantId !== 'moderator')
        .map(msg => ({
          participantId: msg.participantId,
          participantName: msg.participantName,
          text: msg.text,
        }));

      const response = await generateDebateResponse(
        currentSession.topic,
        currentParticipantId,
        conversationHistory,
        currentSession.participantIds
      );

      // Update loading message with actual response
      updateMessage(loadingMessageId, {
        text: response,
        isLoading: false,
      });

      // Move to next speaker
      nextSpeaker();

    } catch {
      // Remove loading message and show error
      updateMessage(loadingMessageId, {
        text: 'Lo siento, no pude generar mi respuesta en este momento.',
        isLoading: false,
      });

      addNotification({
        type: 'error',
        title: 'Error en el Debate',
        message: 'No pude obtener una respuesta. Por favor, intenta de nuevo.',
      });
    }
  };

  const toggleAutoMode = () => {
    if (isAutoMode) {
      // Stop auto mode
      if (autoInterval) {
        clearInterval(autoInterval);
        setAutoInterval(null);
      }
      setIsAutoMode(false);
    } else {
      // Start auto mode
      setIsAutoMode(true);
      const interval = setInterval(() => {
        if (!isLoading) {
          handleNextResponse();
        }
      }, 8000); // 8 seconds between responses
      setAutoInterval(interval);
    }
  };

  const handleClose = () => {
    // Stop auto mode immediately
    if (autoInterval) {
      clearInterval(autoInterval);
      setAutoInterval(null);
    }
    
    // Close the debate UI FIRST
    setDebateOpen(false);
    
    // Call the onClose prop immediately
    if (onClose) {
      onClose();
    }
    
    // Save session in background (non-blocking)
    setTimeout(() => {
      try {
        if (currentSession) {
          // Check if a session already exists for this debate
          const existingDebateSessions = getSessionsByType('debate');
          const existingSession = existingDebateSessions.find(s => 
            s.data?.sessionId === currentSession.id
          );
          
          if (existingSession) {
            // Update existing session
            updateSessionData(existingSession.id, {
              sessionId: currentSession.id,
              topic: currentSession.topic,
              participants: currentSession.participantIds,
              messages: currentSession.messages,
              status: 'paused',
              hasAnalysis: !!currentAnalysis,
              lastActivity: new Date()
            });
          } else {
            // Create new session
            createSession(
              'debate',
              `Debate: ${currentSession.topic.slice(0, 30)}${currentSession.topic.length > 30 ? '...' : ''}`,
              {
                sessionId: currentSession.id,
                topic: currentSession.topic,
                participants: currentSession.participantIds,
                messages: currentSession.messages,
                status: 'paused',
                hasAnalysis: !!currentAnalysis,
                lastActivity: new Date()
              }
            );
          }
        }
        
        // End the session (mark as inactive) after saving
        endSession();
        
      } catch (error) {
        console.error('Error saving session:', error);
        // End session anyway
        endSession();
      }
    }, 0);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'philosopher': return '👤';
      case 'scientist': return '🔬';
      default: return '📖';
    }
  };

  const handleExportPDF = async () => {
    if (!currentSession) return;

    const exportData: DebateExportData = {
      topic: currentSession.topic,
      participants: currentSession.participantIds,
      messages: currentSession.messages
        .filter(msg => !msg.isLoading)
        .map(msg => ({
          speaker: msg.participantId,
          content: msg.text,
          timestamp: new Date(msg.timestamp)
        }))
    };

    await exportDebateToPDF(exportData);
    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Debate exportado como PDF exitosamente'
    });
  };

  const handleUserInput = async () => {
    if (!currentSession || !userInput.trim() || isSubmittingInput) return;

    setIsSubmittingInput(true);

    try {
      // Add user message to the conversation
      addMessage({
        participantId: 'user',
        participantName: 'Usuario',
        text: userInput.trim(),
        isLoading: false,
      });

      // Clear input
      setUserInput('');

      // Generate moderator response incorporating user input
      const moderatorMessageId = addMessage({
        participantId: 'moderator',
        participantName: 'Moderador',
        text: '',
        isLoading: true,
      });

      const conversationHistory = currentSession.messages
        .filter(msg => !msg.isLoading && msg.participantId !== 'user')
        .slice(-5) // Last 5 messages for context
        .map(msg => ({
          participantName: msg.participantName,
          text: msg.text,
        }));

      const response = await fetch('/api/debate/moderate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: currentSession.topic,
          conversationHistory,
          userInput: userInput.trim()
        }),
      });

      const data = await response.json();

      updateMessage(moderatorMessageId, {
        text: data.response || 'Entendido. Continuemos con el debate incorporando esta perspectiva.',
        isLoading: false,
      });

    } catch (error) {
      console.error('Error processing user input:', error);
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'No pude procesar tu intervención. Intenta de nuevo.',
      });
    } finally {
      setIsSubmittingInput(false);
    }
  };

  const handleContinueDebate = async () => {
    if (!currentSession || isLoading || isContinuingDebate) return;

    setIsContinuingDebate(true);

    try {
      // Add a loading message to show the system is working
      const loadingMessageId = addMessage({
        participantId: 'system',
        participantName: 'Sistema',
        text: '',
        isLoading: true,
      });

      // Get participant data
      const participants = currentSession.participantIds.map(id => {
        const participant = philosophicalData[id];
        return participant ? {
          name: participant.name,
          year: participant.year,
          type: participant.type,
          coreIdea: participant.coreIdea
        } : null;
      }).filter(Boolean);

      const conversationHistory = currentSession.messages
        .filter(msg => !msg.isLoading && msg.participantId !== 'user' && msg.participantId !== 'system')
        .map(msg => ({
          participantName: msg.participantName,
          text: msg.text,
        }));

      const response = await fetch('/api/debate/continue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: currentSession.topic,
          participants,
          conversationHistory,
          userInput: 'Continúa el debate con la siguiente ronda de intervenciones'
        }),
      });

      const data = await response.json();

      // Remove the loading message
      updateMessage(loadingMessageId, {
        text: 'Generando nueva ronda de intervenciones...',
        isLoading: false,
      });

      // Small delay to show the message
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (data.success && data.turns) {
        // Add each turn as a message with loading states
        for (let i = 0; i < data.turns.length; i++) {
          const turn = data.turns[i];

          // Find participant ID by name
          let participantId = 'moderator';
          if (turn.speaker !== 'Moderador') {
            const foundParticipant = Object.entries(philosophicalData).find(
              ([, participant]) => participant.name === turn.speaker
            );
            if (foundParticipant) {
              participantId = foundParticipant[0];
            }
          }

          // Add loading message first
          const messageId = addMessage({
            participantId,
            participantName: turn.speaker,
            text: '',
            isLoading: true,
          });

          // Add delay between messages
          await new Promise(resolve => setTimeout(resolve, 1500));

          // Update with actual content
          updateMessage(messageId, {
            text: turn.text,
            isLoading: false,
          });
        }

        // Remove system message after all turns are added
        setTimeout(() => {
          // This would require a removeMessage function in the store
          // For now, we'll update it to indicate completion
          updateMessage(loadingMessageId, {
            text: '✅ Nueva ronda de intervenciones completada',
            isLoading: false,
          });

          // Remove it after a short delay
          setTimeout(() => {
            // Update to empty or remove - this is a UX choice
            updateMessage(loadingMessageId, {
              text: '',
              isLoading: false,
            });
          }, 2000);
        }, 500);

      } else {
        updateMessage(loadingMessageId, {
          text: '❌ No se pudo generar la continuación del debate',
          isLoading: false,
        });
      }

    } catch (error) {
      console.error('Error continuing debate:', error);
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'No pude continuar el debate. Intenta de nuevo.',
      });
    } finally {
      setIsContinuingDebate(false);
    }
  };

  const handleExportHTML = () => {
    if (!currentSession) return;

    const participantNames = currentSession.participantIds
      .map(id => philosophicalData[id]?.name || id)
      .join(', ');

    let content = `DEBATE FILOSÓFICO\n\n`;
    content += `Tema: ${currentSession.topic}\n`;
    content += `Participantes: ${participantNames}\n`;
    content += `Fecha: ${new Date().toLocaleDateString('es-ES')}\n\n`;
    content += `${'='.repeat(50)}\n\n`;

    content += `TRANSCRIPCIÓN DEL DEBATE\n\n`;
    currentSession.messages
      .filter(msg => !msg.isLoading)
      .forEach((message, index) => {
        const speakerName = message.participantId === 'moderator' ? 'Moderador' :
          message.participantId === 'user' ? 'Usuario' :
            (philosophicalData[message.participantId]?.name || message.participantId);
        content += `${speakerName}:\n`;
        content += `${message.text}\n\n`;

        if (index < currentSession.messages.filter(m => !m.isLoading).length - 1) {
          content += `${'-'.repeat(30)}\n\n`;
        }
      });

    // Add analysis if available
    if (currentAnalysis) {
      content += `\n\n${'='.repeat(50)}\n\n`;
      content += `ANÁLISIS DEL DEBATE\n\n`;

      content += `ARGUMENTOS PRINCIPALES:\n\n`;
      currentAnalysis.arguments.forEach((arg: AnalysisArgument, index: number) => {
        content += `${index + 1}. ${arg.participantName}\n`;
        content += `   Tesis: ${arg.thesis}\n`;
        content += `   Fuerza: ${arg.strength}/10 | Coherencia: ${arg.coherence}/10\n`;
        if (arg.arguments.length > 0) {
          content += `   Argumentos:\n`;
          arg.arguments.forEach((argument: string) => {
            content += `   • ${argument}\n`;
          });
        }
        content += `\n`;
      });

      content += `PUNTUACIONES:\n\n`;
      Object.entries(currentAnalysis.participantScores).forEach(([participantId, score]) => {
        const participant = philosophicalData[participantId];
        if (participant) {
          content += `${participant.name}: ${score}/10\n`;
        }
      });

      content += `\nCONCLUSIÓN DEL MODERADOR:\n\n`;
      content += `${currentAnalysis.moderatorConclusion}\n\n`;

      content += `ANÁLISIS GENERAL:\n\n`;
      content += `${currentAnalysis.overallAnalysis}\n`;
    }

    exportToHTML({
      title: `Debate: ${currentSession.topic}`,
      content,
      metadata: {
        subject: currentSession.topic,
        author: participantNames,
        keywords: ['debate', 'filosofía', ...currentSession.participantIds],
        createdAt: new Date(),
      },
    });

    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: currentAnalysis ? 'Debate y análisis exportados como HTML exitosamente' : 'Debate exportado como HTML exitosamente'
    });
  };

  if (!currentSession) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-6xl h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🗣️</div>
            <div>
              <h2 className="text-xl font-bold text-white">Debate Filosófico</h2>
              <p className="text-sm text-gray-400 max-w-2xl truncate">
                {currentSession.topic}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ExportButton
              onExportPDF={handleExportPDF}
              onExportHTML={handleExportHTML}
              disabled={currentSession.messages.filter(msg => !msg.isLoading).length < 2}
              size="sm"
              variant="ghost"
            />
            <button
              onClick={() => {
                openAnalysis();
              }}
              disabled={currentSession.messages.filter(msg => !msg.isLoading).length < 3}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium"
            >
              <ChartBarIcon className="w-4 h-4" />
              Analizar
            </button>
            <button
              onClick={toggleAutoMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isAutoMode
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
            >
              {isAutoMode ? (
                <>
                  <PauseIcon className="w-4 h-4" />
                  Pausar
                </>
              ) : (
                <>
                  <PlayIcon className="w-4 h-4" />
                  Auto
                </>
              )}
            </button>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Participants Bar */}
        <div className="p-4 border-b border-gray-700 bg-gray-800/30">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-medium text-gray-400 whitespace-nowrap">
              Participantes:
            </span>
            {currentSession.participantIds.map((participantId, index) => {
              const participant = philosophicalData[participantId];
              if (!participant) return null;

              const isCurrentSpeaker = index === currentSession.currentSpeaker;

              return (
                <div
                  key={participantId}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all ${isCurrentSpeaker
                    ? 'bg-teal-500/20 border border-teal-500/50 text-teal-300'
                    : 'bg-gray-700/50 text-gray-300'
                    }`}
                >
                  <span>{getTypeIcon(participant.type)}</span>
                  <span className="text-sm font-medium">{participant.name}</span>
                  {isCurrentSpeaker && (
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {currentSession.messages.map((message) => {
            const participant = philosophicalData[message.participantId];
            // Allow moderator, user, and system messages even if not in philosophicalData
            if (!participant && message.participantId !== 'moderator' && message.participantId !== 'user' && message.participantId !== 'system') return null;

            const isUser = message.participantId === 'user';
            const isModerator = message.participantId === 'moderator';
            const isSystem = message.participantId === 'system';

            // Don't render empty system messages
            if (isSystem && !message.text && !message.isLoading) return null;

            return (
              <div key={message.id} className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''} ${isSystem ? 'justify-center' : ''}`}>
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${isModerator
                    ? 'bg-purple-600'
                    : isUser
                      ? 'bg-blue-600'
                      : isSystem
                        ? 'bg-orange-600'
                        : 'bg-gray-700'
                    }`}>
                    {isModerator ? '⚖️' : isUser ? '👤' : isSystem ? '⚙️' : getTypeIcon(participant?.type || 'concept')}
                  </div>
                </div>
                <div className={`flex-1 min-w-0 ${isUser ? 'text-right' : ''} ${isSystem ? 'text-center' : ''}`}>
                  <div className={`flex items-center gap-2 mb-2 ${isUser ? 'justify-end' : ''} ${isSystem ? 'justify-center' : ''}`}>
                    <h3 className="font-semibold text-white">
                      {isModerator ? 'Moderador' : isUser ? 'Usuario' : isSystem ? 'Sistema' : participant?.name || 'Desconocido'}
                    </h3>
                    {!isModerator && !isUser && !isSystem && participant && (
                      <span className="text-xs text-gray-500">
                        {participant.year > 0 ? participant.year : `${Math.abs(participant.year)} a.C.`}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className={`rounded-lg p-4 border ${isUser
                    ? 'bg-blue-900/30 border-blue-700/50'
                    : isSystem
                      ? 'bg-orange-900/30 border-orange-700/50'
                      : 'bg-gray-800/50 border-gray-700/50'
                    }`}>
                    {message.isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full"></div>
                        <span className="text-gray-400">
                          {isSystem ? 'Preparando nueva ronda...' : 'Reflexionando...'}
                        </span>
                      </div>
                    ) : (
                      <EnhancedRichContent content={message.text} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* User Input */}
        <div className="p-4 border-t border-gray-700 bg-gray-800/30">
          <div className="flex gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleUserInput()}
              placeholder="Escribe para dirigir el debate, añadir información o hacer preguntas..."
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              disabled={isSubmittingInput}
            />
            <button
              onClick={handleUserInput}
              disabled={!userInput.trim() || isSubmittingInput}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {isSubmittingInput ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              {isAutoMode ? (
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Modo automático activo - Respuestas cada 8 segundos
                </span>
              ) : isContinuingDebate ? (
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  Generando nueva ronda de intervenciones...
                </span>
              ) : (
                'Modo manual - Usa el campo de arriba para dirigir el debate o haz clic en los botones'
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleContinueDebate}
                disabled={isLoading || isAutoMode || isContinuingDebate}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
              >
                {isContinuingDebate && (
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                )}
                {isContinuingDebate ? 'Generando Ronda...' : 'Continuar Debate'}
              </button>
              <button
                onClick={handleNextResponse}
                disabled={isLoading || isAutoMode || isContinuingDebate}
                className="bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                {isLoading ? 'Generando...' : 'Siguiente Respuesta'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Modal */}
      {isAnalysisOpen && (
        <DebateAnalysis
          session={currentSession}
          onClose={() => setAnalysisOpen(false)}
        />
      )}
    </div>
  );
}