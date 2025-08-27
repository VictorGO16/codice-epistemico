'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, ChartBarIcon, DocumentTextIcon, ArrowPathIcon, DocumentArrowDownIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useDebateStore, DebateSession } from '@/lib/stores/debate-store';
import { useSessionStore } from '@/lib/stores/session-store';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { useUIStore } from '@/lib/stores/ui-store';
import { exportToHTML, exportDebateToPDF, DebateExportData } from '@/lib/utils/export';
import EnhancedRichContent from '@/components/ui/EnhancedRichContent';

interface DebateAnalysisProps {
  session: DebateSession;
  onClose: () => void;
}

interface ArgumentCard {
  id: string;
  participantId: string;
  participantName: string;
  thesis: string;
  arguments: string[];
  refutations: string[];
  strength: number;
  coherence: number;
}

interface AnalysisResult {
  arguments: ArgumentCard[];
  moderatorConclusion: string;
  participantScores: Record<string, number>;
  overallAnalysis: string;
}

export default function DebateAnalysis({ session, onClose }: DebateAnalysisProps) {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedArgument, setSelectedArgument] = useState<string | null>(null);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'arguments' | 'evaluation'>('arguments');
  const [isMobile, setIsMobile] = useState(false);
  
  const { addNotification, setModalActive } = useUIStore();
  const { returnToDebate, setCurrentAnalysis, currentAnalysis } = useDebateStore();
  const { updateSessionData, getSessionsByType } = useSessionStore();

  // Helper function to convert analysis data to AnalysisResult
  const convertToAnalysisResult = (analysisData: Record<string, unknown> | unknown): AnalysisResult => {
    const data = analysisData as Record<string, unknown>;
    // Handle both DebateAnalysis format and API response format
    const args = (data.arguments as unknown[]) || [];
    const argumentCards: ArgumentCard[] = args.map((arg: unknown, index: number) => {
      const argObj = arg as Record<string, unknown>;
      return {
        id: (argObj.id as string) || `arg-${index}`,
        participantId: (argObj.participantId as string) || Object.keys(philosophicalData).find(key => 
          philosophicalData[key].name === (argObj.participantName as string)
        ) || '',
        participantName: (argObj.participantName as string) || '',
        thesis: (argObj.thesis as string) || '',
        arguments: (argObj.arguments as string[]) || [],
        refutations: (argObj.refutations as string[]) || [],
        strength: (argObj.strength as number) || 0,
        coherence: (argObj.coherence as number) || 0,
      };
    });

    return {
      arguments: argumentCards,
      moderatorConclusion: (data.moderatorConclusion as string) || '',
      participantScores: (data.participantScores as Record<string, number>) || {},
      overallAnalysis: (data.overallAnalysis as string) || '',
    };
  };

  useEffect(() => {
    // Use existing analysis if available
    if (currentAnalysis) {
      setAnalysis(convertToAnalysisResult(currentAnalysis));
    } else {
      generateAnalysis();
    }
  }, [session, currentAnalysis]);

  useEffect(() => {
    // Handle responsive behavior
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Notify that modal is active
    setModalActive(true);
    return () => setModalActive(false);
  }, [setModalActive]);

  const generateAnalysis = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/debate/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: session.id,
          topic: session.topic,
          participants: session.participantIds.map(id => ({
            id,
            name: philosophicalData[id]?.name || 'Desconocido',
            type: philosophicalData[id]?.type || 'concept',
          })),
          messages: session.messages.filter(msg => !msg.isLoading),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al generar el análisis');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Error desconocido');
      }

      const analysisResult = convertToAnalysisResult(data.analysis);
      setAnalysis(analysisResult);
      setCurrentAnalysis(data.analysis); // Store raw data in global state
      
      // Save analysis to session if exists
      const debateSessions = getSessionsByType('debate');
      const currentDebateSession = debateSessions.find(s => 
        s.data?.sessionId === session.id
      );
      
      if (currentDebateSession) {
        updateSessionData(currentDebateSession.id, {
          hasAnalysis: true,
          analysis: data.analysis
        });
      }
      
      // Analysis is now stored in global state via setCurrentAnalysis
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  const getParticipantColor = (participantId: string) => {
    const colors = [
      'bg-blue-500/20 border-blue-500/50 text-blue-300',
      'bg-green-500/20 border-green-500/50 text-green-300',
      'bg-purple-500/20 border-purple-500/50 text-purple-300',
      'bg-orange-500/20 border-orange-500/50 text-orange-300',
      'bg-pink-500/20 border-pink-500/50 text-pink-300',
    ];
    const index = session.participantIds.indexOf(participantId);
    return colors[index % colors.length];
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'philosopher': return '👤';
      case 'scientist': return '🔬';
      default: return '📖';
    }
  };

  const handleExportHTML = () => {
    if (!analysis) return;

    const participantNames = session.participantIds
      .map(id => philosophicalData[id]?.name || id)
      .join(', ');

    let content = `DEBATE FILOSÓFICO CON ANÁLISIS\n\n`;
    content += `Tema: ${session.topic}\n`;
    content += `Participantes: ${participantNames}\n`;
    content += `Fecha: ${new Date().toLocaleDateString('es-ES')}\n\n`;
    content += `${'='.repeat(50)}\n\n`;

    // Transcripción del debate
    content += `TRANSCRIPCIÓN DEL DEBATE\n\n`;
    session.messages
      .filter(msg => !msg.isLoading)
      .forEach((message, index) => {
        const speakerName = message.participantId === 'moderator' ? 'Moderador' : (philosophicalData[message.participantId]?.name || message.participantId);
        content += `${speakerName}:\n`;
        content += `${message.text}\n\n`;
        
        if (index < session.messages.filter(m => !m.isLoading).length - 1) {
          content += `${'-'.repeat(30)}\n\n`;
        }
      });

    // Análisis
    content += `\n\n${'='.repeat(50)}\n\n`;
    content += `ANÁLISIS DEL DEBATE\n\n`;
    
    content += `ARGUMENTOS PRINCIPALES:\n\n`;
    analysis.arguments.forEach((arg, index) => {
      content += `${index + 1}. ${arg.participantName}\n`;
      content += `   Tesis: ${arg.thesis}\n`;
      content += `   Fuerza: ${arg.strength}/10 | Coherencia: ${arg.coherence}/10\n`;
      if (arg.arguments.length > 0) {
        content += `   Argumentos:\n`;
        arg.arguments.forEach((argument) => {
          content += `   • ${argument}\n`;
        });
      }
      if (arg.refutations.length > 0) {
        content += `   Refutaciones:\n`;
        arg.refutations.forEach((refutation) => {
          content += `   ↳ ${refutation}\n`;
        });
      }
      content += `\n`;
    });

    content += `PUNTUACIONES:\n\n`;
    Object.entries(analysis.participantScores).forEach(([participantId, score]) => {
      const participant = philosophicalData[participantId];
      if (participant) {
        content += `${participant.name}: ${score}/10\n`;
      }
    });

    content += `\nCONCLUSIÓN DEL MODERADOR:\n\n`;
    content += `${analysis.moderatorConclusion}\n\n`;

    content += `ANÁLISIS GENERAL:\n\n`;
    content += `${analysis.overallAnalysis}\n`;

    exportToHTML({
      title: `Debate y Análisis: ${session.topic}`,
      content,
      metadata: {
        subject: session.topic,
        author: participantNames,
        keywords: ['debate', 'filosofía', 'análisis', ...session.participantIds],
        createdAt: new Date(),
      },
    });

    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Debate y análisis exportados como HTML exitosamente'
    });
  };

  const handleExportPDF = async () => {
    if (!analysis) return;

    const exportData: DebateExportData = {
      topic: session.topic,
      participants: session.participantIds,
      messages: session.messages
        .filter(msg => !msg.isLoading)
        .map(msg => ({
          speaker: msg.participantId,
          content: msg.text,
          timestamp: new Date(msg.timestamp)
        })),
      analysis: analysis
    };

    await exportDebateToPDF(exportData);
    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Debate y análisis exportados como PDF exitosamente'
    });
  };

  // Component: Arguments Panel
  const ArgumentsPanel = ({ className = "" }: { className?: string }) => (
    <div className={`overflow-y-auto ${className}`}>
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <DocumentTextIcon className="w-5 h-5" />
        Argumentos Principales
      </h3>
      
      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {analysis!.arguments.map((argument) => {
          const participant = philosophicalData[argument.participantId];
          const isSelected = selectedArgument === argument.id;
          
          return (
            <div
              key={argument.id}
              className={`p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                isSelected
                  ? 'border-teal-500 bg-teal-500/10'
                  : `border-gray-600 hover:border-gray-500 ${getParticipantColor(argument.participantId)}`
              }`}
              onClick={() => setSelectedArgument(isSelected ? null : argument.id)}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <span className="text-lg md:text-2xl flex-shrink-0">{getTypeIcon(participant?.type || 'concept')}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm md:text-base truncate">{argument.participantName}</h4>
                  <div className="flex items-center gap-1 md:gap-2 text-xs">
                    <span>💪 {argument.strength}/10</span>
                    <span>•</span>
                    <span>🧠 {argument.coherence}/10</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-2 md:mb-3">
                <h5 className="font-medium text-xs md:text-sm mb-1">Tesis Principal:</h5>
                <p className="text-xs md:text-sm opacity-90">{argument.thesis}</p>
              </div>
              
              {argument.arguments.length > 0 && (
                <div className="mb-2 md:mb-3">
                  <h5 className="font-medium text-xs md:text-sm mb-1">Argumentos:</h5>
                  <ul className="text-xs md:text-sm opacity-90 space-y-1">
                    {argument.arguments.map((arg, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5 flex-shrink-0">•</span>
                        <span className="break-words">{arg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {argument.refutations.length > 0 && (
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">Refutaciones:</h5>
                  <ul className="text-xs md:text-sm opacity-90 space-y-1">
                    {argument.refutations.map((ref, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">↳</span>
                        <span className="break-words">{ref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Component: Evaluation Panel
  const EvaluationPanel = ({ className = "" }: { className?: string }) => (
    <div className={`overflow-y-auto ${className}`}>
      <h3 className="text-lg font-bold text-white mb-4">📊 Evaluación</h3>
      
      {/* Participant Scores */}
      <div className="mb-6">
        <h4 className="font-semibold text-white mb-3">Puntuaciones</h4>
        <div className="space-y-3">
          {Object.entries(analysis!.participantScores).map(([participantId, score]) => {
            const participant = philosophicalData[participantId];
            if (!participant) return null;
            
            return (
              <div key={participantId} className="flex items-center gap-3">
                <span className="text-xl">{getTypeIcon(participant.type)}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">{participant.name}</span>
                    <span className="text-sm text-teal-400">{score}/10</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full transition-all"
                      style={{ width: `${(score / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Moderator Conclusion */}
      <div className="mb-6">
        <h4 className="font-semibold text-white mb-3">🎯 Conclusión del Moderador</h4>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
          <EnhancedRichContent 
            content={analysis!.moderatorConclusion}
            className="text-sm"
          />
        </div>
      </div>

      {/* Overall Analysis */}
      <div>
        <h4 className="font-semibold text-white mb-3">🔍 Análisis General</h4>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
          <EnhancedRichContent 
            content={analysis!.overallAnalysis}
            className="text-sm"
          />
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-8 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-white mb-2">Analizando Debate</h3>
          <p className="text-gray-400">Extrayendo argumentos y evaluando coherencia filosófica...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-8 text-center max-w-md">
          <div className="text-red-400 text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-white mb-2">Error en el Análisis</h3>
          <p className="text-gray-400 mb-4">{error}</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={generateAnalysis}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              Reintentar
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-gray-700 gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <ChartBarIcon className="w-8 h-8 text-teal-400 flex-shrink-0" />
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-white">Análisis del Debate</h2>
              <p className="text-xs sm:text-sm text-gray-400 truncate">
                {session.topic}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                returnToDebate();
                onClose();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium min-h-[44px] text-sm"
              title="Volver al debate"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Volver al Debate</span>
              <span className="sm:hidden">Volver</span>
            </button>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleExportHTML}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm min-h-[44px] min-w-[60px]"
                title="Exportar como HTML"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                <span className="hidden sm:inline">HTML</span>
              </button>
              <button
                onClick={handleExportPDF}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium text-sm min-h-[44px] min-w-[60px]"
                title="Exportar como PDF"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </button>
            </div>
            
            <button
              onClick={generateAnalysis}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium min-h-[44px] text-sm"
            >
              <ArrowPathIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Regenerar</span>
              <span className="sm:hidden">Regenerar</span>
            </button>
            
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 self-center sm:self-auto"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation (Mobile Only) */}
        {isMobile && (
          <div className="flex border-b border-gray-700">
            <button 
              onClick={() => setActiveAnalysisTab('arguments')}
              className={`flex-1 px-4 py-3 font-medium text-sm transition-colors ${
                activeAnalysisTab === 'arguments' 
                  ? 'text-teal-400 border-b-2 border-teal-400 bg-teal-500/10' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              📝 Argumentos ({analysis.arguments.length})
            </button>
            <button 
              onClick={() => setActiveAnalysisTab('evaluation')}
              className={`flex-1 px-4 py-3 font-medium text-sm transition-colors ${
                activeAnalysisTab === 'evaluation' 
                  ? 'text-teal-400 border-b-2 border-teal-400 bg-teal-500/10' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              📊 Evaluación
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {!isMobile ? (
            // Desktop: Dual Panel Layout
            <div className="flex h-full">
              <ArgumentsPanel className="flex-1 p-6" />
              <EvaluationPanel className="w-96 border-l border-gray-700 p-6" />
            </div>
          ) : (
            // Mobile: Tab-based Content
            <div className="h-full">
              {activeAnalysisTab === 'arguments' ? (
                <ArgumentsPanel className="p-4 h-full" />
              ) : (
                <EvaluationPanel className="p-4 h-full" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}