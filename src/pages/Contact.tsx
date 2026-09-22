import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MapPin, Clock, Send, CheckCircle2,
  Leaf, ShieldCheck, User, Building2, Mail, MessageSquare,
  FileText, ArrowRight, Package, Layers
} from 'lucide-react';
import { contactData } from '../data/contact';
import { PageWrapper } from '../components/ui/PageWrapper';
import { fadeUp, staggerContainer } from '../components/animations/variants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    projectType: 'Residential Construction',
    requiredQuantity: '5,000 - 10,000 Bricks',
    deliveryLocation: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.deliveryLocation.trim()) errs.deliveryLocation = 'Please specify delivery location';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <PageWrapper className="min-h-screen bg-white text-slate-900 antialiased flex items-center justify-center p-2 sm:p-4 lg:p-6 pt-32 sm:pt-36 lg:pt-40 pb-16">
      {/* ================================================================= */}
      {/* MAIN HERO / CONTACT SECTION — COMPACT ZOOMED-OUT STITCH SPEC     */}
      {/* ================================================================= */}
      <main
        className="relative w-full max-w-[1240px] overflow-hidden rounded-xl md:rounded-3xl shadow-2xl bg-slate-900 border border-slate-700/40"
        data-purpose="main-layout-wrapper"
      >
        {/* Background Yard Context Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none" data-purpose="background-scenery">
          <img
            alt="Stacks of fly ash bricks in outdoor factory yard under bright daytime sky"
            className="w-full h-full object-cover object-center filter contrast-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCX073sQ5Vv4HDwh0BXgzRAeZ-cS_kep42m6TFc0uThW-r0FoprL7cZq0Yq8UzHt39vajcgPkcpYEKxzydwB1XB1hexS1k9WRAihj0GwlVEQiLUXAuQ96gIFnioE7lLHApoapbHZwhDiO35NAouysT02nBGy5AZcOc3iqr3Kh7GZ02JgShvxg5y03-GcaRe7z3XOGQ-d5TJ4pp71QBo5OOaFcKIANbg2EtTVfdTJhjshTaBJ1BK11MjA"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-7 lg:p-9 items-start">
          
          {/* ============================================================= */}
          {/* LEFT COLUMN: HERO DETAILS & CONTACT CARDS                     */}
          {/* ============================================================= */}
          <section className="lg:col-span-7 flex flex-col justify-between space-y-6" data-purpose="hero-details">
            {/* Header Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Tag Header */}
              <motion.div variants={fadeUp} className="flex items-center space-x-2 text-[11px] font-bold tracking-widest text-slate-300 uppercase mb-2">
                <span className="w-6 h-[2px] bg-blue-500 rounded-full inline-block" />
                <span>CONTACT US</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] mb-2">
                <span style={{ color: '#ffffff' }} className="!text-white font-black drop-shadow-md">
                  Get in Touch
                </span>{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 drop-shadow-sm">
                  Let’s Build Something Stronger
                </span>
              </motion.h1>

              {/* Subtitle Description */}
              <motion.p variants={fadeUp} className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                Have a requirement for Fly Ash Bricks? Connect with our team for product enquiries and construction requirements.
              </motion.p>
            </motion.div>

            {/* 3 Contact Cards (Glassmorphism) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" data-purpose="contact-cards-group">
              {/* Card 1: Call Us */}
              <div className="glass-card rounded-xl p-3.5 flex flex-col justify-between transition duration-200 hover:border-blue-400/40 hover:-translate-y-0.5">
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-2 shadow-md shadow-blue-600/40">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">Call Us</h3>
                  <div className="mt-1 font-bold text-white text-xs sm:text-sm leading-snug">
                    <p>93630 12813</p>
                    <p>93619 23622</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2.5 pt-1.5 border-t border-white/10 leading-tight">
                  Speak directly with our team for enquiries.
                </p>
              </div>

              {/* Card 2: Visit Us */}
              <a 
                href="https://www.google.com/maps/place/Brixion+Bricks+and+Blocks+LLP/@11.0900604,77.0997416,17z/data=!4m6!3m5!1s0x3ba8f90078ca0a8f:0xb291396aedf5a350!8m2!3d11.0899832!4d77.1022949!16s%2Fg%2F11z9rkf5y7?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-3.5 flex flex-col justify-between transition duration-200 hover:border-blue-400/60 hover:-translate-y-0.5 group cursor-pointer block"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-2 shadow-md shadow-blue-600/40 group-hover:scale-110 transition-transform">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-[11px] font-medium text-slate-300 uppercase tracking-wider group-hover:text-blue-300 transition-colors">Visit Us</h3>
                  <p className="mt-1 font-semibold text-white text-[11px] leading-snug">
                    Muthalipalayam, Arasur, Coimbatore, <br />
                    Tamil Nadu – 641 407
                  </p>
                </div>
                <p className="text-[10px] text-slate-400 mt-2.5 pt-1.5 border-t border-white/10 leading-tight flex items-center justify-between">
                  <span>Our manufacturing location</span>
                  <span className="text-blue-400 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                </p>
              </a>

              {/* Card 3: Working Hours */}
              <div className="glass-card rounded-xl p-3.5 flex flex-col justify-between transition duration-200 hover:border-blue-400/40 hover:-translate-y-0.5">
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-2 shadow-md shadow-blue-600/40">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">Working Hours</h3>
                  <p className="mt-1 font-bold text-white text-xs">
                    Monday – Saturday
                  </p>
                  <p className="text-[11px] font-semibold text-blue-300">
                    8:00 AM – 7:00 PM
                  </p>
                </div>
                <p className="text-[10px] text-slate-400 mt-2.5 pt-1.5 border-t border-white/10 leading-tight">
                  We’re here to assist you.
                </p>
              </div>
            </div>

            {/* Action Buttons (Call Now / Get Directions) */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <a
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-blue-600/30 gap-2"
                href="tel:9363012813"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
                <span className="text-xs">→</span>
              </a>
              <a
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl glass-btn text-white font-bold text-xs tracking-wider uppercase transition gap-2 hover:border-blue-400/60"
                href="https://www.google.com/maps/place/Brixion+Bricks+and+Blocks+LLP/@11.0900604,77.0997416,17z/data=!4m6!3m5!1s0x3ba8f90078ca0a8f:0xb291396aedf5a350!8m2!3d11.0899832!4d77.1022949!16s%2Fg%2F11z9rkf5y7?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Get Directions</span>
                <span className="text-xs">→</span>
              </a>
            </div>

            {/* Fly Ash Stamped Brick Showcase Graphic */}
            <div className="relative pt-3 pb-1" data-purpose="stamped-brick-showcase">
              <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-slate-700/40 bg-slate-900/60 shadow-xl p-4 flex items-center justify-between backdrop-blur-md">
                <div className="relative z-10 text-left uppercase tracking-wider font-extrabold text-slate-200 select-none">
                  <p className="text-[10px] tracking-widest font-bold text-blue-400 mb-0.5">ENGINEERED STRENGTH</p>
                  <p className="text-lg sm:text-xl font-black text-white tracking-wide leading-none mb-1 drop-shadow">STRONGER STRUCTURES</p>
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider mb-0.5">SUSTAINABLE BUILD</p>
                  <p className="text-base sm:text-lg font-black text-slate-300 tracking-wide leading-none">BRIGHTER TOMORROWS</p>
                </div>
              </div>
            </div>

            {/* Bottom Feature Badges & Sustainable Motto */}
            <div className="pt-3 border-t border-slate-700/60" data-purpose="feature-badges">
              <div className="grid grid-cols-3 gap-2.5 text-left">
                {/* Leaf Eco */}
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase text-slate-200 leading-tight">ECO-FRIENDLY</p>
                    <p className="text-[9px] text-slate-400 font-semibold tracking-wider">CONSTRUCTION</p>
                  </div>
                </div>

                {/* Shield Durable */}
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase text-slate-200 leading-tight">STRONG</p>
                    <p className="text-[9px] text-slate-400 font-semibold tracking-wider">&amp; DURABLE</p>
                  </div>
                </div>

                {/* Reliable Supply */}
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase text-slate-200 leading-tight">RELIABLE</p>
                    <p className="text-[9px] text-slate-400 font-semibold tracking-wider">SUPPLY</p>
                  </div>
                </div>
              </div>

              {/* Bottom tagline with line */}
              <div className="flex items-center space-x-2.5 mt-3 text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                <span className="w-10 h-[1px] bg-slate-600" />
                <span>FLY ASH BRICKS FOR A SUSTAINABLE TOMORROW</span>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* RIGHT COLUMN: FLOATING FORM & BOTTOM CTA BANNER               */}
          {/* ============================================================= */}
          <section className="lg:col-span-5 flex flex-col space-y-4" data-purpose="enquiry-card-section">
            {/* White Floating Form Card */}
            <div
              className="relative bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-100"
              data-purpose="contact-form-card"
            >
              {/* Realistic 3D Fly Ash Bricks Graphic Overlay (Top-Right) */}
              <div className="absolute top-3 right-3 w-28 sm:w-32 pointer-events-none select-none z-10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqIzdduoW_r6nwl1Q3ZSbYCD1kA0oPo-a-Zm9igJBdutCcEOK9I1jiuKSiFzP3zY7NMpL3Fo1AW_1ptXPS_CssRwkwCrVeIqefTrhT6mqANdsyW-UoGGqsDQ7OVejcg3TPKVqYykCZ91BgB8y_M6sWX8HNVEEL9ZcEGxlr5jeh26_4vww_jgck55lLV8MDMlRoxCA-RvVk27uG6KybQ0LaZvfyleBvgxrxxP7CxY4MGC3YLoOIFbHAM_8rC39EtdHuXw"
                  alt="Fly Ash Bricks"
                  className="w-full h-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Form Header */}
              <div className="pr-24">
                <div className="flex items-center space-x-1.5 text-[10px] font-extrabold text-blue-600 tracking-wider uppercase mb-0.5">
                  <span>PROJECT ENQUIRY</span>
                  <span className="w-6 h-[2px] bg-blue-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Send Your Brick Requirement
                </h2>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed sm:max-w-sm">
                  Our Coimbatore supply desk will review your quantity requirements and provide a direct delivery quotation.
                </p>
              </div>

              {/* Interactive Form */}
              {status === 'success' ? (
                <div className="mt-4 p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2.5 text-emerald-800">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Enquiry Recorded Successfully!</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your requirement has been submitted. We will contact you shortly at <strong>+91 {formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        company: '',
                        projectType: 'Residential Construction',
                        requiredQuantity: '5,000 - 10,000 Bricks',
                        deliveryLocation: '',
                        message: '',
                      });
                    }}
                    className="w-full py-2 px-3 bg-blue-700 text-white rounded-lg text-[11px] uppercase font-bold tracking-wider hover:bg-blue-600 transition-colors mt-1"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="mt-4 space-y-3" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="full_name">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-3.5 h-3.5" />
                        </span>
                        <input
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition outline-none"
                          id="full_name"
                          placeholder="e.g. Ramesh Kumar"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      {errors.name && <p className="text-red-600 text-[9px] mt-0.5 font-semibold">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="phone_number">
                        Phone Number <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-3.5 h-3.5" />
                        </span>
                        <input
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition outline-none"
                          id="phone_number"
                          placeholder="e.g. 93630 12813"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      {errors.phone && <p className="text-red-600 text-[9px] mt-0.5 font-semibold">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Row 2: Company / Organization & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="company_name">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                          <Building2 className="w-3.5 h-3.5" />
                        </span>
                        <input
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition outline-none"
                          id="company_name"
                          placeholder="e.g. Kumar Builders"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="project_type">
                        Project Type
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                          <Layers className="w-3.5 h-3.5" />
                        </span>
                        <select
                          className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 transition outline-none appearance-none cursor-pointer"
                          id="project_type"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        >
                          <option>Residential Construction</option>
                          <option>Commercial Complex</option>
                          <option>Industrial Warehouse</option>
                          <option>Compound Wall / Boundary</option>
                          <option>Government Infrastructure</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Estimated Quantity & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="brick_quantity">
                        Estimated Quantity
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                          <Package className="w-3.5 h-3.5" />
                        </span>
                        <select
                          className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 transition outline-none appearance-none cursor-pointer"
                          id="brick_quantity"
                          value={formData.requiredQuantity}
                          onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                        >
                          <option>5,000 - 10,000 Bricks</option>
                          <option>10,000 - 25,000 Bricks</option>
                          <option>25,000 - 50,000 Bricks</option>
                          <option>50,000+ Bricks (Bulk Supply)</option>
                          <option>Sample Requirement</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="email_address">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-3.5 h-3.5" />
                        </span>
                        <input
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition outline-none"
                          id="email_address"
                          placeholder="e.g. name@company.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      {errors.email && <p className="text-red-600 text-[9px] mt-0.5 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 4: Delivery Location & Requirements */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="delivery_location">
                      Delivery Location &amp; Requirements <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                        <FileText className="w-3.5 h-3.5" />
                      </span>
                      <input
                        className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition outline-none"
                        id="delivery_location"
                        placeholder="Specify your construction site delivery address and timeline..."
                        type="text"
                        value={formData.deliveryLocation}
                        onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      />
                    </div>
                    {errors.deliveryLocation && <p className="text-red-600 text-[9px] mt-0.5 font-semibold">{errors.deliveryLocation}</p>}
                  </div>

                  {/* Row 5: Additional Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5" htmlFor="additional_message">
                      Additional Message
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </span>
                      <input
                        className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition outline-none"
                        id="additional_message"
                        placeholder="Any specific requirements or questions? (optional)"
                        type="text"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="w-full mt-1.5 py-2.5 px-5 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-blue-700/30 cursor-pointer"
                    type="submit"
                    disabled={status === 'loading'}
                  >
                    <Send className="w-3.5 h-3.5 transform -rotate-45 -mt-0.5" />
                    <span>{status === 'loading' ? 'Submitting...' : 'SUBMIT PROJECT ENQUIRY'}</span>
                    <span className="text-xs">→</span>
                  </button>

                  {/* Reassurance Note */}
                  <p className="text-center text-[10px] text-slate-400 pt-0.5">
                    We will get in touch with you shortly.
                  </p>
                </form>
              )}
            </div>

            {/* Bottom Banner Card: "Ready To Build?" */}
            <div
              className="relative bg-white rounded-xl p-2.5 sm:p-3.5 shadow-xl border border-slate-100 flex items-center justify-between overflow-hidden group transition duration-300 hover:shadow-2xl"
              data-purpose="bottom-action-banner"
            >
              {/* Left blueprint preview thumbnail */}
              <div className="flex items-center space-x-3">
                <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-blue-50 border border-slate-200">
                  <img
                    alt="Architectural blueprint and hard hat"
                    className="w-full h-full object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHGjEp8Sr3sjyikG83x5Bue3Ozxtm5WHpy_kphcSFvn4QINDH-02G4C5Eiv-G8oFQ36cBDnBLQ9UaKGtGoAntuWds8v3SxJkmG82roOpbMjhZqVYh5YtGLkrQW0AlSW6G6KuUhlk6Bke6cEdP0Wk9U2Uz-Swx4kB2pucQOSnCVtUqPfT1WgugOGvVv2uCaBv9ss_g9yq_Ai4XtEEDgvOBN6ay26uaWo-h8KA8iXPD4nQRhjTNkvwvvYlN7wxxDtgRhQMM"
                  />
                </div>
                {/* Banner Text */}
                <div>
                  <div className="flex items-center space-x-1 text-[9px] font-extrabold text-blue-600 uppercase tracking-wider">
                    <span className="w-3.5 h-[1.5px] bg-blue-600" />
                    <span>READY TO BUILD?</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug">
                    Quality Bricks for <br className="hidden sm:inline" />Stronger Communities
                  </h3>
                </div>
              </div>

              {/* Circular Blue Arrow Button */}
              <a
                aria-label="Explore Stronger Communities"
                className="w-9 h-9 rounded-full bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-md shadow-blue-700/30 ml-2"
                href="tel:9363012813"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

        </div>
      </main>
    </PageWrapper>
  );
}
