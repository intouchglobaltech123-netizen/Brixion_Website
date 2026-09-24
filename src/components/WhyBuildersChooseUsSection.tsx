import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sparkles, Factory, ShieldCheck } from 'lucide-react';
import { SectionContainer } from './ui/SectionContainer';
import { fadeUpCard, staggerCards } from './animations/variants';

const trustPillars = [
  {
    num: "01",
    title: "Consistent Dimensions",
    desc: "Uniform size and shape for easier, predictable masonry coursing.",
    icon: <Ruler className="w-5 h-5 text-[#090E1B]" />
  },
  {
    num: "02",
    title: "Smooth Finish",
    desc: "Designed for clean visible joint lines and reduced plaster coats.",
    icon: <Sparkles className="w-5 h-5 text-[#090E1B]" />
  },
  {
    num: "03",
    title: "Controlled Manufacturing",
    desc: "Produced through a controlled mixing, hydraulic pressing, and curing process.",
    icon: <Factory className="w-5 h-5 text-[#090E1B]" />
  },
  {
    num: "04",
    title: "Reliable Supply",
    desc: "Built to support residential, commercial, and industrial site requirements.",
    icon: <ShieldCheck className="w-5 h-5 text-[#090E1B]" />
  }
];

export default function WhyBuildersChooseUsSection() {
  return (
    <SectionContainer background="surface" id="why-builders-choose-us">
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1078ED]/10 border border-[#1078ED]/20 text-[#1078ED] font-mono text-xs font-bold uppercase tracking-wider"
          >
            <span>BUILT ON CONSISTENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-h2 text-[#090E1B] uppercase"
          >
            WHY BUILDERS <span className="text-[#1078ED]">CHOOSE US.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="body-base text-[#64748B] max-w-xl mx-auto font-medium"
          >
            Factual product characteristics and dependable manufacturing standards engineered for active construction requirements.
          </motion.p>
        </div>

        {/* 4 Clean Industrial Trust Cards */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustPillars.map((pillar) => (
            <motion.div
              key={pillar.num}
              variants={fadeUpCard}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#CBD5E1] hover:border-[#1078ED] rounded-[10px] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
            >
              {/* Blue Top Edge Animation Bar on Hover */}
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#1078ED] rounded-b-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_12px_#1078ED]" />

              <div className="space-y-4">
                {/* Header Icon + Monospace Number */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                  <div className="w-11 h-11 rounded-[8px] bg-[#F5F7FA] border border-[#CBD5E1] flex items-center justify-center text-[#090E1B] group-hover:border-[#1078ED]/40 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-sm font-mono font-bold text-[#64748B] group-hover:text-[#1078ED] transition-colors">
                    {pillar.num}
                  </span>
                </div>

                {/* Title (Aligned Fixed Min Height) */}
                <div className="min-h-[52px] flex items-center">
                  <h3 className="text-xl font-bold font-heading text-[#090E1B] group-hover:text-[#1078ED] transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                </div>

                {/* Factual Claim Description */}
                <p className="body-small text-[#64748B] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionContainer>
  );
}
