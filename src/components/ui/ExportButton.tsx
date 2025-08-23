'use client';

import { useState } from 'react';
import { ArrowDownTrayIcon, DocumentIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import LoadingSpinner from './LoadingSpinner';
import { AnimatedButton } from './AnimatedCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ExportButtonProps {
  onExportPDF: () => Promise<void>;
  onExportHTML: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function ExportButton({
  onExportPDF,
  onExportHTML,
  disabled = false,
  size = 'md',
  variant = 'secondary',
  className = ''
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleExportPDF = async () => {
    if (disabled || isExporting) return;
    
    try {
      setIsExporting(true);
      setShowDropdown(false);
      await onExportPDF();
    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportHTML = () => {
    if (disabled || isExporting) return;
    
    setShowDropdown(false);
    onExportHTML();
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variantClasses = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white border-teal-600',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600',
    ghost: 'bg-transparent hover:bg-gray-700/50 text-gray-300 border-gray-600'
  };

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  if (isExporting) {
    return (
      <div className={`inline-flex items-center ${sizeClasses[size]} ${variantClasses[variant]} border rounded-lg ${className}`}>
        <LoadingSpinner size="sm" color="white" text="Exportando..." />
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        disabled={disabled}
        className={`
          inline-flex items-center gap-2 border rounded-lg transition-colors
          ${sizeClasses[size]} ${variantClasses[variant]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transform transition-transform'}
          ${className}
        `}
      >
        <ArrowDownTrayIcon className={iconSize[size]} />
        <span>Exportar</span>
      </button>

      {showDropdown && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-20">
            <div className="py-1">
              <button
                onClick={handleExportPDF}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <DocumentIcon className="w-4 h-4 text-red-400" />
                <span>Exportar como PDF</span>
              </button>
              
              <button
                onClick={handleExportHTML}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <CodeBracketIcon className="w-4 h-4 text-blue-400" />
                <span>Exportar como HTML</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}