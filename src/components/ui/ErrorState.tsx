import React from 'react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'Unable to load content. Please try again.',
  onRetry,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center bg-[#12151c] border border-red-500/20 rounded-lg min-h-[200px] ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-mono text-lg mb-3">
        !
      </div>
      <h4 className="text-base font-bold text-[#f5f6f8] mb-1">{title}</h4>
      <p className="text-xs text-[#94a3b8] max-w-sm mb-4 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 text-xs font-mono font-semibold bg-[#1a1e27] hover:bg-white/10 text-white rounded border border-white/10 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
