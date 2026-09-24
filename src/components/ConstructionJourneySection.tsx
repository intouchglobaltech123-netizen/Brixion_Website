import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ArrowDown } from 'lucide-react';

interface JourneyStep {
  num: string;
  stage: string;
  subTitle: string;
  image: string;
  alt: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    num: "01",
    stage: "MATERIAL",
    subTitle: "Raw Materials",
    image: "/assets/journey-material.jpg",
    alt: "Raw Fly Ash mineral texture",
    description: "The foundation of every Fly Ash Brick begins with its constituent materials."
  },
  {
    num: "02",
    stage: "BRICK",
    subTitle: "Precision Unit",
    image: "/assets/journey-brick.jpg",
    alt: "Clean Fly Ash Brick product photograph",
    description: "Formed into a consistent rectangular construction unit ready for use."
  },
  {
    num: "03",
    stage: "MASONRY",
    subTitle: "Site Installation",
    image: "/assets/journey-masonry.jpg",
    alt: "Mason laying fly ash bricks with mortar",
    description: "Individual bricks come together course by course to create a wall."
  },
  {
    num: "04",
    stage: "WALL",
    subTitle: "Structural Wall",
    image: "/assets/flyash-wall-construction.jpg",
    alt: "Finished masonry wall with clean joint lines",
    description: "The material becomes part of the structure taking shape on site."
  },
  {
    num: "05",
    stage: "SPACE",
    subTitle: "Built Structure",
    image: "/assets/app-commercial.jpg",
    alt: "Completed modern architectural structure",
    description: "Construction ultimately becomes the spaces where people live, work, and build."
  }
];

export default function ConstructionJourneySection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isArrowShooting, setIsArrowShooting] = useState<boolean>(false);

  // Auto-sequence progression timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setIsArrowShooting(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % journeySteps.length);
        setIsArrowShooting(false);
      }, 450);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepClick = (index: number) => {
    setIsArrowShooting(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsArrowShooting(false);
    }, 200);
    setIsPlaying(false);
  };

  return (
    <section 
      className="py-24 lg:py-[120px] bg-[#F5F7FA] text-[#111827] border-b border-[#E5E7EB] overflow-hidden select-none relative" 
      id="construction-journey"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1078ED]/10 border border-[#1078ED]/20 text-[#1078ED] font-mono text-xs font-bold uppercase tracking-wider"
          >
            <span>CONSTRUCTION SEQUENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-h2 text-[#111827] uppercase"
          >
            FROM MATERIAL <span className="text-[#1078ED]">TO STRUCTURE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-base text-[#64748B] max-w-xl mx-auto font-medium"
          >
            A construction material becomes part of something larger. Follow the journey from the brick itself to the spaces built around it.
          </motion.p>
        </div>

        {/* 5 EQUAL-SIZED STAGE CARDS GRID + ANIMATION */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative items-stretch"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {journeySteps.map((step, idx) => {
            const isRevealed = idx <= activeStep;
            const isCurrent = activeStep === idx;
            const isLast = idx === journeySteps.length - 1;

            return (
              <div key={step.num} className="relative flex flex-col">
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.02 : 1,
                    y: isCurrent ? -4 : 0,
                    opacity: isRevealed ? 1 : 0.85,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 22,
                  }}
                  onClick={() => handleStepClick(idx)}
                  className={`group relative flex flex-col justify-between h-full min-h-[360px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isCurrent
                      ? 'bg-white border-2 border-[#1078ED] ring-4 ring-[#1078ED]/20 shadow-[0_16px_36px_rgba(16,120,237,0.25)] z-30'
                      : isRevealed
                      ? 'bg-white border border-[#CBD5E1] hover:border-[#1078ED]/60 shadow-xs z-10'
                      : 'bg-white border border-[#CBD5E1]/80 shadow-xs hover:border-[#1078ED]/40 z-10'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full bg-[#090E1B] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isCurrent ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                    />

                    {/* Step Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-[#090E1B]/90 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs border border-white/10 flex items-center gap-1.5 shadow-sm z-20">
                      <span className={isCurrent ? 'text-[#35C8F2] font-black' : 'text-slate-300'}>
                        {step.num}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span>{step.stage}</span>
                    </div>

                    {/* Current Stage OPEN Badge */}
                    {isCurrent && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-3 right-3 bg-[#1078ED] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md z-20"
                      >
                        <Sparkles className="w-3 h-3 text-[#35C8F2]" />
                        <span>OPEN</span>
                      </motion.div>
                    )}

                  </div>

                  {/* Card Text Content */}
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-2.5 bg-white">
                    <div>
                      <h3 className={`text-base font-extrabold font-heading tracking-tight transition-colors ${
                        isCurrent ? 'text-[#1078ED]' : 'text-[#111827]'
                      }`}>
                        {step.stage}
                      </h3>
                      <span className={`text-[11px] font-mono font-semibold block mb-1 ${
                        isCurrent ? 'text-[#1078ED]' : 'text-[#64748B]'
                      }`}>
                        {step.subTitle}
                      </span>
                      <p className="text-xs leading-relaxed font-normal text-[#64748B]">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Progress Pill */}
                    <div className="pt-2">
                      <div className="w-full h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden relative">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#1078ED] to-[#35C8F2] rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: isRevealed ? '100%' : '0%' }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Connector Arrow */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center py-2 bg-[#F5F6F8] text-[#1078ED]">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}
                </motion.div>

                {/* Animated Flying Arrow Laser Beam when hitting next step */}
                {isCurrent && !isLast && isArrowShooting && (
                  <motion.div
                    initial={{ x: 0, opacity: 0, scale: 0.8 }}
                    animate={{ x: [0, 90, 140], opacity: [0, 1, 0], scale: [0.8, 1.4, 0.6] }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 z-50 items-center justify-center pointer-events-none"
                  >
                    <div className="px-3 py-1 rounded-full bg-[#1078ED] text-white shadow-[0_0_20px_#1078ED] flex items-center gap-1 text-xs font-mono font-bold">
                      <Zap className="w-4 h-4 text-yellow-300 animate-spin" />
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


