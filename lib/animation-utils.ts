// Animation utility functions and constants

export const ANIMATION_DURATIONS = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  slower: '0.8s',
  slowest: '1.2s',
} as const;

export const EASING_FUNCTIONS = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
} as const;

export const STAGGER_DELAYS = {
  fast: 50,
  normal: 100,
  slow: 150,
  slower: 200,
} as const;

// Utility function to create staggered animation delays
export function createStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay;
}

// Utility function to calculate responsive font sizes
export function getResponsiveFontSize(
  minSize: number,
  maxSize: number,
  minViewport: number = 320,
  maxViewport: number = 1200
): string {
  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minSize;
  
  return `clamp(${minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxSize}rem)`;
}

// Utility function to check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Utility function to create intersection observer with default options
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Utility function to debounce scroll events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Utility function to throttle scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Animation presets for common use cases
export const ANIMATION_PRESETS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: EASING_FUNCTIONS.easeOut },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASING_FUNCTIONS.easeOut },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASING_FUNCTIONS.easeOut },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: EASING_FUNCTIONS.easeOut },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: EASING_FUNCTIONS.easeOut },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: EASING_FUNCTIONS.easeOut },
  },
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: EASING_FUNCTIONS.bounce },
  },
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
} as const;

// Utility function to get current breakpoint
export function getCurrentBreakpoint(): keyof typeof BREAKPOINTS | null {
  if (typeof window === 'undefined') return null;
  
  const width = window.innerWidth;
  
  if (width >= BREAKPOINTS['3xl']) return '3xl';
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  if (width >= BREAKPOINTS.xs) return 'xs';
  
  return null;
}

// Utility function to check if element is in viewport
export function isInViewport(element: Element, threshold: number = 0): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const verticalThreshold = windowHeight * threshold;
  const horizontalThreshold = windowWidth * threshold;
  
  return (
    rect.top >= -verticalThreshold &&
    rect.left >= -horizontalThreshold &&
    rect.bottom <= windowHeight + verticalThreshold &&
    rect.right <= windowWidth + horizontalThreshold
  );
}

// Performance optimization utilities
export const PERFORMANCE_HINTS = {
  // Use transform and opacity for animations (GPU accelerated)
  gpuAccelerated: ['transform', 'opacity'],
  
  // Avoid animating these properties (causes layout/paint)
  avoid: ['width', 'height', 'padding', 'margin', 'border-width'],
  
  // Prefer these over layout-triggering properties
  prefer: ['transform', 'opacity', 'filter', 'backdrop-filter'],
} as const;

// Color palette for gradients and animations
export const ANIMATION_COLORS = {
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    success: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    warning: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    rainbow: 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff)',
    sunset: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    ocean: 'linear-gradient(135deg, #667db6 0%, #0082c8 100%)',
  },
  shadows: {
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    colored: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
  },
} as const;