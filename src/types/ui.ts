// Tab system
export type TabId = 'home' | 'context' | 'psychology' | 'methodology' | 'oracle' | 'debate' | 'paradigm';

// Modal types
export type ModalType = 
  | 'debate-setup'
  | 'paradigm-setup'
  | 'export-options'
  | 'concept-details'
  | null;

// Notification system
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  createdAt: Date;
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  message?: string;
  progress?: number;
}

// Theme and visual preferences
export interface ThemeState {
  isDarkMode: boolean;
  primaryColor: string;
  accentColor: string;
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
}

// Responsive breakpoints
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

// Component props interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  disabled?: boolean;
  loading?: boolean;
}

// Form validation
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState {
  isValid: boolean;
  errors: ValidationError[];
  isSubmitting: boolean;
}