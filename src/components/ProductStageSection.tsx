import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Box, Layers, ShieldCheck, Droplets, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductStageSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#CBD5E1] overflow-hidden select-none" id="product-stage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C192E] tracking-tight font-heading uppercase leading-tight"
          >
            THE BRIXION <span className="text-[#0052CC]">FLY ASH BRICK.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto font-medium"
          >
            High-strength modular construction material manufactured to exact civil engineering tolerances.
          </motion.p>
        </div>

        {/* Split-Screen Stage Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stage Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#CBD5E1] shadow-xl bg-[#0C192E] group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/assets/flyash-main-product.jpg"
                  alt="Precision Stacked Brixion Fly Ash Bricks"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#0C192E]/90 text-white font-mono text-xs font-bold px-3 py-1.5 rounded backdrop-blur-xs flex items-center gap-2 border border-white/10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                  <span>SPECIMEN SPECIFICATION</span>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0C192E] via-[#0C192E]/70 to-transparent text-white space-y-1">
                  <h4 className="text-base font-bold font-heading">Standard Fly Ash Brick (9 × 4.25 × 3 in)</h4>
                  <p className="text-xs text-slate-300">Uniform 90° edges with micro-dense aggregate compaction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Specifications Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#0052CC] uppercase tracking-wider block">
                ENGINEERING SPECIFICATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0C192E] font-heading tracking-tight">
                High-Performance Construction Unit
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Dimensions", val: "9 × 4.25 × 3 inches", icon: <Ruler className="w-4 h-4 text-[#0C192E]" /> },
                { label: "Approx Weight", val: "3.25 kg per unit", icon: <Box className="w-4 h-4 text-[#0C192E]" /> },
                { label: "Surface Finish", val: "Smooth Plane", icon: <Layers className="w-4 h-4 text-[#0C192E]" /> },
                { label: "Compressive Strength", val: "High Strength Pass", icon: <ShieldCheck className="w-4 h-4 text-[#0C192E]" /> },
                { label: "Water Absorption", val: "Low Rate", icon: <Droplets className="w-4 h-4 text-[#0C192E]" /> },
                { label: "Quality Pass", val: "100% Inspected", icon: <Check className="w-4 h-4 text-[#0C192E]" /> },
              ].map((spec) => (
                <div key={spec.label} className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-slate-400 transition-all shadow-xs space-y-1">
                  <div className="flex items-center gap-2">
                    {spec.icon}
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">{spec.label}</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0C192E] font-mono">{spec.val}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/products"
                className="btn-primary-blue text-xs uppercase tracking-wider font-bold py-3.5 px-7 inline-flex items-center gap-2 shadow-md"
              >
                <span>VIEW COMPLETE PRODUCT DATA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
