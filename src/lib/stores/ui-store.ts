import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TabId, ModalType, NotificationType } from '@/types';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
}

interface UIState {
  // Tab management
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;

  // Modal management
  activeModal: ModalType;
  modalData: unknown;
  openModal: (type: ModalType, data?: unknown) => void;
  closeModal: () => void;

  // Sidebar management
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Right sidebar management
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (open: boolean) => void;
  toggleRightSidebar: () => void;

  // Loading states
  isLoading: boolean;
  loadingMessage: string;
  setLoading: (loading: boolean, message?: string) => void;

  // Notifications
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;

  // Theme and preferences
  isDarkMode: boolean;
  particlesEnabled: boolean;
  animationsEnabled: boolean;
  toggleDarkMode: () => void;
  toggleParticles: () => void;
  toggleAnimations: () => void;

  // Search functionality
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Mobile/responsive
  isMobile: boolean;
  setIsMobile: (mobile: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      // Tab management
      activeTab: 'home',
      setActiveTab: (tab: TabId) => set({ activeTab: tab }),

      // Modal management
      activeModal: null,
      modalData: null,
      openModal: (type: ModalType, data?: unknown) => 
        set({ activeModal: type, modalData: data }),
      closeModal: () => 
        set({ activeModal: null, modalData: null }),

      // Sidebar management
      sidebarOpen: false,
      setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      // Right sidebar management
      rightSidebarOpen: false,
      setRightSidebarOpen: (open: boolean) => set({ rightSidebarOpen: open }),
      toggleRightSidebar: () => set((state) => ({ rightSidebarOpen: !state.rightSidebarOpen })),

      // Loading states
      isLoading: false,
      loadingMessage: '',
      setLoading: (loading: boolean, message = '') => 
        set({ isLoading: loading, loadingMessage: message }),

      // Notifications
      notifications: [],
      addNotification: (notification) => {
        const id = Date.now().toString();
        const newNotification = { ...notification, id };
        
        set((state) => ({
          notifications: [...state.notifications, newNotification],
        }));

        // Auto-remove after duration
        if (notification.duration !== 0) {
          setTimeout(() => {
            get().removeNotification(id);
          }, notification.duration || 5000);
        }
      },
      removeNotification: (id: string) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
      clearNotifications: () => set({ notifications: [] }),

      // Theme and preferences
      isDarkMode: true,
      particlesEnabled: true,
      animationsEnabled: true,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      toggleParticles: () => set((state) => ({ particlesEnabled: !state.particlesEnabled })),
      toggleAnimations: () => set((state) => ({ animationsEnabled: !state.animationsEnabled })),

      // Search functionality
      searchQuery: '',
      setSearchQuery: (query: string) => set({ searchQuery: query }),

      // Mobile/responsive
      isMobile: false,
      setIsMobile: (mobile: boolean) => set({ isMobile: mobile }),
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open: boolean) => set({ isMobileMenuOpen: open }),
      toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    }),
    {
      name: 'ui-preferences',
      partialize: (state) => ({
        activeTab: state.activeTab,
        isDarkMode: state.isDarkMode,
        particlesEnabled: state.particlesEnabled,
        animationsEnabled: state.animationsEnabled,
      }),
    }
  )
);