'use client';

import { useUIStore } from '@/lib/stores/ui-store';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon,
  XCircleIcon 
} from '@heroicons/react/24/solid';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useUIStore();

  if (notifications.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-400" />;
      case 'error':
        return <XCircleIcon className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400" />;
      case 'info':
      default:
        return <InformationCircleIcon className="w-5 h-5 text-blue-400" />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-900/90 border-green-700';
      case 'error':
        return 'bg-red-900/90 border-red-700';
      case 'warning':
        return 'bg-yellow-900/90 border-yellow-700';
      case 'info':
      default:
        return 'bg-blue-900/90 border-blue-700';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            ${getBackgroundColor(notification.type)}
            border rounded-lg p-4 shadow-lg backdrop-blur-sm
            animate-in slide-in-from-right duration-300
          `}
        >
          <div className="flex items-start gap-3">
            {getIcon(notification.type)}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white">
                {notification.title}
              </h4>
              <p className="text-sm text-gray-300 mt-1">
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}