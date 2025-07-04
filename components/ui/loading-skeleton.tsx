'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface LoadingSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  lines?: number;
  width?: string;
  height?: string;
  animated?: boolean;
}

export const LoadingSkeleton = forwardRef<HTMLDivElement, LoadingSkeletonProps>(
  ({ 
    className, 
    variant = 'rectangular', 
    lines = 1, 
    width, 
    height, 
    animated = true,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      'bg-gray-200 dark:bg-gray-700',
      animated && 'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]',
      className
    );

    if (variant === 'text') {
      return (
        <div ref={ref} className="space-y-2" {...props}>
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={cn(
                baseClasses,
                'h-4 rounded',
                index === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
              )}
              style={{ width: width }}
            />
          ))}
        </div>
      );
    }

    if (variant === 'circular') {
      return (
        <div
          ref={ref}
          className={cn(baseClasses, 'rounded-full')}
          style={{ 
            width: width || '40px', 
            height: height || width || '40px' 
          }}
          {...props}
        />
      );
    }

    if (variant === 'card') {
      return (
        <div ref={ref} className={cn('space-y-4 p-4', className)} {...props}>
          <div className={cn(baseClasses, 'h-48 rounded-lg')} />
          <div className="space-y-2">
            <div className={cn(baseClasses, 'h-4 rounded w-3/4')} />
            <div className={cn(baseClasses, 'h-4 rounded w-1/2')} />
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, 'rounded')}
        style={{ 
          width: width || '100%', 
          height: height || '20px' 
        }}
        {...props}
      />
    );
  }
);

LoadingSkeleton.displayName = 'LoadingSkeleton';