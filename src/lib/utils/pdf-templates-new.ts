// Professional PDF Template System - Industry Standards
export interface PDFTemplate {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    lightText: string;
    background: string;
    border: string;
    headerBg: string;
    sectionBg: string;
  };
  typography: {
    title: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
    subtitle: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
    heading: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
    subheading: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
    body: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
    caption: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
    quote: { size: number; weight: 'normal' | 'bold'; lineHeight: number };
  };
  layout: {
    pageMargin: number;
    contentMargin: number;
    sectionSpacing: number;
    paragraphSpacing: number;
    headerHeight: number;
    footerHeight: number;
  };
  visual: {
    borderRadius: number;
    borderWidth: number;
    shadowOffset: number;
    accentLineWidth: number;
  };
}

export const professionalTemplates: Record<string, PDFTemplate> = {
  debate: {
    name: 'Debate Filosófico',
    colors: {
      primary: '#b91c1c',      // Professional red
      secondary: '#7f1d1d',    // Dark red
      accent: '#fef2f2',       // Light red
      text: '#111827',         // Dark gray
      lightText: '#6b7280',    // Medium gray
      background: '#ffffff',   // White
      border: '#e5e7eb',       // Light gray
      headerBg: '#dc2626',     // Header red
      sectionBg: '#fef7f7'     // Section background
    },
    typography: {
      title: { size: 22, weight: 'bold', lineHeight: 1.2 },
      subtitle: { size: 14, weight: 'normal', lineHeight: 1.3 },
      heading: { size: 16, weight: 'bold', lineHeight: 1.3 },
      subheading: { size: 13, weight: 'bold', lineHeight: 1.4 },
      body: { size: 11, weight: 'normal', lineHeight: 1.5 },
      caption: { size: 9, weight: 'normal', lineHeight: 1.4 },
      quote: { size: 10, weight: 'normal', lineHeight: 1.6 }
    },
    layout: {
      pageMargin: 30,
      contentMargin: 20,
      sectionSpacing: 18,
      paragraphSpacing: 12,
      headerHeight: 65,
      footerHeight: 25
    },
    visual: {
      borderRadius: 4,
      borderWidth: 0.5,
      shadowOffset: 1,
      accentLineWidth: 3
    }
  },

  oracle: {
    name: 'Consulta al Oráculo',
    colors: {
      primary: '#7c3aed',      // Mystical purple
      secondary: '#5b21b6',    // Dark purple
      accent: '#f3e8ff',       // Light purple
      text: '#111827',         // Dark gray
      lightText: '#6b7280',    // Medium gray
      background: '#ffffff',   // White
      border: '#e5e7eb',       // Light gray
      headerBg: '#8b5cf6',     // Header purple
      sectionBg: '#faf5ff'     // Section background
    },
    typography: {
      title: { size: 24, weight: 'bold', lineHeight: 1.2 },
      subtitle: { size: 13, weight: 'normal', lineHeight: 1.4 },
      heading: { size: 15, weight: 'bold', lineHeight: 1.3 },
      subheading: { size: 12, weight: 'bold', lineHeight: 1.4 },
      body: { size: 11, weight: 'normal', lineHeight: 1.6 },
      caption: { size: 9, weight: 'normal', lineHeight: 1.4 },
      quote: { size: 11, weight: 'normal', lineHeight: 1.7 }
    },
    layout: {
      pageMargin: 35,
      contentMargin: 25,
      sectionSpacing: 20,
      paragraphSpacing: 14,
      headerHeight: 70,
      footerHeight: 30
    },
    visual: {
      borderRadius: 6,
      borderWidth: 0.8,
      shadowOffset: 1.5,
      accentLineWidth: 4
    }
  },

  paradigm: {
    name: 'Análisis Paradigmático',
    colors: {
      primary: '#059669',      // Scientific green
      secondary: '#047857',    // Dark green
      accent: '#ecfdf5',       // Light green
      text: '#111827',         // Dark gray
      lightText: '#6b7280',    // Medium gray
      background: '#ffffff',   // White
      border: '#e5e7eb',       // Light gray
      headerBg: '#10b981',     // Header green
      sectionBg: '#f0fdf4'     // Section background
    },
    typography: {
      title: { size: 20, weight: 'bold', lineHeight: 1.2 },
      subtitle: { size: 12, weight: 'normal', lineHeight: 1.3 },
      heading: { size: 14, weight: 'bold', lineHeight: 1.3 },
      subheading: { size: 12, weight: 'bold', lineHeight: 1.4 },
      body: { size: 10, weight: 'normal', lineHeight: 1.5 },
      caption: { size: 8, weight: 'normal', lineHeight: 1.4 },
      quote: { size: 10, weight: 'normal', lineHeight: 1.6 }
    },
    layout: {
      pageMargin: 28,
      contentMargin: 18,
      sectionSpacing: 16,
      paragraphSpacing: 10,
      headerHeight: 60,
      footerHeight: 25
    },
    visual: {
      borderRadius: 3,
      borderWidth: 0.4,
      shadowOffset: 0.8,
      accentLineWidth: 2.5
    }
  },

  laboratory: {
    name: 'Laboratorio Filosófico',
    colors: {
      primary: '#ea580c',      // Experimental orange
      secondary: '#c2410c',    // Dark orange
      accent: '#fff7ed',       // Light orange
      text: '#111827',         // Dark gray
      lightText: '#6b7280',    // Medium gray
      background: '#ffffff',   // White
      border: '#e5e7eb',       // Light gray
      headerBg: '#f97316',     // Header orange
      sectionBg: '#fffbeb'     // Section background
    },
    typography: {
      title: { size: 21, weight: 'bold', lineHeight: 1.2 },
      subtitle: { size: 13, weight: 'normal', lineHeight: 1.3 },
      heading: { size: 15, weight: 'bold', lineHeight: 1.3 },
      subheading: { size: 12, weight: 'bold', lineHeight: 1.4 },
      body: { size: 10, weight: 'normal', lineHeight: 1.5 },
      caption: { size: 8, weight: 'normal', lineHeight: 1.4 },
      quote: { size: 10, weight: 'normal', lineHeight: 1.6 }
    },
    layout: {
      pageMargin: 30,
      contentMargin: 20,
      sectionSpacing: 17,
      paragraphSpacing: 11,
      headerHeight: 62,
      footerHeight: 26
    },
    visual: {
      borderRadius: 4,
      borderWidth: 0.5,
      shadowOffset: 1,
      accentLineWidth: 3
    }
  },

  generic: {
    name: 'Documento Genérico',
    colors: {
      primary: '#14b8a6',      // Brand teal
      secondary: '#0f766e',    // Dark teal
      accent: '#f0fdfa',       // Light teal
      text: '#111827',         // Dark gray
      lightText: '#6b7280',    // Medium gray
      background: '#ffffff',   // White
      border: '#e5e7eb',       // Light gray
      headerBg: '#20d9d2',     // Header teal
      sectionBg: '#f0fdfa'     // Section background
    },
    typography: {
      title: { size: 18, weight: 'bold', lineHeight: 1.2 },
      subtitle: { size: 12, weight: 'normal', lineHeight: 1.3 },
      heading: { size: 14, weight: 'bold', lineHeight: 1.3 },
      subheading: { size: 11, weight: 'bold', lineHeight: 1.4 },
      body: { size: 10, weight: 'normal', lineHeight: 1.5 },
      caption: { size: 8, weight: 'normal', lineHeight: 1.4 },
      quote: { size: 9, weight: 'normal', lineHeight: 1.6 }
    },
    layout: {
      pageMargin: 25,
      contentMargin: 15,
      sectionSpacing: 15,
      paragraphSpacing: 10,
      headerHeight: 55,
      footerHeight: 25
    },
    visual: {
      borderRadius: 3,
      borderWidth: 0.4,
      shadowOffset: 0.8,
      accentLineWidth: 2
    }
  }
};

