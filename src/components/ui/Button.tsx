import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#087BCE] focus-visible:outline-offset-2 min-h-[44px] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#174A9A] to-[#087BCE] text-white hover:from-[#087BCE] hover:to-[#174A9A] border border-white/20 shadow-[0_4px_20px_rgba(8,123,206,0.35)] hover:shadow-[0_8px_28px_rgba(8,123,206,0.55)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-[#0e1a38] text-white border border-[#B8BDC5]/20 hover:bg-[#15254a] hover:border-[#087BCE]/50 hover:-translate-y-0.5 active:translate-y-0 shadow-md',
    outline:
      'bg-transparent text-white border border-[#B8BDC5]/30 hover:bg-white/5 hover:border-[#087BCE] hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
