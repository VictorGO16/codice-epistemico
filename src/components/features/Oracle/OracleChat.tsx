'use client';

import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useOracle } from '@/lib/hooks/useGemini';
import { useUIStore } from '@/lib/stores/ui-store';
import { useOracleStore } from '@/lib/stores/oracle-store';
import { useSessionStore } from '@/lib/stores/session-store';
import ExportButton from '@/components/ui/ExportButton';
import { exportOracleToPDF, exportToHTML, OracleExportData } from '@/lib/utils/export';
import { IconDialogue } from '@/components/ui/Icons';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { getExposition } from '@/lib/data/corpus';
import { useUsageStore, DIALOGUE_LIMIT } from '@/lib/stores/usage-store';
import AnimatedLoader from '@/components/ui/AnimatedLoader';
import { AnimatedButton } from '@/components/ui/AnimatedCard';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedRichContent from '@/components/ui/EnhancedRichContent';

function QualityMeter() {
  const used = useUsageStore((state) => state.dialogue);
  const left = Math.max(0, DIALOGUE_LIMIT - used);
  const degraded = left === 0;
  const warn = left === 1;
  const tone = degraded || warn ? 'text-[#e0b252]' : 'text-[#9aa6b8]';

  return (
    <div
      className={`flex items-center gap-2 text-sm ${tone}`}
      title="Las primeras respuestas de cada sesión salen con el modelo de mejor calidad. Al agotarse, la conversación sigue con uno más simple. Reiniciar el hilo no las devuelve."
    >
      <span className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: DIALOGUE_LIMIT }, (_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < left ? (warn ? 'bg-[#e0b252]' : 'bg-teal-400') : 'bg-white/20'
            }`}
          />
        ))}
      </span>
      <span>
        {degraded
          ? 'Calidad reducida durante el resto de la sesión'
          : warn
            ? 'Queda 1 respuesta en calidad alta'
            : `${left} de ${DIALOGUE_LIMIT} respuestas en calidad alta`}
      </span>
    </div>
  );
}

interface OracleChatProps {
  conceptId: string;
  conceptName: string;
}

export default function OracleChat({ conceptId, conceptName }: OracleChatProps) {
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { askOracle, isLoading, error } = useOracle();
  const quotaLeft = useUsageStore((state) => Math.max(0, DIALOGUE_LIMIT - state.dialogue));
  const { addNotification } = useUIStore();
  const {
    currentSession,
    addMessage,
    updateMessage,
    endSession,
    setOracleOpen,
    clearSession,
    startSession
  } = useOracleStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentSession?.messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClose = () => {
    endSession();
    setOracleOpen(false);
  };

  const handleRestart = () => {
    clearSession(conceptId);
    startSession(conceptId, conceptName);
    addNotification({
      type: 'success',
      title: 'Conversación Reiniciada',
      message:
        quotaLeft > 0
          ? `Se descartó el hilo anterior. Quedan ${quotaLeft} respuestas en calidad alta.`
          : 'Se descartó el hilo anterior. La calidad alta ya está agotada en esta sesión.'
    });
  };

  const handleExportPDF = async () => {
    if (!currentSession) return;

    const exportData: OracleExportData = {
      philosopher: conceptId,
      conversation: currentSession.messages
        .filter(msg => !msg.isLoading)
        .map(msg => ({
          role: msg.speaker === 'user' ? 'user' : 'assistant',
          content: msg.text,
          timestamp: new Date(msg.timestamp)
        }))
    };

    await exportOracleToPDF(exportData);
    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Conversación exportada como PDF exitosamente'
    });
  };

  const handleExportHTML = () => {
    if (!currentSession) return;

    const concept = philosophicalData[conceptId];
    // El contenido se entrega en markdown y exportToHTML lo convierte en un
    // documento con jerarquía real.
    let content = '';

    const exposition = getExposition(conceptId);
    if (exposition) {
      content += `## Punto de partida\n\n${exposition.thesis}\n\n${exposition.problem}\n\n`;
    } else if (concept?.coreIdea) {
      content += `## Punto de partida\n\n${concept.coreIdea}\n\n`;
    }

    content += `## Conversación\n\n`;
    currentSession.messages
      .filter(msg => !msg.isLoading)
      .forEach((message) => {
        if (message.notice) {
          content += `> ${message.text}\n\n`;
          return;
        }
        const who = message.speaker === 'user' ? 'Pregunta' : conceptName;
        content += `### ${who}${message.degraded ? ' (calidad reducida)' : ''}\n\n`;
        content += `${message.text}\n\n`;
      });

    exportToHTML({
      title: `Diálogo con ${conceptName}`,
      content,
      metadata: {
        subject: `Conversación a partir de la obra de ${conceptName}`,
        author: conceptName,
        keywords: ['diálogo', 'filosofía de la ciencia', conceptId],
        createdAt: new Date(),
      },
    });

    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Conversación exportada como HTML exitosamente'
    });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading || !currentSession) return;

    // Add user message
    addMessage({
      speaker: 'user',
      text: inputMessage.trim(),
    });

    // Add loading message
    const loadingMessageId = addMessage({
      speaker: 'ai',
      text: '',
      isLoading: true,
    });

    const userText = inputMessage.trim();
    setInputMessage('');

    try {
      // Prepare conversation history for context
      const conversationHistory = currentSession.messages
        .filter(msg => !msg.notice && !msg.isLoading && msg.text)
        .map(msg => ({
          speaker: msg.speaker,
          text: msg.text,
        }));

      const used = useUsageStore.getState().dialogue;
      const reply = await askOracle(conceptId, userText, conversationHistory, used);

      updateMessage(loadingMessageId, {
        text: reply.text,
        isLoading: false,
        degraded: reply.tier?.degraded,
      });

      if (reply.tier && !reply.tier.degraded) {
        useUsageStore.getState().consume('dialogue');
      }

      if (reply.tier?.warn) {
        addMessage({
          speaker: 'ai',
          notice: true,
          text: 'Queda una respuesta en calidad alta. Después de esa, la conversación sigue con un modelo más simple.',
        });
      } else if (reply.tier?.degraded && !currentSession.messages.some((m) => m.notice && m.text.startsWith('Se agotó'))) {
        addMessage({
          speaker: 'ai',
          notice: true,
          text: 'Se agotó la calidad alta de esta sesión. Desde aquí responde un modelo más simple.',
        });
      }

    } catch (err) {
      // Remove loading message and show error
      updateMessage(loadingMessageId, {
        text: 'No se pudo generar la respuesta. Vuelve a intentarlo.',
        isLoading: false,
      });
      
      addNotification({
        type: 'error',
        title: 'No se pudo responder',
        message: 'No se obtuvo respuesta. Vuelve a intentarlo.',
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!currentSession) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-6xl h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <IconDialogue size={28} className="text-teal-400/70 shrink-0" />
            <div>
              <h2 className="font-display text-xl font-bold text-white tracking-tight">Diálogo con {conceptName}</h2>
              <QualityMeter />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRestart}
              className="text-gray-400 hover:text-teal-400 transition-colors p-2"
              title="Descartar el hilo y empezar de nuevo. No devuelve las respuestas en calidad alta ya usadas."
            >
              <ArrowPathIcon className="w-6 h-6" />
            </button>
            <ExportButton
              onExportPDF={handleExportPDF}
              onExportHTML={handleExportHTML}
              disabled={currentSession.messages.filter(msg => !msg.isLoading).length < 2}
              size="sm"
              variant="ghost"
            />
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
              title="Cerrar"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {currentSession.messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center gap-3">
              <p className="text-[#9aa6b8] text-sm text-center max-w-[46ch] leading-relaxed">
                Escribe tu pregunta. {conceptName} responde en su propio registro
                y sobre cualquier asunto, sea o no de su obra.
              </p>
              {quotaLeft === 0 && (
                <p className="text-[#e0b252] text-[13px] text-center max-w-[46ch] leading-relaxed">
                  La calidad alta se agotó antes en esta sesión y reiniciar el hilo
                  no la devuelve: responde el modelo más simple.
                </p>
              )}
            </div>
          )}
          {currentSession.messages.map((message) => message.notice ? (
            <div key={message.id} className="flex items-center gap-3 py-1" role="status">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[12px] text-[#9aa6b8] text-center max-w-[52ch] leading-snug">
                {message.text}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          ) : (
            <div
              key={message.id}
              className={`flex ${message.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[68ch] rounded-lg p-4 ${
                  message.speaker === 'user'
                    ? 'bg-teal-400 text-[#04211f]'
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}
              >
                {message.isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full"></div>
                    <span className="text-[#9aa6b8]">Generando respuesta…</span>
                  </div>
                ) : (
                  <>
                    <EnhancedRichContent
                      content={message.text}
                      className={`rich-content--compact rich-content--full ${
                        message.speaker === 'user' ? '[&_*]:text-[#04211f]' : ''
                      }`}
                    />
                    <div className="text-[11px] opacity-60 mt-2 tabular-nums flex items-center gap-2">
                      <span>
                        {new Date(message.timestamp).toLocaleTimeString('es-CL', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      {message.degraded && (
                        <span className="text-[#e0b252]">calidad reducida</span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Pregunta a ${conceptName}…`}
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-teal-400 hover:bg-teal-300 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed text-[#04211f] p-3 rounded-lg transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
          
          {error && (
            <div className="mt-3 text-red-400 text-sm">
              Error: {error}
            </div>
          )}
          
          <div className="mt-3 text-xs text-[#9aa6b8]">
            Presiona Enter para enviar • Shift+Enter para nueva línea
          </div>
        </div>
      </div>
    </div>
  );
}