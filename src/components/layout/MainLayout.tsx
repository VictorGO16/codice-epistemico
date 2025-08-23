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
import SidebarCollapseButton from '@/components/ui/SidebarCollapseButton';
import CollapsedSidebarIndicator from '@/components/ui/CollapsedSidebarIndicator';

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
    setIsMobile,
    sidebarCollapsed,
    setSidebarCollapsed,
    toggleSidebarCollapse,
    rightSidebarCollapsed,
    setRightSidebarCollapsed,
    toggleRightSidebarCollapse
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
      
      // Auto-open right sidebar on desktop only
      if (!isTablet && !rightSidebarOpen) {
        setRightSidebarOpen(true);
      }
      
      // Reset collapsed states on mobile
      if (isMobile) {
        setSidebarCollapsed(false);
        setRightSidebarCollapsed(false);
      }
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile, sidebarOpen, setSidebarOpen, rightSidebarOpen, setRightSidebarOpen, setSidebarCollapsed, setRightSidebarCollapsed]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Mobile Header */}
      <MobileHeader />

      <div className="flex h-screen pt-16 md:pt-0 relative z-10">
        {/* Left Sidebar */}
        {sidebarCollapsed ? (
          <div className="hidden md:block">
            <CollapsedSidebarIndicator 
              position="left" 
              onExpand={() => setSidebarCollapsed(false)} 
            />
          </div>
        ) : (
          <div className="relative">
            <Sidebar 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            <SidebarCollapseButton 
              isCollapsed={sidebarCollapsed}
              onToggle={toggleSidebarCollapse}
              position="left"
              className="absolute top-4 -right-4 hidden md:block"
            />
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="w-full px-4 py-6 md:px-6 md:py-8">
              {children}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        {rightSidebarCollapsed ? (
          <div className="hidden lg:block">
            <CollapsedSidebarIndicator 
              position="right" 
              onExpand={() => setRightSidebarCollapsed(false)} 
            />
          </div>
        ) : (
          <div className="relative">
            <RightSidebar 
              isOpen={rightSidebarOpen} 
              onClose={() => setRightSidebarOpen(false)} 
            />
            <SidebarCollapseButton 
              isCollapsed={rightSidebarCollapsed}
              onToggle={toggleRightSidebarCollapse}
              position="right"
              className="absolute top-4 right-4 hidden lg:block z-20"
            />
          </div>
        )}
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