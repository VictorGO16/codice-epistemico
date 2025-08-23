'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { useDebateStore } from '@/lib/stores/debate-store';
import PageTransition from '@/components/ui/PageTransition';
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer';
import { AnimatedButton } from '@/components/ui/AnimatedCard';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { setActiveTab } = useUIStore();
  const { startSession: startDebateSession } = useDebateStore();

  return (
    <PageTransition className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <StaggerContainer className="text-center max-w-4xl mx-auto px-6">
        <StaggerItem>
          <motion.div 
            className="text-8xl mb-8"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🧠
          </motion.div>
        </StaggerItem>
        
        <StaggerItem>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            El Códice Epistémico
          </h1>
        </StaggerItem>
        
        <StaggerItem>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Explora la filosofía de la ciencia y psicología a través de una interfaz interactiva.
            Selecciona un concepto del menú lateral para comenzar tu exploración intelectual.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-xl font-semibold text-white mb-3">Conceptos Filosóficos</h3>
              <p className="text-gray-400 leading-relaxed">
                Explora ideas fundamentales desde la filosofía antigua hasta el pensamiento contemporáneo
              </p>
            </div>

            <button
              onClick={() => setActiveTab('debate')}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 text-left"
            >
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Debates Simulados</h3>
              <p className="text-gray-400 leading-relaxed">
                Presencia debates entre grandes pensadores históricos sobre temas fundamentales
              </p>
            </button>

            <button
              onClick={() => setActiveTab('paradigm')}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 text-left"
            >
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Laboratorio de Paradigmas</h3>
              <p className="text-gray-400 leading-relaxed">
                Analiza objetos de estudio desde diferentes paradigmas epistemológicos
              </p>
            </button>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-12 flex justify-center gap-4">
            <AnimatedButton
              onClick={() => setActiveTab('debate')}
              variant="primary"
              className="bg-purple-500 hover:bg-purple-600 flex items-center gap-2"
            >
              <span>🗣️</span>
              Iniciar Debate
            </AnimatedButton>
            <AnimatedButton
              onClick={() => setActiveTab('paradigm')}
              variant="primary"
              className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2"
            >
              <span>🔬</span>
              Laboratorio
            </AnimatedButton>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </PageTransition>
  );
}