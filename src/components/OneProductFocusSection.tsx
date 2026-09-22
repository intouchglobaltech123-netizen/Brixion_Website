import React from 'react';
import { motion } from 'framer-motion';

export default function OneProductFocusSection() {
  return (
    <section className="relative w-full bg-[#F5F7FA] overflow-hidden select-none border-b border-[#CBD5E1]">
      {/* Full-bleed 100% Screen Width Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/one-product-clear-focus.jpg"
          alt="Brixion Fly Ash Brick close-up on construction site"
          className="w-full h-full object-cover object-right sm:object-center"
        />
        {/* Gradient Overlay for Left Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 sm:via-[#F8FAFC]/85 to-transparent z-10 w-full sm:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/40 via-transparent to-[#F8FAFC]/20 z-10" />
      </div>

      {/* Content Container Centered Inside Full-Bleed Section */}
      <div className="relative max-w-7xl mx-auto min-h-[460px] sm:min-h-[520px] flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Top Right Vertical Floating Tag */}
        <div className="absolute top-8 right-6 sm:right-12 z-20 hidden md:flex flex-col items-center space-y-2 pointer-events-none text-right">
          <div className="text-[11px] font-mono font-bold uppercase text-slate-700 tracking-[0.2em] leading-snug text-right">
            BUILDING<br />
            BETTER<br />
            SPACES<br />
            TOGETHER
          </div>
          <div className="w-[1.5px] h-12 bg-slate-400/80 mt-1" />
        </div>

        {/* Content Box */}
        <div className="relative z-20 max-w-xl space-y-6">
          
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#0052CC]" />
            <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-[0.25em]">
              OUR FOCUS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0C192E] tracking-tight font-heading leading-tight uppercase">
              ONE PRODUCT.
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0052CC] tracking-tight font-heading leading-tight uppercase" style={{ color: '#0052CC' }}>
              CLEAR FOCUS.
            </h2>
          </motion.div>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-lg"
          >
            Brixion Bricks and Blocks LLP focuses on one core construction material — Fly Ash Bricks. By keeping our product focus clear, we put attention on consistency, finish, and the practical requirements of modern construction.
          </motion.p>

          {/* Bottom Left Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#0052CC]" />
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.2em]">
              A STRONGER FOUNDATION FOR TOMORROW
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
