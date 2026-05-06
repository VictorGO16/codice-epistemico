'use client';

import { useState } from 'react';
import { CogIcon, XMarkIcon, EyeIcon, EyeSlashIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useUIStore } from '@/lib/stores/ui-store';

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    particlesEnabled, 
    animationsEnabled, 
    toggleParticles, 
    toggleAnimations 
  } = useUIStore();

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg border border-gray-600 transition-all hover:scale-110"
        title="Configuración"
      >
        <CogIcon className="w-6 h-6" />
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-900 rounded-xl border border-gray-700 w-full max-w-md p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Configuración</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              {/* Particles Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <SparklesIcon className="w-5 h-5 text-teal-400" />
                  <div>
                    <h3 className="font-medium text-white">Partículas de fondo</h3>
                    <p className="text-sm text-gray-400">Efectos visuales animados</p>
                  </div>
                </div>
                <button
                  onClick={toggleParticles}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    particlesEnabled ? 'bg-teal-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      particlesEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Animations Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3">
                  {animationsEnabled ? (
                    <EyeIcon className="w-5 h-5 text-blue-400" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                  )}
                  <div>
                    <h3 className="font-medium text-white">Animaciones</h3>
                    <p className="text-sm text-gray-400">Transiciones y efectos de movimiento</p>
                  </div>
                </div>
                <button
                  onClick={toggleAnimations}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    animationsEnabled ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      animationsEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Performance Note */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-300">
                  <strong>Consejo:</strong> Desactiva las partículas y animaciones si experimentas problemas de rendimiento.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 text-center">
                Los cambios se aplican inmediatamente
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}