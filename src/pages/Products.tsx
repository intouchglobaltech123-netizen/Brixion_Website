import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ruler,
  Box,
  Droplets,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Flame,
  DollarSign,
  Building2,
  Home as HomeIcon,
  Factory,
  Landmark,
  ArrowUpRight,
  Check,
  ChevronDown
} from 'lucide-react';
import { primaryProduct, brochureComparisonMatrix } from '../data/products';
import { companyData } from '../data/company';

import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '../components/animations/variants';
import ProductDataSection from '../components/ProductDataSection';
import MaterialComparisonSection from '../components/MaterialComparisonSection';

// 5 Dedicated Product Photos
const productPhotos = [
  {
    id: 'main',
    src: '/assets/flyash-main-product.jpg',
    thumb: '/assets/flyash-main-product.jpg',
    title: 'Precision Stacked Arrangement',
    alt: 'Premium Fly Ash Bricks neatly stacked',
    desc: 'Uniform grey cement bricks with sharp 90-degree edges, photographed under natural industrial daylight.',
    tag: 'Main Specimen'
  },
  {
    id: 'closeup',
    src: '/assets/flyash-texture-closeup.jpg',
    thumb: '/assets/flyash-texture-closeup.jpg',
    title: 'Surface Texture & Edge Quality',
    alt: 'Close-up texture of a Fly Ash Brick',
    desc: 'Fine concrete-grade aggregate texture, smooth plane face, and micro-dense compaction eliminating surface voids.',
    tag: 'Macro Texture'
  },
  {
    id: 'warehouse',
    src: '/assets/flyash-warehouse-stacked.jpg',
    thumb: '/assets/flyash-warehouse-stacked.jpg',
    title: 'Palletized Storage & Warehouse Alignment',
    alt: 'Uniform Fly Ash Bricks in a manufacturing stack',
    desc: 'High-volume production lot arranged on wooden pallets ready for secure truck dispatch and site delivery.',
    tag: 'Batch Supply'
  },
  {
    id: 'construction',
    src: '/assets/flyash-wall-construction.jpg',
    thumb: '/assets/flyash-wall-construction.jpg',
    title: 'Wall Construction & Masonry Coursing',
    alt: 'Fly Ash Bricks used in wall construction',
    desc: 'Partially built masonry wall demonstrating clean 10mm mortar joints, tight coursing alignment, and plumb stability.',
    tag: 'Site Application'
  },
  {
    id: 'technical',
    src: '/assets/flyash-technical-dimension.jpg',
    thumb: '/assets/flyash-technical-dimension.jpg',
    title: 'Technical Dimension Verification',
    alt: 'Fly Ash Brick product size detail',
    desc: 'Standard modular 9 × 4.25 × 3 inches (228 × 108 × 76 mm) dimension reference with ~3.25 kg unit weight.',
    tag: '9 × 4.25 × 3″'
  }
];

// 7 Brochure-Verified Product Benefits
const productBenefits = [
  {
    num: "01",
    title: "High Strength & Durability",
    desc: "Engineered for high compressive strength and dependable structural longevity.",
    icon: <ShieldCheck className="w-5 h-5 text-[#0052CC]" />
  },
  {
    num: "02",
    title: "Eco-Friendly Manufacturing",
    desc: "Produced with industrial fly ash by-products, conserving valuable agricultural topsoil.",
    icon: <Sparkles className="w-5 h-5 text-[#0052CC]" />
  },
  {
    num: "03",
    title: "Smooth Surface Finish",
    desc: "Smooth plane faces allow thinner plaster coats and clean visible joint lines.",
    icon: <Layers className="w-5 h-5 text-[#0052CC]" />
  },
  {
    num: "04",
    title: "Low Water Absorption",
    desc: "Brochure-listed low water absorption resists moisture infiltration and efflorescence.",
    icon: <Droplets className="w-5 h-5 text-[#0052CC]" />
  },
  {
    num: "05",
    title: "Uniform Size & Shape",
    desc: "Consistent 9 × 4.25 × 3″ modular dimensions ensure precise alignment during construction.",
    icon: <Ruler className="w-5 h-5 text-[#0052CC]" />
  },
  {
    num: "06",
    title: "Cost-Effective Construction",
    desc: "Reduces mortar joint thickness by 20%–25% and speeds up masonry erection.",
    icon: <DollarSign className="w-5 h-5 text-[#0052CC]" />
  },
  {
    num: "07",
    title: "No Firing Needed",
    desc: "Manufactured without kiln firing, completely eliminating carbon combustion emissions.",
    icon: <Flame className="w-5 h-5 text-[#0052CC]" />
  },
];

