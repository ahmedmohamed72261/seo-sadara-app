'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'rainbow' | 'sunset' | 'ocean';
  animated?: boolean;
  children: React.ReactNode;
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, variant = 'primary', animated = false, children, ...props }, ref) => {
    const gradientVariants = {
      primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600',
      secondary: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
      success: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
      warning: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
      rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
      sunset: 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600',
      ocean: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'bg-clip-text text-transparent font-bold leading-tight',
          gradientVariants[variant],
          animated && 'animate-gradient bg-[length:200%_200%]',
          className
        )}
        style={{
          lineHeight: '1.2',
          display: 'inline-block',
          paddingBottom: '0.1em'
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';