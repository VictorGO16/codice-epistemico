'use client';

import React, { useState } from 'react';
import { BeakerIcon, PlayIcon, DocumentTextIcon, LightBulbIcon, CogIcon } from '@heroicons/react/24/outline';
import { useParadigmLab } from '@/lib/hooks/useGemini';
import { useUIStore } from '@/lib/stores/ui-store';
import { useSessionStore } from '@/lib/stores/session-store';
import ExportButton from '@/components/ui/ExportButton';
import { exportParadigmToPDF, exportToHTML, ParadigmExportData } from '@/lib/utils/export';
import EnhancedRichContent from '@/components/ui/EnhancedRichContent';

interface ParadigmAnalysis {
  ontological: string;
  epistemological: string;
  methodological: string;
  summary: string;
}

const paradigms = [
  {
    id: 'positivismo_logico',
    name: 'Positivismo Lógico',
    description: 'Enfoque científico basado en la verificación empírica y la lógica formal',
    icon: '🔬',
  },
  {
    id: 'postpositivismo',
    name: 'Post-positivismo',
    description: 'Realismo crítico con falibilismo y falsacionismo',
    icon: '🎯',
  },
  {
    id: 'fenomenologia',
    name: 'Fenomenología',
    description: 'Estudio de las estructuras de la experiencia y la conciencia',
    icon: '👁️',
  },
  {
    id: 'hermeneutica',
    name: 'Hermenéutica',
    description: 'Interpretación y comprensión de significados en contexto',
    icon: '📖',
  },
  {
    id: 'construccionismo',
    name: 'Construccionismo Social',
    description: 'La realidad como construcción social a través del lenguaje',
    icon: '🏗️',
  },
  {
    id: 'enactivismo',
    name: 'Enactivismo',
    description: 'Cognición como acción corporizada y situada',
    icon: '🤸',
  },
];

