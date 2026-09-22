import React from 'react';
import { motion } from 'framer-motion';

const technicalDataRows = [
  { parameter: 'Product Name', specification: 'Fly Ash Bricks' },
  { parameter: 'Size', specification: '9 × 4.25 × 3 inches' },
  { parameter: 'Metric Size', specification: '228 × 108 × 76 mm' },
  { parameter: 'Approx. Unit Weight', specification: '3.25 kg per brick' },
  { parameter: 'Surface Finish', specification: 'Smooth Plane Face' },
  { parameter: 'Shape', specification: 'Uniform Rectangular Solid' },
  { parameter: 'Raw Materials', specification: 'Fly Ash, Portland Cement, Sand, Water' },
  { parameter: 'Firing Process', specification: 'No Firing Needed' },
  { parameter: 'Water Absorption', specification: 'Low compared to traditional clay bricks' },
  { parameter: 'Application', specification: 'General Construction Works' },
];

export default function ProductDataSection() {
  return (
    <section
      id="specifications-table"
      className="py-16 sm:py-24 bg-[#F5F6F8] text-[#20252D] border-y border-slate-200/80 overflow-hidden select-none"
      data-purpose="product-technical-data"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* SECTION HEADER & ACCENT */}
        <div className="text-center space-y-3 flex flex-col items-center">
          
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087BCE]/10 border border-[#087BCE]/25 text-xs font-mono font-bold text-[#087BCE] uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#087BCE] animate-pulse" />
            <span>TECHNICAL INFORMATION</span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142E67] tracking-tight font-heading uppercase"
          >
            PRODUCT DATA
          </motion.h2>

          {/* ACCENT LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="h-1 bg-[#087BCE] rounded-full my-1 shadow-[0_0_12px_rgba(8,123,206,0.4)]"
          />

          {/* SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#20252D]/80 max-w-xl mx-auto font-medium leading-relaxed"
          >
            Technical specifications of Brixion Fly Ash Bricks for general construction requirements.
          </motion.p>
        </div>

        {/* TABLE CONTAINER — No animation, fixed box */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(20,46,103,0.06)] relative">
          {/* Top Blue Accent Border Line */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#087BCE] via-[#38BDF8] to-[#087BCE]" />

          {/* Table Wrapper */}
          <div className="overflow-x-auto relative">
            
            {/* Left Edge Blue Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#087BCE] via-[#0070F3] to-[#38BDF8] z-10 pointer-events-none" />

            <table className="w-full text-left border-collapse min-w-[540px]">
              
              {/* TABLE HEADER */}
              <thead>
                <tr className="bg-gradient-to-r from-[#142E67] via-[#1A3A7E] to-[#142E67] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider select-none">
                  <th className="py-3.5 px-6 sm:px-8 w-[35%] font-extrabold text-white tracking-widest font-heading border-b border-white/10">
                    Parameter
                  </th>
                  <th className="py-3.5 px-6 sm:px-8 w-[65%] font-extrabold text-white tracking-widest font-heading border-b border-white/10">
                    Specification
                  </th>
                </tr>
              </thead>

              {/* TABLE ROWS */}
              <tbody className="divide-y divide-slate-200/80 text-sm">
                {technicalDataRows.map((row, idx) => {
                  const isEven = idx % 2 === 1;
                  return (
                    <tr
                      key={row.parameter}
                      className={`group relative transition-colors duration-200 ease-out cursor-default ${
                        isEven ? 'bg-[#F9FAFC]' : 'bg-white'
                      } hover:bg-[#F0F7FD]`}
                    >
                      <td className="py-3 px-6 sm:px-8 font-semibold text-[#20252D] text-xs sm:text-sm relative">
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#087BCE] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out pointer-events-none shadow-[0_0_10px_rgba(8,123,206,0.8)]" />
                        {row.parameter}
                      </td>
                      <td className="py-3 px-6 sm:px-8 font-bold text-[#142E67] text-xs sm:text-sm font-heading tracking-tight">
                        {row.specification}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-xs text-[#20252D]/60 text-center font-normal italic pt-1"
        >
          &quot;Product information is based on the specifications provided by Brixion Bricks and Blocks LLP.&quot;
        </motion.p>

      </div>
    </section>
  );
}
