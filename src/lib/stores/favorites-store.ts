import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[]; // Array of concept IDs
  
  // Actions
  addFavorite: (conceptId: string) => void;
  removeFavorite: (conceptId: string) => void;
  toggleFavorite: (conceptId: string) => void;
  isFavorite: (conceptId: string) => boolean;
  clearFavorites: () => void;
  
  // Getters
  getFavorites: () => string[];
  getFavoritesCount: () => number;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (conceptId: string) => {
        const { favorites } = get();
        if (!favorites.includes(conceptId)) {
          set({ favorites: [...favorites, conceptId] });
        }
      },

      removeFavorite: (conceptId: string) => {
        const { favorites } = get();
        set({ favorites: favorites.filter(id => id !== conceptId) });
      },

      toggleFavorite: (conceptId: string) => {
        const { favorites, addFavorite, removeFavorite } = get();
        if (favorites.includes(conceptId)) {
          removeFavorite(conceptId);
        } else {
          addFavorite(conceptId);
        }
      },

      isFavorite: (conceptId: string) => {
        return get().favorites.includes(conceptId);
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },

      getFavorites: () => {
        return get().favorites;
      },

      getFavoritesCount: () => {
        return get().favorites.length;
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);