export default function ParadigmLab() {
  const [selectedParadigm, setSelectedParadigm] = useState<string>('');
  const [objectOfStudy, setObjectOfStudy] = useState<string>('');
  const [analysis, setAnalysis] = useState<ParadigmAnalysis | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  
  const { analyzeWithParadigm, isLoading } = useParadigmLab();
  const { addNotification } = useUIStore();
  const { getActiveSession, updateSessionData } = useSessionStore();
  
  // Restaurar estado de la sesión activa
  const activeSession = getActiveSession();
  
  // Cargar datos de la sesión si existe
  React.useEffect(() => {
    if (activeSession && activeSession.type === 'paradigm' && activeSession.data) {
      setSelectedParadigm((activeSession.data.selectedParadigm as string) || '');
      setObjectOfStudy((activeSession.data.objectOfStudy as string) || '');
      setAnalysis(activeSession.data.analysis || null);
    }
  }, [activeSession]);

  const handleSubmit = async () => {
    setErrors([]);
    
    // Validation
    const validationErrors: string[] = [];
    if (!selectedParadigm) {
      validationErrors.push('Debes seleccionar un paradigma');
    }
    if (!objectOfStudy.trim()) {
      validationErrors.push('Debes especificar un objeto de estudio');
    }
    if (objectOfStudy.trim().length < 3) {
      validationErrors.push('El objeto de estudio debe tener al menos 3 caracteres');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await analyzeWithParadigm(selectedParadigm, objectOfStudy.trim());
      setAnalysis(result.analysis);
      
      // Guardar en la sesión activa
      if (activeSession && activeSession.type === 'paradigm') {
        updateSessionData(activeSession.id, {
          selectedParadigm,
          objectOfStudy: objectOfStudy.trim(),
          analysis: result.analysis
        });
      }
      
      addNotification({
        type: 'success',
        title: 'Análisis Completado',
        message: 'El análisis paradigmático ha sido generado exitosamente.',
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Error en el Análisis',
        message: 'No pude generar el análisis. Por favor, intenta de nuevo.',
      });
    }
  };

  const resetForm = () => {
    setSelectedParadigm('');
    setObjectOfStudy('');
    setAnalysis(null);
    setErrors([]);
    
    // Limpiar datos de la sesión activa
    if (activeSession && activeSession.type === 'paradigm') {
      updateSessionData(activeSession.id, {
        selectedParadigm: '',
        objectOfStudy: '',
        analysis: null
      });
    }
  };

  const handleExportPDF = async () => {
    if (!analysis || !selectedParadigm || !objectOfStudy) return;

    const paradigmName = paradigms.find(p => p.id === selectedParadigm)?.name || selectedParadigm;
    
    const exportData: ParadigmExportData = {
      paradigm: paradigmName,
      objectOfStudy,
      analysis: {
        ontological: analysis.ontological,
        epistemological: analysis.epistemological,
        methodological: analysis.methodological
      },
      timestamp: new Date()
    };

    await exportParadigmToPDF(exportData);
    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Análisis paradigmático exportado como PDF exitosamente'
    });
  };

  const handleExportHTML = () => {
    if (!analysis || !selectedParadigm || !objectOfStudy) return;

    const paradigmName = paradigms.find(p => p.id === selectedParadigm)?.name || selectedParadigm;
    
    let content = `ANÁLISIS PARADIGMÁTICO\n\n`;
    content += `Paradigma: ${paradigmName}\n`;
    content += `Objeto de Estudio: ${objectOfStudy}\n`;
    content += `Fecha: ${new Date().toLocaleDateString('es-ES')}\n\n`;
    content += `${'='.repeat(50)}\n\n`;

    content += `ANÁLISIS ONTOLÓGICO\n\n`;
    content += `${analysis.ontological}\n\n`;
    content += `${'-'.repeat(30)}\n\n`;

    content += `ANÁLISIS EPISTEMOLÓGICO\n\n`;
    content += `${analysis.epistemological}\n\n`;
    content += `${'-'.repeat(30)}\n\n`;

    content += `ANÁLISIS METODOLÓGICO\n\n`;
    content += `${analysis.methodological}\n`;

    exportToHTML({
      title: `Paradigma: ${paradigmName}`,
      content,
      metadata: {
        subject: `Análisis paradigmático de ${objectOfStudy}`,
        author: 'El Códice Epistémico',
        keywords: ['paradigma', 'análisis', selectedParadigm],
        createdAt: new Date(),
      },
    });

    addNotification({
      type: 'success',
      title: 'Exportación Exitosa',
      message: 'Análisis paradigmático exportado como HTML exitosamente'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="w-full mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BeakerIcon className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Laboratorio Paradigmático</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Analiza cualquier objeto de estudio desde diferentes paradigmas filosóficos y científicos
          </p>
        </div>

        {!analysis ? (
          /* Setup Form */
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Configurar Análisis</h2>
            
            {/* Paradigm Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-white mb-4">
                Selecciona un Paradigma
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paradigms.map((paradigm) => (
                  <button
                    key={paradigm.id}
                    onClick={() => {
                      setSelectedParadigm(paradigm.id);
                      // Guardar en la sesión activa
                      if (activeSession && activeSession.type === 'paradigm') {
                        updateSessionData(activeSession.id, {
                          ...activeSession.data,
                          selectedParadigm: paradigm.id
                        });
                      }
                    }}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedParadigm === paradigm.id
                        ? 'border-purple-500 bg-purple-500/20 text-white'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{paradigm.icon}</span>
                      <h3 className="font-semibold">{paradigm.name}</h3>
                    </div>
                    <p className="text-sm opacity-80">{paradigm.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Object of Study */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-white mb-3">
                Objeto de Estudio
              </label>
              <textarea
                value={objectOfStudy}
                onChange={(e) => {
                  setObjectOfStudy(e.target.value);
                  // Guardar en la sesión activa
                  if (activeSession && activeSession.type === 'paradigm') {
                    updateSessionData(activeSession.id, {
                      ...activeSession.data,
                      objectOfStudy: e.target.value
                    });
                  }
                }}
                placeholder="Ej: La ansiedad en adolescentes, El aprendizaje de idiomas, La creatividad artística, etc."
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={3}
              />
              <p className="text-sm text-gray-500 mt-2">
                Describe el fenómeno, proceso o concepto que quieres analizar
              </p>
            </div>

            {/* Errors */}
            {errors.length > 0 && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6">
                <h4 className="text-red-400 font-semibold mb-2">Errores de validación:</h4>
                <ul className="text-red-300 text-sm space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isLoading || !selectedParadigm || !objectOfStudy.trim()}
                className="flex items-center gap-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Analizando...
                  </>
                ) : (
                  <>
                    <PlayIcon className="w-5 h-5" />
                    Iniciar Análisis
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Analysis Results */
          <div className="space-y-6">
            {/* Header with Reset Button */}
            <div className="flex items-center justify-between bg-gray-900 rounded-xl border border-gray-700 p-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Análisis Paradigmático</h2>
                <p className="text-gray-300">
                  <span className="font-semibold">Paradigma:</span> {paradigms.find(p => p.id === selectedParadigm)?.name}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Objeto de estudio:</span> {objectOfStudy}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ExportButton
                  onExportPDF={handleExportPDF}
                  onExportHTML={handleExportHTML}
                  size="sm"
                  variant="secondary"
                />
                <button
                  onClick={resetForm}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Nuevo Análisis
                </button>
              </div>
            </div>

            {/* Analysis Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Ontological */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LightBulbIcon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Ontológico</h3>
                </div>
                <EnhancedRichContent content={analysis.ontological} />
              </div>

              {/* Epistemological */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Epistemológico</h3>
                </div>
                <EnhancedRichContent content={analysis.epistemological} />
              </div>

              {/* Methodological */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CogIcon className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Metodológico</h3>
                </div>
                <EnhancedRichContent content={analysis.methodological} />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Síntesis</h3>
              <EnhancedRichContent content={analysis.summary} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}