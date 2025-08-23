'use client';

import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useOracle } from '@/lib/hooks/useGemini';
import { useUIStore } from '@/lib/stores/ui-store';
import { useOracleStore } from '@/lib/stores/oracle-store';
import ExportButton from '@/components/ui/ExportButton';
import { exportOracleToPDF, exportToHTML, OracleExportData } from '@/lib/utils/export';
import { philosophicalData } from '@/lib/data/philosophical-data';
import AnimatedLoader from '@/components/ui/AnimatedLoader';
import { AnimatedButton } from '@/components/ui/AnimatedCard';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedRichContent from '@/components/ui/EnhancedRichContent';

interface OracleChatProps {
  conceptId: string;
  conceptName: string;
}

export default function OracleChat({ conceptId, conceptName }: OracleChatProps) {
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { askOracle, isLoading, error } = useOracle();
  const { addNotification } = useUIStore();
  const { 
    currentSession, 
    addMessage, 
    updateMessage, 
    endSession,
    setOracleOpen 
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
    let content = `CONVERSACIÓN CON EL ORÁCULO\n\n`;
    content += `Filósofo: ${conceptName}\n`;
    content += `Fecha: ${new Date().toLocaleDateString('es-ES')}\n\n`;
    content += `${'='.repeat(50)}\n\n`;

    if (concept) {
      content += `SOBRE ${conceptName.toUpperCase()}\n\n`;
      content += `${concept.coreIdea}\n\n`;
      content += `${'-'.repeat(30)}\n\n`;
    }

    content += `CONVERSACIÓN\n\n`;
    currentSession.messages
      .filter(msg => !msg.isLoading)
      .forEach((message, index) => {
        const speaker = message.speaker === 'user' ? 'Usuario' : conceptName;
        content += `${speaker}:\n`;
        content += `${message.text}\n\n`;
        
        if (index < currentSession.messages.length - 1) {
          content += `${'-'.repeat(20)}\n\n`;
        }
      });

    exportToHTML({
      title: `Oráculo: ${conceptName}`,
      content,
      metadata: {
        subject: `Conversación con ${conceptName}`,
        author: conceptName,
        keywords: ['oráculo', 'filosofía', conceptId],
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
      const conversationHistory = currentSession.messages.map(msg => ({
        speaker: msg.speaker,
        text: msg.text,
      }));

      const response = await askOracle(conceptId, userText, conversationHistory);

      // Update loading message with actual response
      updateMessage(loadingMessageId, {
        text: response,
        isLoading: false,
      });

    } catch (err) {
      // Remove loading message and show error
      updateMessage(loadingMessageId, {
        text: 'Lo siento, no pude procesar tu pregunta en este momento. Por favor, intenta de nuevo.',
        isLoading: false,
      });
      
      addNotification({
        type: 'error',
        title: 'Error en el Oráculo',
        message: 'No pude obtener una respuesta. Por favor, intenta de nuevo.',
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
      <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🔮</div>
            <div>
              <h2 className="text-xl font-bold text-white">Oráculo de {conceptName}</h2>
              <p className="text-sm text-gray-400">Conversación filosófica interactiva</p>
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
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {currentSession.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.speaker === 'user'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}
              >
                {message.isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full"></div>
                    <span className="text-gray-400">Reflexionando...</span>
                  </div>
                ) : (
                  <>
                    <EnhancedRichContent content={message.text} />
                    <div className="text-xs opacity-70 mt-2">
                      {new Date(message.timestamp).toLocaleTimeString()}
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
              placeholder={`Pregúntale a ${conceptName}...`}
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
          
          {error && (
            <div className="mt-3 text-red-400 text-sm">
              Error: {error}
            </div>
          )}
          
          <div className="mt-3 text-xs text-gray-500">
            Presiona Enter para enviar • Shift+Enter para nueva línea
          </div>
        </div>
      </div>
    </div>
  );
}