'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-up' | 'bounce-in';
  delay?: number;
  duration?: string;
  threshold?: number;
  triggerOnce?: boolean;
  children: React.ReactNode;
}

export const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    className, 
    animation = 'fade-in-up', 
    delay = 0, 
    duration = '0.8s',
    threshold = 0.1,
    triggerOnce = true,
    children, 
    ...props 
  }, ref) => {
    const { elementRef, isVisible } = useScrollAnimation({ 
      threshold, 
      triggerOnce, 
      delay 
    });

    const animationClasses = {
      'fade-in': 'animate-fade-in',
      'fade-in-up': 'animate-fade-in-up',
      'fade-in-down': 'animate-fade-in-down',
      'fade-in-left': 'animate-fade-in-left',
      'fade-in-right': 'animate-fade-in-right',
      'scale-in': 'animate-scale-in',
      'slide-up': 'animate-slide-up',
      'bounce-in': 'animate-bounce-in',
    };

    return (
      <div
        ref={(node) => {
          elementRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={cn(
          'transition-all',
          !isVisible && 'opacity-0',
          isVisible && animationClasses[animation],
          className
        )}
        style={{
          animationDuration: duration,
          animationDelay: `${delay}ms`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedContainer.displayName = 'AnimatedContainer';