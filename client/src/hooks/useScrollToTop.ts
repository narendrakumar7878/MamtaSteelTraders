import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook that scrolls to top when navigating to specific routes
 * @param targetRoutes - Array of routes that should trigger scroll to top
 */
export function useScrollToTop(targetRoutes: string[] = []) {
  const [location] = useLocation();

  useEffect(() => {
    // If targetRoutes is empty, scroll to top on every route change
    // Otherwise, only scroll to top if current route is in targetRoutes
    if (targetRoutes.length === 0 || targetRoutes.includes(location)) {
      // Scroll to top instantly without smooth scrolling to avoid janky behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [location, targetRoutes]);
}

/**
 * Hook that scrolls to top on EVERY route change
 */
export function useGlobalScrollToTop() {
  return useScrollToTop([]);
}

/**
 * Hook specifically for Contact page scroll-to-top behavior
 */
export function useContactScrollToTop() {
  return useScrollToTop(['/contact']);
}