export default function Products() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const activePhoto = productPhotos[selectedPhotoIndex];

  return (
    <PageWrapper className="pt-20">
      {/* ========================================================================= */}
      {/* 1. SERVICES HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="relative bg-[#F1F3F6] border-b border-[#CBD5E1] overflow-hidden select-none" data-purpose="services-hero">
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Text & Buttons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-6"
            >
              {/* Label */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#E2E8F0] border border-[#CBD5E1]">
                <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                <span className="text-xs font-mono text-[#0052CC] uppercase font-bold tracking-wider">
                  OUR SERVICES
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C192E] tracking-tight leading-[1.12] font-heading"
              >
                ENGINEERED FOR<br />
                <span className="text-[#0052CC]">STRONGER FOUNDATIONS.</span>
              </motion.h1>

              {/* Content */}
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl font-medium"
              >
                Fly Ash Bricks manufactured for strength, uniformity, durability, and modern construction requirements.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const elem = document.getElementById('product-showcase');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary-blue text-xs uppercase tracking-wider font-bold py-3.5 px-6 inline-flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>EXPLORE SPECIFICATIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const elem = document.getElementById('material-comparison');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-outline-navy text-xs uppercase tracking-wider font-bold py-3.5 px-6 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>COMPARE MATERIALS</span>
                  <ArrowRight className="w-4 h-4 text-[#0052CC]" />
                </button>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-lg bg-[#0C192E] text-white hover:bg-[#0052CC] transition-colors text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 shadow-sm"
                >
                  <span>REQUEST AN ENQUIRY</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: New Wide Product-Focused Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#CBD5E1] shadow-2xl bg-white group">
                <img
                  src="/assets/services-hero-stockyard.jpg"
                  alt="Finished Fly Ash Bricks stacked neatly on wooden pallets in industrial stock yard"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LARGE PRODUCT SHOWCASE & INTERACTIVE GALLERY (SPLIT-SCREEN)            */}
      {/* ========================================================================= */}
      <SectionContainer background="surface" id="product-showcase">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Product Photo Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#CBD5E1] shadow-xl bg-white group">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#0C192E]">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="px-3 py-1.5 rounded bg-[#0C192E]/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-sm backdrop-blur-xs">
                    <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                    <span>{activePhoto.tag}</span>
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0C192E]/90 via-[#0C192E]/60 to-transparent text-white space-y-1">
                  <h4 className="text-sm font-bold text-white font-heading">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed line-clamp-2">
                    {activePhoto.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting Thumbnails Gallery (Clickable) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#64748B] uppercase">
                  Product Gallery ({productPhotos.length} Views)
                </span>
                <span className="text-[11px] font-mono text-[#0052CC] font-bold">
                  Select view to inspect
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {productPhotos.map((photo, idx) => {
                  const isSelected = selectedPhotoIndex === idx;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all group ${
                        isSelected
                          ? 'border-[#0052CC] ring-2 ring-[#0052CC]/40 scale-102 shadow-md'
                          : 'border-[#CBD5E1] hover:border-[#0052CC] opacity-80 hover:opacity-100'
                      }`}
                      aria-label={`View ${photo.title}`}
                    >
                      <img
                        src={photo.thumb}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#0052CC]/15 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Product Name, Description, Specifications & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#0052CC] uppercase tracking-wider block mb-1">
                CIVIL ENGINEERING SPECIFICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C192E] tracking-tight">
                Fly Ash Bricks
              </h2>
            </div>

            <p className="text-base text-[#334155] leading-relaxed">
              High-strength, eco-friendly fly ash bricks manufactured using fly ash, cement, sand, and water. Designed with a smooth finish, uniform shape, low water absorption, and dependable durability for modern construction.
            </p>

            {/* Product Specification Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                { label: "Size", val: "9 × 4.25 × 3 inches", icon: <Ruler className="w-4 h-4 text-[#0052CC]" /> },
                { label: "Approx. Weight", val: "3.25 kg per brick", icon: <Box className="w-4 h-4 text-[#0052CC]" /> },
                { label: "Finish", val: "Smooth Plane", icon: <Layers className="w-4 h-4 text-[#0052CC]" /> },
                { label: "Shape", val: "Uniform Modular", icon: <ShieldCheck className="w-4 h-4 text-[#0052CC]" /> },
                { label: "Product Type", val: "Fly Ash Bricks", icon: <Check className="w-4 h-4 text-[#0052CC]" /> },
                { label: "Water Absorption", val: "Low (Brochure Listed)", icon: <Droplets className="w-4 h-4 text-[#0052CC]" /> },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0052CC] transition-all shadow-xs"
                >
                  <div className="flex items-center gap-1.5 text-[#64748B] text-[11px] font-mono uppercase font-bold mb-1">
                    {spec.icon}
                    <span>{spec.label}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0C192E] block">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary-blue text-xs uppercase tracking-wider font-bold py-3.5 px-8 inline-flex items-center gap-2 shadow-sm"
              >
                <span>REQUEST A PRODUCT ENQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => {
                  const elem = document.getElementById('specifications-table');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-navy text-xs uppercase tracking-wider font-bold py-3.5 px-8 inline-flex items-center gap-2"
              >
                <span>VIEW PRODUCT DETAILS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================================= */}
      {/* 3. PRODUCT BENEFITS — PREMIUM                                             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] overflow-hidden select-none relative" id="product-benefits">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087BCE]/10 border border-[#087BCE]/25"
            >
              <span className="w-2 h-2 rounded-full bg-[#0052CC] animate-pulse" />
              <span className="text-xs font-mono text-[#0052CC] uppercase font-bold tracking-widest">
                PRODUCT BENEFITS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C192E] tracking-tight font-heading uppercase"
            >
              ENGINEERED BENEFITS FOR<br />
              <span className="text-[#0052CC]">MODERN CONSTRUCTION</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-medium"
            >
              Fly ash bricks offer a combination of strength, uniformity, smooth finish and practical construction benefits.
            </motion.p>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {productBenefits.map((b, idx) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-[#E2E8F0] hover:border-[#0052CC]/40 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-400 cursor-default"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[#0052CC]/20 group-hover:bg-[#0052CC] transition-colors duration-300" />

                {/* Top row: icon + number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0052CC]/10 border border-[#0052CC]/20 group-hover:bg-[#0052CC]/15 group-hover:border-[#0052CC]/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {b.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-[#0C192E]/8 group-hover:text-[#0052CC]/20 transition-colors duration-300 select-none">
                    {b.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0C192E] group-hover:text-[#0052CC] transition-colors duration-300 mb-2 leading-snug">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed transition-colors duration-300">
                  {b.desc}
                </p>

                {/* Bottom hover accent line */}
                <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#0052CC]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONSTRUCTION APPLICATIONS — PREMIUM                                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] overflow-hidden select-none relative" id="construction-applications">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-14 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087BCE]/10 border border-[#087BCE]/25"
            >
              <span className="w-2 h-2 rounded-full bg-[#0052CC] animate-pulse" />
              <span className="text-xs font-mono text-[#0052CC] uppercase font-bold tracking-widest">
                CONSTRUCTION APPLICATIONS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C192E] tracking-tight font-heading uppercase"
            >
              BUILT FOR DIFFERENT<br />
              <span className="text-[#0052CC]">
                CONSTRUCTION NEEDS
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-medium"
            >
              Fly Ash Bricks are suitable for general construction requirements across residential, commercial and industrial applications.
            </motion.p>

            {/* Animated accent line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#0052CC] to-transparent mx-auto"
            />
          </div>

          {/* 3 Application Cards — 100% Uniform Composition & Visual Treatment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: '01',
                tag: 'APPLICATION 01',
                title: 'RESIDENTIAL',
                desc: 'Built for everyday residential construction.',
                src: '/assets/app-residential.jpg',
                alt: 'Residential house under construction with grey fly ash brick masonry walls'
              },
              {
                num: '02',
                tag: 'APPLICATION 02',
                title: 'COMMERCIAL',
                desc: 'Built for high-capacity commercial developments.',
                src: '/assets/app-commercial.jpg',
                alt: 'Multi-storey commercial building under construction with brick masonry'
              },
              {
                num: '03',
                tag: 'APPLICATION 03',
                title: 'INDUSTRIAL',
                desc: 'Built for heavy-duty industrial facilities.',
                src: '/assets/app-industrial.jpg',
                alt: 'Industrial warehouse building with large brick masonry walls'
              }
            ].map((app, idx) => (
              <motion.div
                key={app.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative rounded-xl overflow-hidden bg-[#0C192E] border border-[#CBD5E1] hover:border-[#0052CC] shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/5] flex flex-col justify-end p-6 sm:p-7"
              >
                {/* Full-bleed Uniform Image */}
                <img
                  src={app.src}
                  alt={app.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Identical Uniform Gradient Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none" 
                  style={{ 
                    background: 'linear-gradient(to top, rgba(12, 25, 46, 0.95) 0%, rgba(12, 25, 46, 0.65) 45%, rgba(12, 25, 46, 0.15) 75%, transparent 100%)' 
                  }} 
                />

                {/* Number Badge — Top Right */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="text-xs font-mono font-bold text-white/80 bg-[#0C192E]/80 border border-white/15 px-2.5 py-1 rounded backdrop-blur-xs">
                    {app.num}
                  </span>
                </div>

                {/* Uniform Bottom Typography Content Position */}
                <div className="relative z-20 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest block">
                    {app.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold !text-white font-heading tracking-tight drop-shadow-md uppercase">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm !text-slate-200 leading-relaxed font-normal opacity-95">
                    {app.desc}
                  </p>
                </div>

                {/* Subtle Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0052CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNICAL INFORMATION / PRODUCT DATA SECTION                           */}
      {/* ========================================================================= */}
      <ProductDataSection />



      {/* ========================================================================= */}
      {/* 7. MATERIALS SIDE BY SIDE (SHOWROOM COMPARISON SECTION)                   */}
      {/* ========================================================================= */}
      <MaterialComparisonSection />
    </PageWrapper>
  );
}
