import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { manufacturingData } from '../data/manufacturing';

import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { fadeUp, staggerContainer } from '../components/animations/variants';

const stepIcons = [
  <Layers className="w-6 h-6 text-[#d9532f]" key="layers" />,
  <Cpu className="w-6 h-6 text-[#d9532f]" key="cpu" />,
  <Droplets className="w-6 h-6 text-[#d9532f]" key="droplets" />,
  <CheckCircle2 className="w-6 h-6 text-[#d9532f]" key="check" />,
];

export default function Manufacturing() {
  return (
    <PageWrapper className="pt-20">
      {/* ===== 1. MANUFACTURING HERO ===== */}
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
              <Badge variant="accent">From Material to Form</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-extrabold text-[#f5f6f8] tracking-tight"
            >
              {manufacturingData.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed"
            >
              {manufacturingData.summary}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. PROCESS TIMELINE ===== */}
      <SectionContainer background="surface">
        <SectionHeading
          subtitle="Brochure Workflow"
          title="Automated 4-Stage Production Cycle"
          description="Every brick is produced through mechanized batching, hydraulic pressure molding, and systematic water curing."
          align="center"
        />

        {/* Spacious Responsive Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative pt-4">
          {manufacturingData.steps.map((step, idx) => (
            <div key={step.stepNumber} className="relative flex flex-col justify-between">
              <Card className="h-full space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-4xl font-black text-[#d9532f] font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#1a1e27] border border-white/10 flex items-center justify-center">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#f5f6f8]">{step.title}</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">{step.description}</p>
              </Card>

              {/* Step indicator arrow for desktop */}
              {idx < manufacturingData.steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/20 text-xl font-bold z-20">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ===== 3. BROCHURE NO-FIRING BENEFIT ===== */}
      <SectionContainer background="deep">
        <div className="max-w-5xl mx-auto bg-[#12151c] border border-white/10 rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <Badge variant="accent">Environmental Advantage</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f6f8]">
              Hydraulically Compacted. Produced Without Firing.
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              As printed in our brochure: Fly ash bricks are strong, durable, and produced without firing, reducing environmental impact compared to traditional clay brick kilns.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Link to="/contact">
              <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Contact Sales Desk
              </Button>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </PageWrapper>
  );
}
