'use client';

import { useUIStore } from '@/lib/stores/ui-store';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'teal' | 'white' | 'gray';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'teal', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const { animationsEnabled } = useUIStore();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    teal: 'border-teal-500',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div
        className={`
          ${sizeClasses[size]} 
          border-2 border-t-transparent rounded-full
          ${colorClasses[color]}
          ${animationsEnabled ? 'animate-spin' : ''}
        `}
      />
      {text && (
        <span className={`${textSizeClasses[size]} text-gray-300`}>
          {text}
        </span>
      )}
    </div>
  );
}