import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const variantClasses = {
    accent: 'bg-[#d9532f]/10 text-[#d9532f] border-[#d9532f]/30',
    neutral: 'bg-[#1a1e27] text-[#94a3b8] border-white/10',
    outline: 'bg-transparent text-[#f5f6f8] border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded border font-mono text-xs uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
