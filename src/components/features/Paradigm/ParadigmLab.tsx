'use client';

import React, { useState } from 'react';
import type { ComponentType } from 'react';
import { PlayIcon, DocumentTextIcon, LightBulbIcon, CogIcon, ClipboardDocumentListIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
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
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('sintesis');
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({});

  const sections = analysis
    ? [
        { id: 'sintesis',       label: 'Síntesis',                   Icon: null,                        content: analysis.summary },
        { id: 'ontologico',     label: 'Ontológico',                 Icon: LightBulbIcon,               content: analysis.ontological },
        { id: 'epistemologico', label: 'Epistemológico',             Icon: DocumentTextIcon,            content: analysis.epistemological },
        { id: 'metodologico',   label: 'Metodológico',               Icon: CogIcon,                     content: analysis.methodological },
        { id: 'propuesta',      label: 'Propuesta de investigación', Icon: ClipboardDocumentListIcon,   content: analysis.researchProposal },
      ].filter((section) => Boolean(section.content))
    : [];

  const toggleSection = (id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  /* El índice sigue a la lectura. El scroll ocurre en un contenedor interno,
     pero observar contra el viewport funciona igual porque las secciones se
     desplazan dentro de él. */
  React.useEffect(() => {
    if (!analysis) return;
    const nodes = sections.map((s) => sectionRefs.current[s.id]).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [analysis, collapsed]);  // eslint-disable-line react-hooks/exhaustive-deps
  
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
    /* Sin fondo opaco: el lienzo de partículas vive detrás (z-0) y un
       gradiente sólido lo tapaba por completo. */
    <div className="min-h-full py-8">
      <div className="w-full mx-auto px-4">
        {/* La portada solo tiene sentido antes de generar: con resultados en
            pantalla repetia el titulo de la ficha y empujaba el contenido
            fuera de la vista. */}
        {!analysis && (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IconParadigm size={44} className="text-teal-400" />
              <h1 className="font-display text-4xl font-bold text-white tracking-tight">Análisis Paradigmático</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Analiza cualquier objeto de estudio desde diferentes paradigmas filosóficos y científicos
            </p>
          </div>
        )}

        {!analysis ? (
          /* Setup Form */
          <div className="bg-gray-900/55 backdrop-blur-sm rounded-xl border border-white/10 p-8">
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
          /* max-w + mx-auto: con los paneles laterales plegados el bloque se
             centra en lugar de dejar todo el espacio muerto a la derecha. */
          <div className="space-y-6 mx-auto w-full max-w-[1120px]">
            {/* Header with Reset Button */}
            <div className="flex items-center justify-between bg-gray-900/55 backdrop-blur-sm rounded-xl border border-white/10 p-6">
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
              Decisión 4 — Historia de esta pantalla:
              (1) tres columnas de ~28 caracteres por línea con párrafos de 300
                  palabras: tres scrolls paralelos e ilegibles;
              (2) todo apilado a 68ch: legible pero un muro de texto, con el
                  lado derecho muerto al ocultar los paneles y sin forma de
                  moverse entre secciones que no fuera scrollear.
              Ahora: índice fijo que sigue la lectura + secciones plegables.
              El ancho sobrante se ocupa con navegación, no con vacío.
            */}
            <div className="grid gap-8 xl:gap-12 lg:grid-cols-[minmax(180px,220px)_minmax(0,1fr)]">

              {/* Índice: fijo en escritorio, tiras horizontales en móvil */}
              <nav aria-label="Secciones del análisis" className="lg:sticky lg:top-4 lg:self-start">
                <div className="section-label mb-3 hidden lg:block">Contenido</div>
                <ul className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto scrollbar-hide lg:overflow-visible">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={activeSection === section.id ? 'true' : undefined}
                        className={`
                          block whitespace-nowrap lg:whitespace-normal rounded-lg lg:rounded-none
                          border lg:border-0 lg:border-l-2 px-3 lg:px-3 py-1.5 lg:py-2 text-xs lg:text-[13px]
                          transition-colors
                          ${activeSection === section.id
                            ? 'border-teal-400/50 lg:border-l-teal-400 bg-teal-400/10 lg:bg-transparent text-teal-300 font-medium'
                            : 'border-gray-700 lg:border-l-gray-700 text-[#9aa6b8] hover:text-white lg:hover:border-l-gray-500'}
                        `}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setCollapsed(collapsed.size ? new Set() : new Set(sections.map((x) => x.id)))}
                  className="hidden lg:block mt-5 text-xs text-[#9aa6b8] hover:text-teal-300 transition-colors"
                >
                  {collapsed.size ? 'Desplegar todo' : 'Plegar todo'}
                </button>
              </nav>

              {/* Columna de lectura */}
              <div className="min-w-0 max-w-[72ch] space-y-3">
                {sections.map((section) => {
                  const isOpen = !collapsed.has(section.id);
                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      ref={(el) => { sectionRefs.current[section.id] = el; }}
                      className="scroll-mt-4 rounded-xl border border-white/10 bg-gray-900/55 backdrop-blur-sm"
                    >
                      <h3>
                        <button
                          onClick={() => toggleSection(section.id)}
                          aria-expanded={isOpen}
                          aria-controls={`${section.id}-cuerpo`}
                          className="w-full flex items-center gap-3 px-5 md:px-7 py-4 text-left group"
                        >
                          {section.Icon && (
                            <section.Icon className="w-4 h-4 text-teal-400 shrink-0" />
                          )}
                          <span className="section-label group-hover:text-gray-200 transition-colors">
                            {section.label}
                          </span>
                          <ChevronDownIcon
                            className={`w-4 h-4 ml-auto shrink-0 text-[#9aa6b8] transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`}
                          />
                        </button>
                      </h3>

                      {isOpen && (
                        <div id={`${section.id}-cuerpo`} className="px-5 md:px-7 pb-6">
                          {/* Texto justificado con partición de palabras: sin
                              hyphens:auto el justificado en español abre ríos
                              blancos entre palabras largas. */}
                          <EnhancedRichContent
                            content={section.content}
                            className="rich-content--justified rich-content--full"
                          />
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}