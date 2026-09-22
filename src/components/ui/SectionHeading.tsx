import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl space-y-3 mb-10 sm:mb-14 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#174A9A]/20 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#087BCE]" />
          <span className="text-xs font-mono text-[#174A9A] uppercase tracking-wider font-bold">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142E67] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
};
