'use client';

import { useUIStore } from '@/lib/stores/ui-store';

export default function MobileMenuButton() {
  const { toggleMobileMenu } = useUIStore();

  return (
    <button
      onClick={toggleMobileMenu}
      className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 border border-gray-600 text-white p-2 rounded-full backdrop-blur-sm transition-colors hover:bg-gray-700"
      aria-label="Abrir menú de navegación"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}