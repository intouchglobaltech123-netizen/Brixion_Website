import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Ruler, Droplets, Sparkles, Layers, Eye } from 'lucide-react';
import { companyData } from '../data/company';

import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { fadeUp, staggerContainer } from '../components/animations/variants';

export default function Quality() {
  return (
    <PageWrapper className="pt-20">
      {/* ===== 1. QUALITY HERO ===== */}
      <section className="relative min-h-[45vh] flex items-center bg-[#0b0d12] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="accent">Precision in Every Detail</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-extrabold text-[#f5f6f8] tracking-tight"
            >
              Quality & Sustainability
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed"
            >
              Every Brixion fly ash brick is produced to deliver high strength, uniform geometric dimensions, low water absorption, and a smooth surface finish.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. BROCHURE QUALITY PARAMETERS ===== */}
      <SectionContainer background="surface">
        <SectionHeading
          subtitle="Brochure Confirmed Attributes"
          title="Core Performance Pillars"
          description="Strict adherence to quality attributes detailed in the official Brixion company brochure."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.specialities.map((item) => (
            <Card key={item} className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d9532f] shrink-0" />
                <h3 className="text-base font-bold text-[#f5f6f8]">{item}</h3>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Brochure verified attribute providing dependable masonry performance without unnecessary material waste.
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* ===== 3. TECHNICAL INSPECTION & SCANNING EFFECT ===== */}
      <SectionContainer background="deep">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="accent">Inspection Protocol</Badge>
            <h2 className="text-3xl font-bold text-[#f5f6f8]">
              Uniform Size, Smooth Finish, Zero Firing
            </h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Standardization in masonry size means reduced plastering costs, less mortar usage, and uniform wall alignments for construction contractors and engineers.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151c] border border-white/10">
                <Ruler className="w-5 h-5 text-[#d9532f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5f6f8]">Uniform Shape & Size</h4>
                  <p className="text-xs text-[#94a3b8]">Precision hydraulic molds eliminate irregular shapes common in manual clay brick baking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151c] border border-white/10">
                <Droplets className="w-5 h-5 text-[#d9532f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5f6f8]">Low Water Absorption</h4>
                  <p className="text-xs text-[#94a3b8]">Brochure confirmed low absorption resists dampness penetration in finished masonry walls.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151c] border border-white/10">
                <Sparkles className="w-5 h-5 text-[#d9532f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5f6f8]">Smooth Surface Finish</h4>
                  <p className="text-xs text-[#94a3b8]">Directly lowers cement plastering thickness requirements for interior and exterior walls.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SVG/CSS Scanning Inspection Diagram */}
          <div className="lg:col-span-5 bg-[#12151c] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
            <div className="relative w-48 h-48 rounded-full border-2 border-dashed border-[#d9532f]/40 flex items-center justify-center">
              {/* Animated Scanning Circle Line */}
              <div className="absolute inset-2 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '12s' }} />
              
              <div className="text-center space-y-1">
                <Eye className="w-8 h-8 text-[#d9532f] mx-auto mb-1" />
                <span className="font-mono text-xs font-bold text-[#f5f6f8] block">BRIXION QC</span>
                <span className="text-[10px] font-mono text-[#94a3b8]">100% Visual & Dimensional Check</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageWrapper>
  );
}
