'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/lib/stores/ui-store';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import NotificationContainer from './NotificationContainer';
import ParticleBackground from '@/components/ui/ParticleBackground';
import SettingsPanel from '@/components/ui/SettingsPanel';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { sidebarOpen, setSidebarOpen, setIsMobile } = useUIStore();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
      
      // Auto-close sidebar on mobile when resizing to desktop
      if (!isMobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile, sidebarOpen, setSidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Mobile Header */}
      <MobileHeader />

      <div className="flex h-screen pt-16 md:pt-0 relative z-10">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Notifications */}
      <NotificationContainer />
      
      {/* Settings Panel */}
      <SettingsPanel />
    </div>
  );
}