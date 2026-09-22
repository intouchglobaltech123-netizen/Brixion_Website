import React from 'react';
import { motion } from 'framer-motion';

const editorialPhotos = [
  {
    title: "Residential Masonry",
    subtitle: "Clean Joint Coursing",
    image: "/assets/app-residential.jpg",
    desc: "Fly Ash Bricks integrated into multi-story residential housing projects."
  },
  {
    title: "Commercial High-Rise",
    subtitle: "Structural Uniformity",
    image: "/assets/app-commercial.jpg",
    desc: "Precision modular bricks for high-capacity commercial developments."
  },
  {
    title: "Industrial Warehouses",
    subtitle: "Heavy-Duty Enclosures",
    image: "/assets/app-industrial.jpg",
    desc: "High compressive strength masonry walls for industrial logistics facilities."
  },
  {
    title: "Plumb Wall Coursing",
    subtitle: "Smooth Mortar Finish",
    image: "/assets/flyash-wall-construction.jpg",
    desc: "Uniform plane surfaces minimizing plaster thickness on active construction sites."
  }
];

export default function BuiltIntoEverydaySection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#CBD5E1] overflow-hidden select-none" id="everyday-built">
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
            BUILT INTO THE <span className="text-[#0052CC]">EVERYDAY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto font-medium"
          >
            A visual showcase of Brixion Fly Ash Bricks performing inside real-world residential, commercial, and industrial construction.
          </motion.p>
        </div>

        {/* 4-Card Editorial Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialPhotos.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0C192E] border border-[#CBD5E1] hover:border-[#0052CC] shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/5] flex flex-col justify-end p-6"
            >
              {/* Background Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C192E] via-[#0C192E]/60 to-transparent z-10" />

              {/* Text Content */}
              <div className="relative z-20 space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest block drop-shadow-sm">
                  {item.subtitle}
                </span>
                <h3 style={{ color: '#ffffff' }} className="text-xl font-black !text-white font-heading tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
                <p style={{ color: '#e2e8f0' }} className="text-xs !text-slate-200 leading-relaxed font-normal opacity-95 line-clamp-2 drop-shadow-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
