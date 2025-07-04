'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  children: React.ReactNode;
}

export const ResponsiveContainer = forwardRef<HTMLDivElement, ResponsiveContainerProps>(
  ({ 
    className, 
    size = 'lg', 
    padding = 'md', 
    center = true, 
    children, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    const paddingClasses = {
      none: '',
      sm: 'px-4 sm:px-6',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-6 sm:px-8 lg:px-12',
      xl: 'px-8 sm:px-12 lg:px-16',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          sizeClasses[size],
          paddingClasses[padding],
          center && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ResponsiveContainer.displayName = 'ResponsiveContainer';

// Grid component for responsive layouts
interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const ResponsiveGrid = forwardRef<HTMLDivElement, ResponsiveGridProps>(
  ({ 
    className, 
    cols = { default: 1, md: 2, lg: 3 }, 
    gap = 'md', 
    children, 
    ...props 
  }, ref) => {
    const gapClasses = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    };

    const getGridCols = () => {
      const classes = [];
      
      if (cols.default) classes.push(`grid-cols-${cols.default}`);
      if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
      if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
      if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
      if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
      
      return classes.join(' ');
    };

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          getGridCols(),
          gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ResponsiveGrid.displayName = 'ResponsiveGrid';