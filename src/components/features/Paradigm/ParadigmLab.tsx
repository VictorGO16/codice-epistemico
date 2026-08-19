'use client';

import React, { useState } from 'react';
import type { ComponentType } from 'react';
import { PlayIcon, DocumentTextIcon, LightBulbIcon, CogIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import {
  IconParadigm, IconMethod, IconTarget, IconEye,
  IconBook, IconStructure, IconFlex,
} from '@/components/ui/Icons';
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
  researchProposal: string;
  summary: string;
}

type IconProps = { size?: number | string; className?: string };

const paradigms: { id: string; name: string; description: string; Icon: ComponentType<IconProps> }[] = [
  {
    id: 'positivismo_logico',
    name: 'Positivismo Lógico',
    description: 'Enfoque científico basado en la verificación empírica y la lógica formal',
    Icon: IconMethod,
  },
  {
    id: 'postpositivismo',
    name: 'Post-positivismo',
    description: 'Realismo crítico con falibilismo y falsacionismo',
    Icon: IconTarget,
  },
  {
    id: 'fenomenologia',
    name: 'Fenomenología',
    description: 'Estudio de las estructuras de la experiencia y la conciencia',
    Icon: IconEye,
  },
  {
    id: 'hermeneutica',
    name: 'Hermenéutica',
    description: 'Interpretación y comprensión de significados en contexto',
    Icon: IconBook,
  },
  {
    id: 'construccionismo',
    name: 'Construccionismo Social',
    description: 'La realidad como construcción social a través del lenguaje',
    Icon: IconStructure,
  },
  {
    id: 'enactivismo',
    name: 'Enactivismo',
    description: 'Cognición como acción corporizada y situada',
    Icon: IconFlex,
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
      setAnalysis((activeSession.data.analysis as ParadigmAnalysis) || null);
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
        methodological: analysis.methodological,
        researchProposal: analysis.researchProposal
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
    
    // Markdown: exportToHTML lo convierte en un documento con jerarquía real.
    let content = `## Síntesis\n\n${analysis.summary}\n\n`;
    content += `## Ontológico\n\n${analysis.ontological}\n\n`;
    content += `## Epistemológico\n\n${analysis.epistemological}\n\n`;
    content += `## Metodológico\n\n${analysis.methodological}\n\n`;
    content += `## Propuesta de investigación\n\n${analysis.researchProposal}\n`;

    exportToHTML({
      title: `Análisis paradigmático: ${objectOfStudy}`,
      content,
      metadata: {
        subject: `Análisis paradigmático de ${objectOfStudy}`,
        author: 'Epistemología y Metodología',
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
            <IconParadigm size={44} className="text-teal-400" />
            <h1 className="font-display text-4xl font-bold text-white tracking-tight">Análisis Paradigmático</h1>
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
                    /* Decisión 5 — un solo acento: el morado de esta sección
                       (y el naranja del debate) competían con el teal sin
                       resolver ningún problema que el título y el icono no
                       resolvieran ya. */
                    className={`p-4 rounded-lg border-2 transition-colors duration-200 text-left ${
                      selectedParadigm === paradigm.id
                        ? 'border-teal-400 bg-teal-400/15 text-white'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                    aria-pressed={selectedParadigm === paradigm.id}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <paradigm.Icon
                        size={26}
                        className={selectedParadigm === paradigm.id ? 'text-teal-400' : 'text-gray-400'}
                      />
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
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
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
                className="flex items-center gap-3 bg-teal-400 hover:bg-teal-300 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed text-[#04211f] font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full"></div>
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
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <ExportButton
                  onExportPDF={handleExportPDF}
                  onExportHTML={handleExportHTML}
                  size="sm"
                  variant="secondary"
                />
                {/* "Nuevo Análisis" descarta el resultado que acabas de
                    generar: era el botón más prominente de la pantalla.
                    Pasa a terciario (solo texto). */}
                <button
                  onClick={resetForm}
                  className="text-[#9aa6b8] hover:text-white px-3 md:px-4 py-2 rounded-lg font-medium text-sm md:text-base whitespace-nowrap transition-colors"
                >
                  Nuevo análisis
                </button>
              </div>
            </div>

            {/*
              Decisión 4 — Antes esto eran tres columnas de ~28 caracteres por
              línea con párrafos de 300 palabras: tres scrolls verticales
              paralelos que además no estaban alineados por tema, así que la
              comparación que la rejilla prometía no ocurría.
              Ahora: síntesis arriba, secciones apiladas a ancho de lectura y un
              índice de saltos para no perder el "se ve todo de un golpe".
            */}

            {/* Índice de saltos */}
            <nav className="flex flex-wrap gap-2" aria-label="Secciones del análisis">
              {[
                { id: 'sintesis',      label: 'Síntesis' },
                { id: 'ontologico',    label: 'Ontológico' },
                { id: 'epistemologico', label: 'Epistemológico' },
                { id: 'metodologico',  label: 'Metodológico' },
                { id: 'propuesta',     label: 'Propuesta' },
              ].map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-[#9aa6b8] hover:text-teal-300 hover:border-teal-400/50 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 md:p-8">
              <div className="max-w-[68ch]">
                {/* Síntesis primero: es el hilo que une las tres dimensiones */}
                <section id="sintesis" className="scroll-mt-24">
                  <h3 className="section-label mb-4">Síntesis</h3>
                  <EnhancedRichContent content={analysis.summary} />
                </section>

                <section id="ontologico" className="scroll-mt-24 mt-10 pt-8 border-t border-gray-800">
                  <h3 className="section-label mb-4 flex items-center gap-2.5">
                    <LightBulbIcon className="w-4 h-4 text-teal-400 shrink-0" />
                    Ontológico
                  </h3>
                  <EnhancedRichContent content={analysis.ontological} />
                </section>

                <section id="epistemologico" className="scroll-mt-24 mt-10 pt-8 border-t border-gray-800">
                  <h3 className="section-label mb-4 flex items-center gap-2.5">
                    <DocumentTextIcon className="w-4 h-4 text-teal-400 shrink-0" />
                    Epistemológico
                  </h3>
                  <EnhancedRichContent content={analysis.epistemological} />
                </section>

                <section id="metodologico" className="scroll-mt-24 mt-10 pt-8 border-t border-gray-800">
                  <h3 className="section-label mb-4 flex items-center gap-2.5">
                    <CogIcon className="w-4 h-4 text-teal-400 shrink-0" />
                    Metodológico
                  </h3>
                  <EnhancedRichContent content={analysis.methodological} />
                </section>

                <section id="propuesta" className="scroll-mt-24 mt-10 pt-8 border-t border-gray-800">
                  <h3 className="section-label mb-4 flex items-center gap-2.5">
                    <ClipboardDocumentListIcon className="w-4 h-4 text-teal-400 shrink-0" />
                    Propuesta de investigación
                  </h3>
                  <EnhancedRichContent content={analysis.researchProposal} />
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}