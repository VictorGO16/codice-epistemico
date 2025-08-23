// Core philosophical concept types
export type ConceptType = 'philosopher' | 'scientist' | 'concept' | 'method';

export type ConceptCategory = 
  | 'ancient'
  | 'pre-columbian'
  | 'modernity'
  | '19th_century'
  | '20th_century'
  | 'contemporary'
  | 'methods';

export type ConnectionType = 
  | 'influence'
  | 'critique'
  | 'continuation'
  | 'application';

// Main philosophical concept interface
export interface PhilosophicalConcept {
  id: string;
  type: ConceptType;
  name: string;
  year: number;
  category: ConceptCategory;
  coreIdea: string;
  psychologyLink?: string;
  methodologyLink?: string;
}

// Connection between concepts
export interface ConceptConnection {
  source: string;
  target: string;
  type: ConnectionType;
  description: string;
}

// Category metadata
export interface CategoryInfo {
  id: ConceptCategory;
  name: string;
  order: number;
  description?: string;
}

// Search and filtering
export interface ConceptFilter {
  query?: string;
  category?: ConceptCategory;
  type?: ConceptType;
  yearRange?: {
    start: number;
    end: number;
  };
}

// Navigation state
export interface NavigationState {
  currentConcept: string | null;
  activeTab: string;
  searchQuery: string;
  filteredConcepts: string[];
  selectedCategory?: ConceptCategory;
}