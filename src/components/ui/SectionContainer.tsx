import React from 'react';
import { ResponsiveContainer } from './ResponsiveContainer';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'deep' | 'surface' | 'panel';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = '',
  containerSize = 'lg',
  background = 'deep',
}) => {
  const bgClasses = {
    deep: 'bg-[#F3F4F6]',
    surface: 'bg-[#EAECF0]',
    panel: 'bg-[#FFFFFF]',
  };

  return (
    <section id={id} className={`py-24 lg:py-[120px] ${bgClasses[background]} ${className}`}>
      <ResponsiveContainer size={containerSize}>
        {children}
      </ResponsiveContainer>
    </section>
  );
};
