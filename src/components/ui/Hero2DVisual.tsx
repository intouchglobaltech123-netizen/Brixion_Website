import React from 'react';
import { motion } from 'framer-motion';
import { primaryProduct } from '../../data/products';
import { Box, Ruler, CheckCircle2 } from 'lucide-react';

export const Hero2DVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square lg:aspect-[4/3.5] flex items-center justify-center p-2">
      {/* FUTURE: Replace this 2D hero visual with the interactive Three.js Brixion 3D hero */}
      
      {/* Main Structural Frame with Clean White Card & Navy Accents */}
      <div className="relative w-full h-full bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-6 shadow-md flex flex-col justify-between overflow-hidden">
        {/* Architectural Grid Layer */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

        {/* Top Technical Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#E2E8F0] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0052CC]" />
            <span className="font-mono text-xs text-[#0C192E] font-bold tracking-wider uppercase">
              Brixion Fly Ash Specimen
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-[#F1F3F6] border border-[#CBD5E1] text-[10px] font-mono text-[#0052CC] font-bold uppercase">
            Hydraulic Formed
          </span>
        </div>

        {/* Layered Architectural CSS Brick Stacking Visual (Matches Logo Colors) */}
        <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
          {/* Top Staggered Metallic Brick (Logo Top Cobalt Blue) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-48 sm:w-56 h-12 bg-gradient-to-r from-[#0052CC] to-[#003E99] border-2 border-white/40 rounded-xs shadow-md flex items-center justify-center z-30 -mb-2"
          >
            <span className="font-heading font-black text-xs sm:text-sm tracking-[0.25em] text-white uppercase drop-shadow">
              BRIXION
            </span>
          </motion.div>

          {/* Middle Dual Interlocking Concrete Bricks (Logo Bottom Concrete Bricks) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20 flex gap-1.5 w-64 sm:w-72 justify-center -mb-2"
          >
            <div className="w-32 sm:w-36 h-12 bg-[#7E8B9B] border border-[#CBD5E1] rounded-xs shadow-xs flex items-center justify-center">
              <span className="font-mono text-[10px] text-white font-bold tracking-widest uppercase">9″ × 4.25″</span>
            </div>
            <div className="w-32 sm:w-36 h-12 bg-[#64748B] border border-[#CBD5E1] rounded-xs shadow-xs flex items-center justify-center">
              <span className="font-mono text-[10px] text-white font-bold tracking-widest uppercase">3″ HEIGHT</span>
            </div>
          </motion.div>

          {/* Foundation Base (Modular Stretcher Bond) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 flex gap-1.5 w-72 sm:w-80 justify-center"
          >
            <div className="w-24 sm:w-28 h-12 bg-[#94A3B8] border border-[#CBD5E1] rounded-xs" />
            <div className="w-24 sm:w-28 h-12 bg-[#0C192E] border border-[#0052CC] rounded-xs flex items-center justify-center shadow-xs">
              <span className="font-mono text-[9px] text-[#38BDF8] font-bold">≈ 3.25 KG</span>
            </div>
            <div className="w-24 sm:w-28 h-12 bg-[#94A3B8] border border-[#CBD5E1] rounded-xs" />
          </motion.div>

          {/* Dimension Guide Metric Callouts */}
          <div className="mt-5 flex items-center gap-4 text-xs font-mono text-[#475569]">
            <span className="flex items-center gap-1.5 text-[#0C192E] font-bold">
              <Ruler className="w-3.5 h-3.5 text-[#0052CC]" />
              {primaryProduct.sizeInches}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
            <span className="flex items-center gap-1.5 text-[#0C192E] font-bold">
              <Box className="w-3.5 h-3.5 text-[#0052CC]" />
              {primaryProduct.weightApprox}
            </span>
          </div>
        </div>

        {/* Bottom Status Callout */}
        <div className="relative z-10 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
          <span className="flex items-center gap-1.5 text-[#0C192E] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC]" />
            Zero Kiln Firing
          </span>
          <span className="text-[#64748B] uppercase tracking-wider font-medium">Uniform Modular Coursing</span>
        </div>
      </div>
    </div>
  );
};
