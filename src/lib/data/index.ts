// Main data export file - Updated
export { philosophicalData } from './philosophical-data';
export {
    conceptConnections,
    getConnectionsForConcept,
    getInfluencedBy,
    getInfluences,
    getConnectionsBetween,
    getConnectionsByType,
} from './connections';
export {
    categoryInfo,
    paradigmInfo,
    getCategoryName,
    getCategoriesInOrder,
    getParadigmName,
} from './categories';

// Data access helpers
import { philosophicalData } from './philosophical-data';
import { PhilosophicalConcept, ConceptCategory } from '@/types';

// Get concept by ID
export function getConceptById(id: string): PhilosophicalConcept | null {
    return philosophicalData[id] || null;
}

// Get all concepts
export function getAllConcepts(): PhilosophicalConcept[] {
    return Object.values(philosophicalData);
}

// Search concepts
export function searchConcepts(query: string): PhilosophicalConcept[] {
    if (!query.trim()) {
        return getAllConcepts();
    }

    const lowercaseQuery = query.toLowerCase();
    return Object.values(philosophicalData).filter((concept) =>
        concept.name.toLowerCase().includes(lowercaseQuery)
    );
}

// Get concepts grouped by category
export function getConceptsGroupedByCategory(): Record<
    ConceptCategory,
    PhilosophicalConcept[]
> {
    const grouped = {} as Record<ConceptCategory, PhilosophicalConcept[]>;

    Object.values(philosophicalData).forEach((concept) => {
        if (!grouped[concept.category]) {
            grouped[concept.category] = [];
        }
        grouped[concept.category].push(concept);
    });

    // Sort concepts within each category by year
    Object.keys(grouped).forEach((category) => {
        grouped[category as ConceptCategory].sort((a, b) => a.year - b.year);
    });

    return grouped;
}