import React from 'react';

interface LoadingStateProps {
  message?: string;
  className?: string;
  is3D?: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading component...',
  className = '',
  is3D = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center bg-[#12151c] border border-white/10 rounded-lg min-h-[200px] ${className}`}
    >
      <div className="w-10 h-10 border-3 border-[#d9532f]/20 border-t-[#d9532f] rounded-full animate-spin mb-4" />
      <p className="text-sm font-heading font-medium text-[#f5f6f8]">{message}</p>
      {is3D && (
        <span className="text-xs font-mono text-[#94a3b8] mt-1">Initializing WebGL 3D Canvas</span>
      )}
    </div>
  );
};
