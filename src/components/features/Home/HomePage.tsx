'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import PageTransition from '@/components/ui/PageTransition';
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer';
import { AnimatedButton } from '@/components/ui/AnimatedCard';
import { IconConcept, IconForum, IconParadigm } from '@/components/ui/Icons';

export default function HomePage() {
  const { setActiveTab } = useUIStore();

  return (
    <PageTransition className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <StaggerContainer className="text-center w-full mx-auto px-6">
        <StaggerItem>
          <div className="flex justify-center mb-8">
            <IconParadigm size={48} className="text-teal-400/40" />
          </div>
        </StaggerItem>

        <StaggerItem>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            El Códice Epistémico
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="text-lg text-gray-400 mb-14 leading-relaxed max-w-xl mx-auto">
            Explora la filosofía de la ciencia y psicología a través de una interfaz interactiva.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60 hover:border-teal-500/40 hover:bg-gray-800/80 transition-all duration-300 text-left">
              <IconConcept size={32} className="mb-4 text-teal-400/70" />
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Conceptos Filosóficos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explora ideas fundamentales desde la filosofía antigua hasta el pensamiento contemporáneo
              </p>
            </div>

            <button
              onClick={() => setActiveTab('debate')}
              className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60 hover:border-purple-500/40 hover:bg-gray-800/80 transition-all duration-300 text-left"
            >
              <IconForum size={32} className="mb-4 text-purple-400/70" />
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Debates Filosóficos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Presencia debates entre grandes pensadores históricos sobre temas fundamentales
              </p>
            </button>

            <button
              onClick={() => setActiveTab('paradigm')}
              className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60 hover:border-orange-500/40 hover:bg-gray-800/80 transition-all duration-300 text-left"
            >
              <IconParadigm size={32} className="mb-4 text-orange-400/70" />
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Análisis Paradigmático</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Analiza objetos de estudio desde diferentes paradigmas epistemológicos
              </p>
            </button>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-10 flex justify-center gap-3">
            <AnimatedButton
              onClick={() => setActiveTab('debate')}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <IconForum size={15} className="shrink-0" />
              Iniciar Debate
            </AnimatedButton>
            <AnimatedButton
              onClick={() => setActiveTab('paradigm')}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <IconParadigm size={15} className="shrink-0" />
              Análisis
            </AnimatedButton>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </PageTransition>
  );
}
