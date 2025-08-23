'use client';

import { motion } from 'framer-motion';
import { useUIStore } from '@/lib/stores/ui-store';

interface AnimatedLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'teal' | 'white' | 'gray';
  text?: string;
  className?: string;
  type?: 'spinner' | 'dots' | 'pulse' | 'wave';
}

export default function AnimatedLoader({ 
  size = 'md', 
  color = 'teal', 
  text,
  className = '',
  type = 'spinner'
}: AnimatedLoaderProps) {
  const { animationsEnabled } = useUIStore();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    teal: 'text-teal-500',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (!animationsEnabled) {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        <div className={`${sizeClasses[size]} ${colorClasses[color]} opacity-50`}>⟳</div>
        {text && <span className={`${textSizeClasses[size]} text-gray-300`}>{text}</span>}
      </div>
    );
  }

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${colorClasses[color]} bg-current`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} bg-current`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        );
      
      case 'wave':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`w-1 h-6 ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );
      
      default: // spinner
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full ${colorClasses[color]}`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        );
    }
  };

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {renderLoader()}
      {text && (
        <motion.span 
          className={`${textSizeClasses[size]} text-gray-300`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.span>
      )}
    </div>
  );
}

// Componente específico para skeleton loading
export function SkeletonLoader({ className = '', lines = 3 }: { className?: string; lines?: number }) {
  const { animationsEnabled } = useUIStore();

  if (!animationsEnabled) {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-700 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-700 rounded"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
}