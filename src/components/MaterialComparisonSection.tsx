import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

interface ComparisonFeature {
  id: string;
  feature: string;
  flyAshVal: string;
  clayVal: string;
  explanation: string;
}

const comparisonData: ComparisonFeature[] = [
  {
    id: 'strength',
    feature: 'STRENGTH',
    flyAshVal: 'HIGH',
    clayVal: 'MODERATE',
    explanation: 'Fly Ash Bricks: High Compressive Strength | Clay Bricks: Moderate Strength'
  },
  {
    id: 'water_absorption',
    feature: 'WATER ABSORPTION',
    flyAshVal: 'LOW',
    clayVal: 'HIGH',
    explanation: 'Fly Ash Bricks: Low Water Absorption | Clay Bricks: High Moisture Retention'
  },
  {
    id: 'shape_size',
    feature: 'SHAPE & SIZE',
    flyAshVal: 'UNIFORM',
    clayVal: 'IRREGULAR',
    explanation: 'Fly Ash Bricks: Uniform Modular Dimensions | Clay Bricks: Irregular Edge Variances'
  },
  {
    id: 'surface_finish',
    feature: 'SURFACE FINISH',
    flyAshVal: 'SMOOTH',
    clayVal: 'ROUGH',
    explanation: 'Fly Ash Bricks: Smooth Plane Finish | Clay Bricks: Rough Surface Finish'
  },
  {
    id: 'eco_friendly',
    feature: 'ECO-FRIENDLY',
    flyAshVal: 'YES',
    clayVal: 'NO',
    explanation: 'Fly Ash Bricks: Conserves Topsoil & Zero Kiln Firing | Clay Bricks: High Energy Kiln Firing'
  },
  {
    id: 'mortar_usage',
    feature: 'MORTAR USAGE',
    flyAshVal: 'LESS',
    clayVal: 'MORE',
    explanation: 'Fly Ash Bricks: 20–25% Less Mortar Required | Clay Bricks: Higher Mortar Thickness'
  },
  {
    id: 'durability',
    feature: 'DURABILITY',
    flyAshVal: 'HIGH',
    clayVal: 'MODERATE',
    explanation: 'Fly Ash Bricks: High Structural Durability | Clay Bricks: Moderate Weathering Durability'
  }
];

