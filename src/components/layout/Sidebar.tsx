'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import ConceptTree from '@/components/features/ConceptExplorer/ConceptTree';
import { useConceptStore } from '@/lib/stores/concept-store';
import { useUIStore } from '@/lib/stores/ui-store';
import { useFavoritesStore } from '@/lib/stores/favorites-store';
import { philosophicalData } from '@/lib/data/philosophical-data';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const { currentConcept, setCurrentConcept } = useConceptStore();
  const { setActiveTab } = useUIStore();
  const { favorites, getFavoritesCount } = useFavoritesStore();

  const handleConceptSelect = (conceptId: string) => {
    setCurrentConcept(conceptId);
    setActiveTab('context'); // Switch to context tab when selecting a concept
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const filteredConcepts = searchQuery.trim() === '' 
    ? null 
    : Object.values(philosophicalData).filter(concept =>
        concept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        concept.coreIdea.toLowerCase().includes(searchQuery.toLowerCase()) ||
        concept.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const favoriteConcepts = showFavorites 
    ? favorites.map(id => philosophicalData[id]).filter(Boolean)
    : null;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 bg-gray-900 border-r border-gray-700 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:z-auto
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <button
              onClick={() => {
                setActiveTab('home');
                setCurrentConcept(null);
                if (window.innerWidth < 768) {
                  onClose();
                }
              }}
              className="text-lg font-semibold text-white hover:text-teal-400 transition-colors"
            >
              Códice Epistémico
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white md:hidden"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-700">
            <div className="relative mb-3">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar conceptos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Favorites Toggle */}
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                showFavorites
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
            >
              <HeartIcon className="w-4 h-4" />
              <span>Favoritos ({getFavoritesCount()})</span>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {filteredConcepts ? (
              /* Search Results */
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-3">
                  {filteredConcepts.length} resultado{filteredConcepts.length !== 1 ? 's' : ''} encontrado{filteredConcepts.length !== 1 ? 's' : ''}
                </div>
                <div className="space-y-2">
                  {filteredConcepts.map((concept) => (
                    <button
                      key={concept.id}
                      onClick={() => handleConceptSelect(concept.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-200 hover:transform hover:scale-[1.02] ${
                        currentConcept === concept.id
                          ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                          : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0">
                          {concept.type === 'philosopher' ? '👤' : 
                           concept.type === 'scientist' ? '🔬' : 
                           concept.type === 'concept' ? '💭' : '📖'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1 truncate">{concept.name}</h3>
                          <p className="text-xs opacity-75 line-clamp-2">
                            {concept.coreIdea.substring(0, 100)}...
                          </p>
                          {concept.category && (
                            <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-700/50 rounded-full">
                              {concept.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : favoriteConcepts ? (
              /* Favorites */
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-3">
                  {favoriteConcepts.length} favorito{favoriteConcepts.length !== 1 ? 's' : ''}
                </div>
                {favoriteConcepts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <HeartIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No tienes favoritos aún</p>
                    <p className="text-sm mt-1">Marca conceptos como favoritos para verlos aquí</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {favoriteConcepts.map((concept) => (
                      <button
                        key={concept.id}
                        onClick={() => handleConceptSelect(concept.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 hover:transform hover:scale-[1.02] ${
                          currentConcept === concept.id
                            ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                            : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl flex-shrink-0">
                            {concept.type === 'philosopher' ? '👤' : 
                             concept.type === 'scientist' ? '🔬' : 
                             concept.type === 'concept' ? '💭' : '📖'}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1 truncate">{concept.name}</h3>
                            <p className="text-xs opacity-75 line-clamp-2">
                              {concept.coreIdea.substring(0, 100)}...
                            </p>
                            {concept.category && (
                              <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-700/50 rounded-full">
                                {concept.category}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Concept Tree */
              <ConceptTree onConceptSelect={handleConceptSelect} />
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-xs text-gray-500 text-center">
              <div>Filosofía de la Ciencia</div>
              <div>& Psicología</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}