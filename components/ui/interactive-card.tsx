'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useMouseTracking } from '@/hooks/useScrollAnimation';

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'lift' | 'tilt' | 'glow' | 'scale';
  intensity?: 'subtle' | 'medium' | 'strong';
  children: React.ReactNode;
}

export const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, variant = 'lift', intensity = 'medium', children, ...props }, ref) => {
    const { elementRef, mousePosition, isHovering } = useMouseTracking();

    const getIntensityValue = () => {
      switch (intensity) {
        case 'subtle':
          return 0.5;
        case 'medium':
          return 1;
        case 'strong':
          return 1.5;
        default:
          return 1;
      }
    };

    const getTransform = () => {
      if (!isHovering) return 'none';
      
      const intensityMultiplier = getIntensityValue();
      const { x, y } = mousePosition;

      switch (variant) {
        case 'tilt':
          const tiltX = (y - 50) * 0.1 * intensityMultiplier;
          const tiltY = (x - 50) * -0.1 * intensityMultiplier;
          return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        
        case 'scale':
          return `scale(${1 + 0.05 * intensityMultiplier})`;
        
        case 'lift':
        default:
          return `translateY(-${8 * intensityMultiplier}px) scale(1.02)`;
      }
    };

    const getBoxShadow = () => {
      return '';
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
          'transition-all duration-300 ease-out cursor-pointer',
          'transform-gpu will-change-transform',
          className
        )}
        style={{
          transform: getTransform(),
          boxShadow: getBoxShadow(),
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InteractiveCard.displayName = 'InteractiveCard';