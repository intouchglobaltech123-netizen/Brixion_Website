import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  Factory,
  ArrowRight,
  Ruler,
  Scale,
  Building2,
  Truck,
  DollarSign
} from 'lucide-react';
import { companyData } from '../data/company';

import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '../components/animations/variants';

const brandValues = [
  {
    num: "01",
    title: 'QUALITY',
    desc: 'Consistent attention to product quality and finish.',
    icon: <Award className="w-6 h-6" />
  },
  {
    num: "02",
    title: 'STRENGTH',
    desc: 'Fly Ash Bricks designed for strong and durable construction.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    num: "03",
    title: 'CONSISTENCY',
    desc: 'Uniform dimensions and shape for dependable construction use.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    num: "04",
    title: 'RESPONSIBILITY',
    desc: 'A focus on responsible construction-material manufacturing.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    num: "05",
    title: 'RELIABILITY',
    desc: 'A dependable approach to product quality and customer requirements.',
    icon: <Factory className="w-6 h-6" />
  },
];

export default function About() {
  return (
    <PageWrapper className="pt-20">
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO                                                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] flex items-center bg-[#F1F3F6] border-b border-[#CBD5E1] overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-6"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#E2E8F0] border border-[#CBD5E1]">
                <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                <span className="text-xs font-mono text-[#0052CC] uppercase font-bold tracking-wider">
                  ABOUT BRIXION BRICKS AND BLOCKS LLP
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C192E] tracking-tight leading-[1.12] font-heading"
              >
                Building the Foundation<br />
                <span className="text-[#0052CC]">of Better Construction.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal"
              >
                Brixion Bricks and Blocks LLP is a construction-material manufacturer based in Coimbatore, Tamil Nadu, specializing in Fly Ash Bricks. We focus on producing bricks with consistent shape, smooth finish, strength, durability, and practical performance for construction requirements.
              </motion.p>
            </motion.div>

            {/* Right Photo Column (Uploaded Industrial Facility Image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#CBD5E1] shadow-xl bg-white group">
                <img
                  src="/assets/about-facility.jpg"
                  alt="Brixion Industrial Fly Ash Bricks Manufacturing Plant"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR FOCUS SECTION                                                      */}
      {/* ========================================================================= */}
      <SectionContainer background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E2E8F0] border border-[#CBD5E1]">
              <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
              <span className="text-xs font-mono text-[#0052CC] uppercase font-bold tracking-wider">
                OUR FOCUS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C192E] tracking-tight leading-[1.15] font-heading">
              Materials Shaped Around<br />
              <span className="text-[#0052CC]">Strength &amp; Consistency</span>
            </h2>

            <div className="h-1 w-16 bg-[#0052CC] rounded-full" />

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              Our focus is simple: manufacture Fly Ash Bricks that provide dependable quality and consistent dimensions for construction. From material preparation and forming to curing and finished-product handling, attention to consistency remains central to the product.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary-blue text-xs uppercase tracking-wider font-bold py-3.5 px-7 shadow-md">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Image: Larger Factory & Production Yard Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#CBD5E1] shadow-2xl bg-white group">
              <img
                src="/assets/about-focus.jpg"
                alt="Brixion Automated Hydraulic Pressing & Production Yard"
                className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>

        </div>
      </SectionContainer>

      {/* ========================================================================= */}
      {/* 3. PRODUCT IDENTITY SECTION                                               */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#CBD5E1] shadow-xl bg-[#F8FAFC] group">
                <img
                  src="/assets/about-product-identity.jpg"
                  alt="Brixion Precision Fly Ash Bricks Specimen"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
            </div>

            {/* Right Text & Specification Badges Column */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E2E8F0] border border-[#CBD5E1]">
                <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                <span className="text-xs font-mono text-[#0052CC] uppercase font-bold tracking-wider">
                  WHAT WE MANUFACTURE
                </span>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">
                  One Product. One Clear Focus.
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0C192E] tracking-tight uppercase font-heading">
                  FLY ASH BRICKS
                </h2>
              </div>

              <div className="h-1 w-16 bg-[#0052CC] rounded-full" />

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
                Brixion specializes in Fly Ash Bricks rather than presenting a broad range of unrelated masonry products. This focused approach allows the website and brand to clearly communicate what we manufacture and what customers can expect from our product.
              </p>

              {/* 4 Feature Specification Badges */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] text-[#0052CC] flex items-center justify-center shrink-0 shadow-xs">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">Dimensions</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0C192E] font-heading">9 × 4.25 × 3 inches</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] text-[#0052CC] flex items-center justify-center shrink-0 shadow-xs">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">Unit Weight</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0C192E] font-heading">Approx. 3.25 kg</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] text-[#0052CC] flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">Surface</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0C192E] font-heading">Smooth Finish</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] text-[#0052CC] flex items-center justify-center shrink-0 shadow-xs">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">Geometry</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0C192E] font-heading">Uniform Size &amp; Shape</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW WE WORK (From Materials to Finished Bricks Timeline)              */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#CBD5E1] select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#0052CC] uppercase">
              <span className="w-10 h-[1.5px] bg-[#0052CC]"></span>
              <span>HOW WE WORK</span>
              <span className="w-10 h-[1.5px] bg-[#0052CC]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C192E] tracking-tight font-heading">
              From Materials to <span className="text-[#092147] font-extrabold">Finished Bricks</span>
            </h2>
          </div>

          {/* 5-Step Process Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
            {[
              {
                num: '01',
                title: 'Material Preparation',
                desc: 'Carefully sourced raw materials are prepared for production.',
                img: '/assets/step-01-prep.jpg'
              },
              {
                num: '02',
                title: 'Mixing & Forming',
                desc: 'Materials are mixed to the required consistency and formed into bricks.',
                img: '/assets/step-02-mixing.jpg'
              },
              {
                num: '03',
                title: 'Compaction / Pressing',
                desc: 'The material is compacted under controlled pressure to ensure uniform shape and strength.',
                img: '/assets/step-03-pressing.jpg'
              },
              {
                num: '04',
                title: 'Curing',
                desc: 'Bricks are cured under controlled conditions to achieve durability and performance.',
                img: '/assets/step-04-curing.jpg'
              },
              {
                num: '05',
                title: 'Finished Fly Ash Bricks',
                desc: 'High-quality Fly Ash Bricks ready for construction.',
                img: '/assets/step-05-finished.png'
              }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-[#CBD5E1] rounded-2xl p-4 shadow-sm hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full space-y-3 relative group cursor-pointer"
              >
                
                {/* Animated Blue Arrow Button Connecting Boxes (for steps 1 to 4) */}
                {idx < 4 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4.5 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-gradient-to-r from-[#0052CC] to-[#0070F3] text-white items-center justify-center border-2 border-white shadow-lg pointer-events-none">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                )}

                {/* Header Badge & Title (Fixed min-height for identical title alignment) */}
                <div className="flex items-center gap-2.5 min-h-[44px]">
                  <span className="w-7 h-7 rounded-full bg-[#092147] group-hover:bg-[#0052CC] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300">
                    {step.num}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#092147] group-hover:text-[#0052CC] transition-colors duration-300 font-heading leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Vertical Image Container (100% Identical Height & Size) */}
                <div className="relative rounded-xl overflow-hidden border border-[#CBD5E1] shadow-xs bg-slate-50 h-64 sm:h-72 w-full shrink-0">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                </div>

                {/* Subtitle / Description (Fixed min-height for uniform card size) */}
                <p className="text-xs text-[#475569] group-hover:text-[#0C192E] transition-colors duration-300 leading-relaxed font-normal min-h-[56px] flex items-start">
                  {step.desc}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BRAND VALUES / OUR CORE PRINCIPLES SECTION                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#0052CC] uppercase">
              <span className="w-8 h-[1.5px] bg-[#0052CC]"></span>
              <span>OUR CORE PRINCIPLES</span>
              <span className="w-8 h-[1.5px] bg-[#0052CC]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C192E] tracking-tight font-heading">
              BRAND VALUES
            </h2>
          </div>

          {/* 5 Horizontal Cards Grid on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {brandValues.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white border border-[#CBD5E1] rounded-2xl p-5 shadow-xs hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Top Icon Box & Number */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0052CC] group-hover:bg-[#0052CC] group-hover:text-white group-hover:border-[#0052CC] flex items-center justify-center transition-colors duration-300 shadow-xs">
                      {v.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#0052CC] transition-colors">
                      {v.num}
                    </span>
                  </div>

                  {/* Navy Heading */}
                  <h3 className="text-lg font-extrabold text-[#0C192E] group-hover:text-[#0052CC] transition-colors font-heading tracking-tight">
                    {v.title}
                  </h3>

                  {/* Content Paragraph */}
                  <p className="text-xs text-[#475569] leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE BRIXION PILLARS                                             */}
      {/* ========================================================================= */}
      <SectionContainer background="surface">
        <SectionHeading
          subtitle="OFFICIAL BROCHURE PILLARS"
          title="WHY BUILD WITH BRIXION?"
          description="Six dependable pillars confirmed in our official company brochure supporting architects, contractors, and builders."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Premium Quality Bricks",
              icon: <Award className="w-5 h-5" />,
              desc: "Precision hydraulic pressing ensures sharp 90° edges and uniform smooth surface finish."
            },
            {
              title: "Strong and Durable",
              icon: <ShieldCheck className="w-5 h-5" />,
              desc: "Engineered to achieve 7.5 - 12 N/mm² compressive strength for high load-bearing capacity."
            },
            {
              title: "Suitable for All Construction Works",
              icon: <Building2 className="w-5 h-5" />,
              desc: "Versatile masonry units for load-bearing walls, high-rise partitions, and boundary structures."
            },
            {
              title: "Reliable Supply",
              icon: <Factory className="w-5 h-5" />,
              desc: "High-capacity automated plant producing 50,000 bricks daily for uninterrupted project supply."
            },
            {
              title: "Timely Delivery",
              icon: <Truck className="w-5 h-5" />,
              desc: "Dedicated plant fleet ensuring punctual, damage-free site deliveries across Tamil Nadu."
            },
            {
              title: "Competitive Pricing",
              icon: <DollarSign className="w-5 h-5" />,
              desc: "Direct manufacturer pricing providing 20-30% mortar savings and overall cost efficiency."
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border border-[#CBD5E1] hover:border-[#0052CC] rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0052CC] group-hover:bg-[#0052CC] group-hover:text-white group-hover:border-[#0052CC] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs">
                {pillar.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-extrabold text-[#0C192E] group-hover:text-[#0052CC] transition-colors duration-300 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* ========================================================================= */}
      {/* 7. QUALITY PROMISE / CLOSING SECTION (Directly before Footer)             */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-[#071326] text-white border-t border-slate-800 overflow-hidden select-none">
        {/* Dark Background Overlay with subtle plant facility depth */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about-facility.jpg"
            alt="Brixion Plant Depth Background"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-120 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B18] via-[#040B18]/90 to-[#040B18]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            
            {/* Left Headline & Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#0088ff] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                  QUALITY PROMISE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase font-heading">
                <span className="!text-white font-black drop-shadow-md">BUILT AROUND </span>
                <span className="text-[#0070f3] drop-shadow-[0_0_20px_rgba(0,112,243,0.6)]">CONSISTENCY.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal opacity-95">
                From product dimensions to surface finish, Brixion focuses on delivering Fly Ash Bricks suited to modern construction requirements.
              </p>
            </div>

            {/* Right Button */}
            <div className="lg:col-span-4 flex lg:justify-end pt-2 lg:pt-0">
              <Link
                to="/products"
                className="px-8 py-4 bg-gradient-to-r from-[#0070f3] via-[#0085FF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_8px_25px_rgba(0,112,243,0.5)] inline-flex items-center gap-3 transition-all duration-200 group active:scale-95 border border-blue-400/30"
              >
                <span>EXPLORE FLY ASH BRICKS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

