'use client';

import { BookOpenIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface CollapsedSidebarIndicatorProps {
  position: 'left' | 'right';
  onExpand: () => void;
  className?: string;
}

export default function CollapsedSidebarIndicator({ 
  position, 
  onExpand, 
  className = '' 
}: CollapsedSidebarIndicatorProps) {
  const Icon = position === 'left' ? BookOpenIcon : Bars3Icon;
  const title = position === 'left' ? 'Conceptos' : 'Navegación';

  return (
    <div className={`
      w-12 h-full bg-gray-900 border-gray-700 flex flex-col items-center py-4 group
      ${position === 'left' ? 'border-r' : 'border-l'}
      ${className}
    `}>
      <button
        onClick={onExpand}
        className="p-2 text-gray-400 hover:text-teal-400 hover:bg-gray-800 rounded-lg transition-all duration-200 mb-4"
        title={`Expandir ${position === 'left' ? 'Explorador de Conceptos' : 'Panel de Navegación'}`}
      >
        <Icon className="w-5 h-5" />
      </button>
      
      <div className="flex-1 flex items-center justify-center">
        <div 
          className="writing-mode-vertical text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-200 cursor-pointer select-none"
          onClick={onExpand}
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}