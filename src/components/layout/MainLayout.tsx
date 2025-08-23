'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/lib/stores/ui-store';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import MobileHeader from './MobileHeader';
import RightSidebarToggle from '@/components/ui/RightSidebarToggle';
import NotificationContainer from './NotificationContainer';
import ParticleBackground from '@/components/ui/ParticleBackground';
import SettingsPanel from '@/components/ui/SettingsPanel';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { 
    sidebarOpen, 
    setSidebarOpen, 
    rightSidebarOpen, 
    setRightSidebarOpen,
    toggleRightSidebar,
    setIsMobile 
  } = useUIStore();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;
      setIsMobile(isMobile);
      
      // Auto-close sidebars on mobile when resizing to desktop
      if (!isMobile && sidebarOpen) {
        setSidebarOpen(false);
      }
      
      // Auto-open right sidebar on desktop, close on mobile/tablet
      if (!isTablet && !rightSidebarOpen) {
        setRightSidebarOpen(true);
      } else if (isTablet && rightSidebarOpen) {
        setRightSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile, sidebarOpen, setSidebarOpen, rightSidebarOpen, setRightSidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Mobile Header */}
      <MobileHeader />

      <div className="flex h-screen pt-16 md:pt-0 relative z-10">
        {/* Left Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:pr-8">
              {children}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar 
          isOpen={rightSidebarOpen} 
          onClose={() => setRightSidebarOpen(false)} 
        />
      </div>

      {/* Right Sidebar Toggle (Mobile/Tablet) */}
      <RightSidebarToggle 
        onClick={toggleRightSidebar}
        isOpen={rightSidebarOpen}
      />

      {/* Notifications */}
      <NotificationContainer />
      
      {/* Settings Panel */}
      <SettingsPanel />
    </div>
  );
}