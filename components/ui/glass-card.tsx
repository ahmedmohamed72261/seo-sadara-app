'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'colored';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  children: React.ReactNode;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ 
    className, 
    variant = 'light', 
    blur = 'md', 
    opacity = 0.1, 
    children, 
    ...props 
  }, ref) => {
    const blurClasses = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
    };

    const variantClasses = {
      light: `bg-white/[${opacity}] border-white/20`,
      dark: `bg-black/[${opacity}] border-white/10`,
      colored: `bg-gradient-to-br from-white/[${opacity}] to-white/[${opacity * 0.5}] border-white/20`,
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border backdrop-saturate-150',
          blurClasses[blur],
          variantClasses[variant],
          'shadow-lg shadow-black/5',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';