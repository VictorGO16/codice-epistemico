import { CategoryInfo, ConceptCategory } from '@/types';

export const categoryInfo: Record<ConceptCategory, CategoryInfo> = {
  ancient: {
    id: 'ancient',
    name: 'Filosofía Antigua',
    order: 1,
  },
  'pre-columbian': {
    id: 'pre-columbian',
    name: 'Filosofía Pre-Colombina',
    order: 2,
  },
  modernity: {
    id: 'modernity',
    name: 'Modernidad y Rev. Científica',
    order: 3,
  },
  '19th_century': {
    id: '19th_century',
    name: 'Siglo XIX',
    order: 4,
  },
  '20th_century': {
    id: '20th_century',
    name: 'Paradigmas del Siglo XX',
    order: 5,
  },
  contemporary: {
    id: 'contemporary',
    name: 'Pensamiento Contemporáneo',
    order: 6,
  },
  methods: {
    id: 'methods',
    name: 'Métodos de Investigación',
    order: 7,
  },
};

export const paradigmInfo = {
  positivismo_logico: 'Positivismo Lógico',
  postpositivismo: 'Post-positivismo',
  hermeneutica: 'Hermenéutica',
  construccionismo: 'Construccionismo Social',
  enactivismo: 'Enactivismo',
};

// Helper functions
export function getCategoryName(categoryId: ConceptCategory): string {
  return categoryInfo[categoryId]?.name || categoryId;
}

export function getCategoriesInOrder(): CategoryInfo[] {
  return Object.values(categoryInfo).sort((a, b) => a.order - b.order);
}

export function getParadigmName(paradigmId: string): string {
  return paradigmInfo[paradigmId as keyof typeof paradigmInfo] || paradigmId;
}