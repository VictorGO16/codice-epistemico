'use client';

import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

interface RightSidebarToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function RightSidebarToggle({ onClick, isOpen }: RightSidebarToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed top-4 right-4 z-30 p-3 rounded-lg border transition-all duration-300 ease-in-out
        ${isOpen 
          ? 'bg-teal-500/20 border-teal-500/50 text-teal-300' 
          : 'bg-gray-800/90 border-gray-700/50 text-gray-300 hover:bg-gray-700/90 hover:border-gray-600'
        }
        backdrop-blur-sm shadow-lg hover:transform hover:scale-105
        lg:hidden
      `}
      aria-label={isOpen ? 'Cerrar navegación' : 'Abrir navegación'}
    >
      <Bars3BottomRightIcon className="w-6 h-6" />
    </button>
  );
}