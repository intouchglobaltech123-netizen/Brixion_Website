import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'full';
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-[1200px]',
    hero: 'max-w-[1280px]',
    full: 'max-w-full',
  };

  return (
    <div className={`w-full mx-auto px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
