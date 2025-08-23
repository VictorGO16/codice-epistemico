'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { useUIStore } from '@/lib/stores/ui-store';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4
};

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  const { animationsEnabled } = useUIStore();

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Componente específico para transiciones de contenido
export function ContentTransition({ children, className = '' }: PageTransitionProps) {
  const { animationsEnabled } = useUIStore();

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // Force re-animation on content change
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}