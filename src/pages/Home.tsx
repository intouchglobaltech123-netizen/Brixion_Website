import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { PageWrapper } from '../components/ui/PageWrapper';
import { fadeUp, staggerContainer } from '../components/animations/variants';

import OneProductFocusSection from '../components/OneProductFocusSection';
import WhyBuildersChooseUsSection from '../components/WhyBuildersChooseUsSection';
import ProductStageSection from '../components/ProductStageSection';
import ConstructionJourneySection from '../components/ConstructionJourneySection';
import BuiltIntoEverydaySection from '../components/BuiltIntoEverydaySection';
import FAQSection from '../components/FAQSection';
import FinalBrandCTASection from '../components/FinalBrandCTASection';

export default function Home() {
  return (
    <PageWrapper className="pt-0">
      
      {/* ========================================================================= */}
      {/* 01. HERO — BUILT FOR WHAT COMES NEXT.                                    */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center bg-[#071326] text-white overflow-hidden select-none border-b border-slate-800 pt-28 sm:pt-36 pb-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-100 contrast-105"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Directional gradient overlay to keep right side building visible */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(5, 12, 22, 0.92) 0%, rgba(5, 12, 22, 0.72) 45%, rgba(5, 12, 22, 0.25) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040A17] via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-md">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0070F3] animate-pulse shadow-[0_0_8px_#0070F3]" />
              <span className="text-[11px] sm:text-[12px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                BRIXION BRICKS AND BLOCKS LLP
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[64px] font-black !text-white tracking-tight leading-[1.08] uppercase font-heading drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
            >
              <span className="!text-white">BUILT FOR</span><br />
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0070F3] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,112,243,0.5)]">
                WHAT COMES NEXT.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-[17px] lg:text-[18px] !text-slate-100 leading-relaxed max-w-xl pt-1 font-normal opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Fly Ash Bricks manufactured with a focus on consistent shape, smooth finish, durability, and practical construction requirements.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="h-[44px] px-[22px] bg-gradient-to-r from-[#0070f3] via-[#0085FF] to-blue-600 hover:from-blue-600 hover:to-blue-700 !text-white font-bold text-[13px] sm:text-[14px] uppercase tracking-wider rounded-[8px] shadow-[0_8px_25px_rgba(0,112,243,0.5)] inline-flex items-center gap-2.5 transition-all duration-200 group border border-blue-400/30 active:scale-95"
              >
                <span>Explore Fly Ash Bricks</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="h-[44px] px-[22px] bg-slate-900/90 hover:bg-slate-800 !text-slate-100 border border-slate-600/80 font-bold text-[13px] sm:text-[14px] uppercase tracking-wider rounded-[8px] transition-all duration-200 backdrop-blur-md shadow-md inline-flex items-center justify-center active:scale-95"
              >
                <span>Talk to Our Team</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. ONE PRODUCT. CLEAR FOCUS.                                             */}
      {/* ========================================================================= */}
      <OneProductFocusSection />

      {/* ========================================================================= */}
      {/* 03. WHY BUILDERS CHOOSE US (FACTUAL TRUST PILLARS)                        */}
      {/* ========================================================================= */}
      <WhyBuildersChooseUsSection />

      {/* ========================================================================= */}
      {/* 03. PRODUCT STAGE                                                         */}
      {/* ========================================================================= */}
      <ProductStageSection />

      {/* ========================================================================= */}
      {/* 04. THE CONSTRUCTION JOURNEY                                              */}
      {/* ========================================================================= */}
      <ConstructionJourneySection />

      {/* ========================================================================= */}
      {/* 05. BUILT INTO THE EVERYDAY                                               */}
      {/* ========================================================================= */}
      <BuiltIntoEverydaySection />

      {/* ========================================================================= */}
      {/* FAQ — QUESTIONS BEFORE YOU BUILD?                                         */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 06. FINAL BRAND CTA                                                       */}
      {/* ========================================================================= */}
      <FinalBrandCTASection />

    </PageWrapper>
  );
}
