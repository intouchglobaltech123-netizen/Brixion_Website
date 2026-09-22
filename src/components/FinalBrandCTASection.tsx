import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, FileText } from 'lucide-react';

export default function FinalBrandCTASection() {
  return (
    <section className="relative bg-[#071326] text-white py-12 sm:py-16 overflow-hidden select-none border-b border-slate-800">
      {/* Background Architectural Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#0052CC]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
            BRIXION BRICKS AND BLOCKS LLP
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase font-heading leading-tight"
        >
          <span style={{ color: '#ffffff' }} className="!text-white font-black drop-shadow-md">
            READY TO BUILD{' '}
          </span>
          <span className="bg-gradient-to-r from-[#00A3FF] via-[#38BDF8] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,163,255,0.6)]">
            WHAT'S NEXT?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-normal"
        >
          Get in touch with our sales &amp; technical support team for bulk fly ash brick orders, technical specifications, and site supply dispatch.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-[#0070f3] via-[#0085FF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_4px_15px_rgba(0,112,243,0.4)] flex items-center gap-2 transition-all duration-200 group"
          >
            <span>REQUEST AN ENQUIRY</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="tel:+919876543210"
            className="px-6 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 backdrop-blur-md shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>CONTACT SALES</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
