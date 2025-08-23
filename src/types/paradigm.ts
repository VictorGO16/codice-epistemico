// Paradigm types
export type ParadigmType = 
  | 'positivismo_logico'
  | 'postpositivismo'
  | 'hermeneutica'
  | 'construccionismo'
  | 'enactivismo';

// Paradigm analysis sections
export interface ParadigmAnalysisSection {
  title: string;
  content: string;
  icon?: string;
}

// Complete paradigm analysis
export interface ParadigmAnalysis {
  id: string;
  paradigmId: ParadigmType;
  paradigmName: string;
  objectOfStudy: string;
  sections: ParadigmAnalysisSection[];
  createdAt: Date;
}

// Paradigm lab session
export interface ParadigmLabSession {
  id: string;
  paradigmId: ParadigmType;
  objectOfStudy: string;
  analysis: ParadigmAnalysis | null;
  status: 'setup' | 'analyzing' | 'completed';
  createdAt: Date;
}

// Paradigm state management
export interface ParadigmState {
  currentSession: ParadigmLabSession | null;
  availableParadigms: Record<ParadigmType, string>;
  isLoading: boolean;
  error: string | null;
}