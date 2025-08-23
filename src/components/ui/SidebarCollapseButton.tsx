'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SidebarCollapseButtonProps {
  isCollapsed: boolean;
  onToggle: () => void;
  position: 'left' | 'right';
  className?: string;
}

export default function SidebarCollapseButton({ 
  isCollapsed, 
  onToggle, 
  position,
  className = '' 
}: SidebarCollapseButtonProps) {
  const Icon = position === 'left' 
    ? (isCollapsed ? ChevronRightIcon : ChevronLeftIcon)
    : (isCollapsed ? ChevronLeftIcon : ChevronRightIcon);

  return (
    <button
      onClick={onToggle}
      className={`
        p-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500
        text-gray-400 hover:text-white transition-all duration-200 rounded-lg
        shadow-lg hover:shadow-xl z-10
        ${className}
      `}
      title={isCollapsed ? 'Expandir panel' : 'Colapsar panel'}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}