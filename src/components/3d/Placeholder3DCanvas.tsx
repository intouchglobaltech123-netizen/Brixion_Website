import React from 'react';
import { RenderFallbackProps } from './types';

interface Placeholder3DCanvasProps extends RenderFallbackProps {
  title?: string;
  height?: string;
  className?: string;
}

export const Placeholder3DCanvas: React.FC<Placeholder3DCanvasProps> = ({
  title = '3D WebGL Canvas Placeholder',
  message = 'Future 3D interactive Fly Ash Brick viewer stage',
  height = '380px',
  className = '',
}) => {
  return (
    <div
      style={{ height }}
      className={`relative w-full bg-[#12151c] border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden ${className}`}
    >
      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-[#d9532f]/10 border border-[#d9532f]/30 flex items-center justify-center text-[#d9532f] font-mono text-xl">
          3D
        </div>
        <h4 className="text-base font-bold text-[#f5f6f8] font-heading">{title}</h4>
        <p className="text-xs text-[#94a3b8] max-w-xs leading-relaxed">{message}</p>
        <span className="text-[10px] font-mono text-[#d9532f] uppercase tracking-widest pt-2">
          [ Ready for R3F / Three.js integration ]
        </span>
      </div>
    </div>
  );
};
