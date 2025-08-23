// Re-export all types for easy importing
export * from './philosophical';
export * from './chat';
export * from './api';
export * from './ui';

// Common utility types
export type ID = string;
export type Timestamp = Date;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Generic response wrapper
export interface Response<T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
  timestamp: Date;
}