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
    accent: 'bg-[#0070f3]/10 text-[#0070f3] border-[#0070f3]/30',
    neutral: 'bg-[#040A17] text-[#38BDF8] border-[#38BDF8]/30',
    outline: 'bg-transparent text-[#0070f3] border-[#0070f3]/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded border font-mono text-xs uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
