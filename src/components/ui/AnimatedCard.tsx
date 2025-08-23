'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useUIStore } from '@/lib/stores/ui-store';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverScale?: number;
  tapScale?: number;
  glowEffect?: boolean;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  onClick,
  hoverScale = 1.02,
  tapScale = 0.98,
  glowEffect = false
}: AnimatedCardProps) {
  const { animationsEnabled } = useUIStore();

  if (!animationsEnabled) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={{ 
        scale: hoverScale,
        y: -2,
        boxShadow: glowEffect 
          ? '0 10px 30px rgba(20, 184, 166, 0.3)' 
          : '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
      whileTap={{ scale: tapScale }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {children}
    </motion.div>
  );
}

// Variante específica para botones
export function AnimatedButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  disabled = false
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
}) {
  const { animationsEnabled } = useUIStore();

  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600',
    ghost: 'bg-transparent hover:bg-gray-700/50 text-gray-300 border border-gray-600'
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (!animationsEnabled || disabled) {
    return (
      <button className={finalClassName} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 5px 15px rgba(20, 184, 166, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
    >
      {children}
    </motion.button>
  );
}