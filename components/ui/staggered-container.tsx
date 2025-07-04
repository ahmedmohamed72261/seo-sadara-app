'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface StaggeredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  staggerDelay?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  children: React.ReactNode[];
}

export function StaggeredContainer({ 
  className, 
  staggerDelay = 100, 
  animation = 'fade-in-up',
  children,
  ...props 
}: StaggeredContainerProps) {
  const childrenArray = React.Children.toArray(children);
  const { containerRef, visibleItems } = useStaggeredAnimation(childrenArray.length, staggerDelay);

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
  };

  return (
    <div
      ref={containerRef}
      className={cn('space-y-4', className)}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={cn(
            'transition-all duration-800',
            !visibleItems[index] && 'opacity-0 translate-y-8',
            visibleItems[index] && animationClasses[animation]
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}