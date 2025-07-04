'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useScrollAnimation';

interface ParallaxContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  children: React.ReactNode;
}

export const ParallaxContainer = forwardRef<HTMLDivElement, ParallaxContainerProps>(
  ({ className, speed = 0.5, direction = 'up', children, ...props }, ref) => {
    const { elementRef, offset } = useParallax(speed);

    const getTransform = () => {
      switch (direction) {
        case 'up':
          return `translateY(${offset}px)`;
        case 'down':
          return `translateY(${-offset}px)`;
        case 'left':
          return `translateX(${offset}px)`;
        case 'right':
          return `translateX(${-offset}px)`;
        default:
          return `translateY(${offset}px)`;
      }
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
        className={cn('will-change-transform', className)}
        style={{
          transform: getTransform(),
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ParallaxContainer.displayName = 'ParallaxContainer';