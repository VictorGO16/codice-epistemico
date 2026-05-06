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
    toggleRightSidebarCollapse,
  } = useUIStore();

  const handleLeftSidebarToggle = () => {
    if (window.innerWidth < 1024 && rightSidebarOpen) {
      setRightSidebarOpen(false);
    }
    setSidebarOpen(!sidebarOpen);
  };

  const handleRightSidebarToggle = () => {
    if (window.innerWidth < 1024 && sidebarOpen) {
      setSidebarOpen(false);
    }
    toggleRightSidebar();
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;
      setIsMobile(isMobile);

      if (!isMobile && sidebarOpen) {
        setSidebarOpen(false);
      }

      if (!isTablet && !rightSidebarOpen) {
        setRightSidebarOpen(true);
      }

      if (isMobile) {
        setSidebarCollapsed(false);
        setRightSidebarCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile, sidebarOpen, setSidebarOpen, rightSidebarOpen, setRightSidebarOpen, setSidebarCollapsed, setRightSidebarCollapsed]);

  return (
    // h-screen + overflow-hidden: single source of truth for viewport height
    <div className="h-screen w-full overflow-hidden bg-gray-900 text-white relative">
      <ParticleBackground />
      <MobileHeader onLeftSidebarToggle={handleLeftSidebarToggle} />

      {/*
        flex row filling the full height.
        pt-16 md:pt-0: offset for the fixed mobile header on small screens.
        min-h-0: allows flex children to shrink below their content size,
                 fixing the h-full inheritance chain for overflow-y-auto descendants.
      */}
      <div className="flex h-full pt-16 md:pt-0 relative z-10 min-h-0">

        {/* Left sidebar — shrink-0 prevents it from collapsing under flex pressure */}
        {sidebarCollapsed ? (
          <div className="hidden md:block shrink-0">
            <CollapsedSidebarIndicator
              position="left"
              onExpand={() => setSidebarCollapsed(false)}
            />
          </div>
        ) : (
          <div className="relative shrink-0">
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

        {/*
          Main content area.
          flex-1: fills remaining horizontal space.
          min-w-0: critical — without this, a flex-1 item cannot shrink
                   below its content width when both sidebars are open.
          overflow-hidden: clips content at the main boundary.
        */}
        <main className="flex-1 min-w-0 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="w-full px-4 py-6 md:px-6 md:py-8">
              {children}
            </div>
          </div>
        </main>

        {/* Right sidebar — shrink-0 prevents collapsing */}
        {rightSidebarCollapsed ? (
          <div className="hidden lg:block shrink-0">
            <CollapsedSidebarIndicator
              position="right"
              onExpand={() => setRightSidebarCollapsed(false)}
            />
          </div>
        ) : (
          <div className="relative shrink-0">
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

      <RightSidebarToggle
        onClick={handleRightSidebarToggle}
        isOpen={rightSidebarOpen}
      />
      <NotificationContainer />
      <SettingsPanel />
    </div>
  );
}
