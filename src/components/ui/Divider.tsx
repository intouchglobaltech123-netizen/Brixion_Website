import React from 'react';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <hr className={`border-0 h-px bg-white/10 my-8 ${className}`} />;
};