export default function MaterialComparisonSection() {
  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  return (
    <section
      id="material-comparison"
      className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0C192E] border-b border-[#CBD5E1] overflow-hidden select-none"
      data-purpose="material-comparison-showroom"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HERO AREA OF SECTION                                                   */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C192E] tracking-tight font-heading uppercase"
          >
            FLY ASH BRICKS <span className="text-[#0070F3]">VS</span> CLAY BRICKS
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal"
          >
            A side-by-side comparison of key characteristics based on the supplied Brixion product brochure.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE-OPTIMIZED COMPARISON CARDS LIST (VISIBLE ON MOBILE ONLY)            */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-4">
          {/* Header Summary Pill */}
          <div className="p-4 rounded-xl bg-[#090E1B] text-white flex items-center justify-between shadow-md">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#35C8F2] uppercase tracking-wider block">
                COMPARISON SUMMARY
              </span>
              <h3 className="text-sm font-bold font-heading text-white">
                Brixion Fly Ash vs. Traditional Clay
              </h3>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#1078ED] text-white">
              7 FEATURES
            </span>
          </div>

          {/* 7 Feature Comparison Cards */}
          <div className="space-y-3">
            {comparisonData.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-white border border-[#CBD5E1] shadow-xs space-y-3"
              >
                {/* Feature Label */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#090E1B] uppercase tracking-wider">
                    {item.feature}
                  </span>
                </div>

                {/* Side-by-side Comparison Values */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Fly Ash Value */}
                  <div className="p-2.5 rounded-lg bg-[#F0F7FD] border border-[#1078ED]/30 space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#1078ED] uppercase block">
                      FLY ASH BRICK
                    </span>
                    <span className="text-xs font-extrabold text-[#1078ED] font-mono block">
                      {item.flyAshVal}
                    </span>
                  </div>

                  {/* Clay Value */}
                  <div className="p-2.5 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#B84A28] uppercase block">
                      CLAY BRICK
                    </span>
                    <span className="text-xs font-extrabold text-[#B84A28] font-mono block">
                      {item.clayVal}
                    </span>
                  </div>
                </div>

                {/* Explanation Footnote */}
                <p className="text-[11px] text-[#64748B] font-medium leading-relaxed pt-1">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THREE-COLUMN SHOWROOM LAYOUT (VISIBLE ON DESKTOP & TABLET)              */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT SIDE: FLY ASH BRICKS CARD                                          */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-4 bg-white border-2 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 ${
              activeRowId !== null
                ? 'border-[#0070F3] ring-4 ring-[#0070F3]/15 shadow-xl'
                : 'border-[#CBD5E1] hover:border-[#0070F3]'
            }`}
          >
            <div className="p-6 space-y-4">
              
              {/* Photo Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200">
                <img
                  src="/assets/flyash-main-product.jpg"
                  alt="Brixion Fly Ash Bricks"
                  className="w-full h-full object-cover"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#0C192E]/90 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" />
                  <span>BRIXION PRODUCT</span>
                </div>
              </div>

              {/* Title & Specs */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-extrabold text-[#0C192E] font-heading tracking-tight">
                  FLY ASH BRICKS
                </h3>
                <p className="text-xs text-[#0070F3] font-medium leading-relaxed">
                  Smooth finish • Uniform shape • No firing needed
                </p>
              </div>

            </div>

            {/* Material Character Strip */}
            <div className="bg-[#0C192E] text-white p-4 border-t border-slate-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest block">
                MATERIAL CHARACTER
              </span>
              <p className="text-xs font-bold font-mono tracking-wide text-white uppercase">
                UNIFORM · SMOOTH · LOW ABSORPTION
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------------- */}
          {/* CENTER: INTERACTIVE MEASUREMENT COMPARISON RAIL                         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 bg-white border border-[#CBD5E1] rounded-2xl p-4 sm:p-6 shadow-md flex flex-col justify-center space-y-3">
            
            {/* Rail Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-[11px] font-mono font-extrabold uppercase text-slate-500">
              <span className="text-[#0070F3]">FLY ASH</span>
              <span className="text-slate-700 tracking-wider">FEATURE</span>
              <span className="text-[#B84A28]">CLAY</span>
            </div>

            {/* Feature Measurement Rows */}
            <div className="space-y-2">
              {comparisonData.map((item, idx) => {
                const isActive = activeRowId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: 0.3 + idx * 0.08, ease: 'easeOut' }}
                    onMouseEnter={() => setActiveRowId(item.id)}
                    onMouseLeave={() => setActiveRowId(null)}
                    className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#F0F7FD] border-[#0070F3] shadow-sm scale-[1.02]'
                        : 'bg-[#F8FAFC] border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {/* Row Main Values & Feature Name */}
                    <div className="flex items-center justify-between text-xs font-bold">
                      {/* Fly Ash Value */}
                      <span className={`font-mono text-left w-20 ${isActive ? 'text-[#0070F3] font-black' : 'text-[#0C192E]'}`}>
                        {item.flyAshVal}
                      </span>

                      {/* Feature Name & Connector Lines */}
                      <div className="flex-grow flex items-center justify-center gap-1.5 px-2 text-center">
                        <span className={`h-[1.5px] transition-all ${isActive ? 'w-5 bg-[#0070F3]' : 'w-2 bg-slate-300'}`} />
                        <span className={`text-[11px] font-mono uppercase tracking-tight transition-colors ${isActive ? 'text-[#0070F3] font-extrabold' : 'text-slate-600'}`}>
                          {item.feature}
                        </span>
                        <span className={`h-[1.5px] transition-all ${isActive ? 'w-5 bg-[#0070F3]' : 'w-2 bg-slate-300'}`} />
                      </div>

                      {/* Clay Value */}
                      <span className={`font-mono text-right w-20 ${isActive ? 'text-[#B84A28] font-black' : 'text-[#78350F]'}`}>
                        {item.clayVal}
                      </span>
                    </div>

                    {/* Interactive Tiny Explanation Underneath */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pt-2 mt-2 border-t border-[#0070F3]/20"
                        >
                          <p className="text-[11px] text-slate-600 font-medium text-center leading-tight">
                            {item.explanation}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT SIDE: TRADITIONAL CLAY BRICKS CARD                                */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 bg-[#FFFBEB] border-2 border-[#FDE68A] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-[#B84A28] transition-all duration-300"
          >
            <div className="p-6 space-y-4">
              
              {/* Photo Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-amber-950 border border-amber-200">
                <img
                  src="/assets/traditional-clay-bricks.jpg"
                  alt="Traditional Clay Bricks"
                  className="w-full h-full object-cover"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#78350F]/90 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs flex items-center gap-1.5 border border-amber-200/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B84A28]" />
                  <span>TRADITIONAL MATERIAL</span>
                </div>
              </div>

              {/* Title & Specs */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-extrabold text-[#78350F] font-heading tracking-tight">
                  CLAY BRICKS
                </h3>
                <p className="text-xs text-[#B84A28] font-medium leading-relaxed">
                  Rougher surface • Irregular shape • Firing process
                </p>
              </div>

            </div>

            {/* Material Character Strip */}
            <div className="bg-[#78350F] text-amber-50 p-4 border-t border-amber-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest block">
                MATERIAL CHARACTER
              </span>
              <p className="text-xs font-bold font-mono tracking-wide uppercase text-amber-100">
                IRREGULAR · ROUGH · HIGH ABSORPTION
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