export const icons = {
  debate: '⚔️',
  oracle: '🔮',
  paradigm: '🔬',
  laboratory: '🧪',
  participants: '👥',
  transcript: '💬',
  analysis: '📊',
  arguments: '⚖️',
  scores: '🏆',
  conclusion: '🎯',
  conversation: '💭',
  summary: '📝',
  ontological: '🌌',
  epistemological: '🧠',
  methodological: '⚙️',
  content: '📄',
  metadata: '📋',
  works: '📚',
  study: '🔍'
};

export function getTemplateForType(type: 'debate' | 'oracle' | 'paradigm' | 'laboratory' | 'generic'): PDFTemplate {
  return professionalTemplates[type] || professionalTemplates.generic;
}

export function getIconForContext(context: string): string {
  return icons[context as keyof typeof icons] || '📄';
}

// Color utility functions
export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}

export function lightenColor(hex: string, percent: number): string {
  const [r, g, b] = hexToRgb(hex);
  const lighten = (color: number) => Math.min(255, Math.floor(color + (255 - color) * percent / 100));
  
  const newR = lighten(r).toString(16).padStart(2, '0');
  const newG = lighten(g).toString(16).padStart(2, '0');
  const newB = lighten(b).toString(16).padStart(2, '0');
  
  return `#${newR}${newG}${newB}`;
}

export function darkenColor(hex: string, percent: number): string {
  const [r, g, b] = hexToRgb(hex);
  const darken = (color: number) => Math.max(0, Math.floor(color * (100 - percent) / 100));
  
  const newR = darken(r).toString(16).padStart(2, '0');
  const newG = darken(g).toString(16).padStart(2, '0');
  const newB = darken(b).toString(16).padStart(2, '0');
  
  return `#${newR}${newG}${newB}`;
}