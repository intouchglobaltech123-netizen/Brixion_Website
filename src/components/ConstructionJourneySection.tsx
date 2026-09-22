import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Sparkles, Zap } from 'lucide-react';

interface JourneyStep {
  num: string;
  stage: string;
  subTitle: string;
  image: string;
  alt: string;
  description: string;
  metric: string;
  metricVal: string;
}

const journeySteps: JourneyStep[] = [
  {
    num: "01",
    stage: "MATERIAL",
    subTitle: "Raw Materials",
    image: "/assets/journey-material.jpg",
    alt: "Abstract close-up of raw Fly Ash Brick mineral texture",
    description: "The foundation of every Fly Ash Brick begins with its constituent materials.",
    metric: "Mixture Ratio",
    metricVal: "60% Fly Ash Mix"
  },
  {
    num: "02",
    stage: "BRICK",
    subTitle: "Precision Unit",
    image: "/assets/journey-brick.jpg",
    alt: "Clean specimen Fly Ash Brick product photograph",
    description: "Formed into a consistent rectangular construction unit ready for use.",
    metric: "Density Pass",
    metricVal: "IS 12894 Standard"
  },
  {
    num: "03",
    stage: "MASONRY",
    subTitle: "Site Installation",
    image: "/assets/journey-masonry.jpg",
    alt: "Mason laying fly ash bricks with mortar trowel",
    description: "Individual bricks come together course by course to create a wall.",
    metric: "Mortar Savings",
    metricVal: "20–25% Reduction"
  },
  {
    num: "04",
    stage: "WALL",
    subTitle: "Structural Wall",
    image: "/assets/flyash-wall-construction.jpg",
    alt: "Finished masonry wall with clean joint lines",
    description: "The material becomes part of the structure taking shape on site.",
    metric: "Compressive Strength",
    metricVal: "> 10 N/mm²"
  },
  {
    num: "05",
    stage: "SPACE",
    subTitle: "Built Structure",
    image: "/assets/app-commercial.jpg",
    alt: "Completed modern architectural structure",
    description: "Construction ultimately becomes the spaces where people live, work, and build.",
    metric: "Lifecycle Rating",
    metricVal: "50+ Years Service"
  }
];

export default function ConstructionJourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isArrowShooting, setIsArrowShooting] = useState(false);

  // Auto-advance process with arrow-hit animation loop
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      shootArrowToNextStep();
    }, 3400);

    return () => clearInterval(timer);
  }, [isPlaying, activeStep]);

  // Trigger arrow hit to reveal next step
  const shootArrowToNextStep = () => {
    setIsArrowShooting(true);
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
      setIsArrowShooting(false);
    }, 450);
  };

  const handleStepClick = (index: number) => {
    setIsPlaying(false);
    if (index > activeStep) {
      shootArrowToNextStep();
    } else {
      setActiveStep(index);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsPlaying(true);
  };

  const activeData = journeySteps[activeStep];

  return (
    <section 
      className="py-20 sm:py-28 bg-[#F5F6F8] text-[#0C192E] border-b border-[#CBD5E1] overflow-hidden select-none relative" 
      id="construction-journey"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C192E] tracking-tight font-heading uppercase leading-tight"
          >
            FROM MATERIAL <span className="text-[#0052CC]">TO STRUCTURE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto font-medium"
          >
            A construction material becomes part of something larger. Follow the journey from the brick itself to the spaces built around it.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 5-STAGE CARDS GRID: CLOSELY STACKED UNREVEALED CARDS + ARROW-HIT ANIMATION */}
        {/* ========================================================================= */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative [perspective:1200px]"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {journeySteps.map((step, idx) => {
            const isRevealed = idx <= activeStep;
            const isCurrent = activeStep === idx;
            const isLast = idx === journeySteps.length - 1;
            const unrevealedOffset = idx - activeStep - 1; // 0, 1, 2 for unrevealed cards

            return (
              <div key={step.num} className="relative [perspective:1200px]">
                <motion.div
                  initial={{ rotateY: idx === 0 ? 0 : 75, opacity: idx === 0 ? 1 : 0.4 }}
                  animate={{
                    rotateY: isRevealed ? 0 : 75,
                    opacity: isRevealed ? 1 : 0.35,
                    scale: isCurrent ? 1.04 : isRevealed ? 1 : 0.88,
                    // Closely stack unrevealed cards on the right side!
                    x: isRevealed ? 0 : -Math.min(unrevealedOffset * 90, 200),
                    zIndex: isCurrent ? 30 : isRevealed ? 20 - idx : 10 - idx
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 170,
                    damping: 20,
                    mass: 0.8
                  }}
                  style={{ transformOrigin: "left center" }}
                  onClick={() => handleStepClick(idx)}
                  className={`group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform-gpu ${
                    isCurrent
                      ? 'bg-white border-2 border-[#0052CC] ring-4 ring-[#0052CC]/25 shadow-[0_20px_40px_rgba(0,82,204,0.3)] z-30'
                      : isRevealed
                      ? 'bg-white border border-[#CBD5E1] hover:border-[#0052CC]/60 shadow-sm opacity-100'
                      : 'bg-white/80 border border-slate-300 shadow-xs hover:opacity-80'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full bg-[#0C192E] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isCurrent ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                    />

                    {/* Step Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-[#0C192E]/90 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs border border-white/10 flex items-center gap-1.5 shadow-sm z-20">
                      <span className={isCurrent ? 'text-[#38BDF8] font-black' : 'text-slate-300'}>
                        {step.num}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span>{step.stage}</span>
                    </div>

                    {/* Current Stage Badge */}
                    {isCurrent && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-3 right-3 bg-[#0052CC] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md z-20"
                      >
                        <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                        <span>OPEN</span>
                      </motion.div>
                    )}

                  </div>

                  {/* Card Text Content */}
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-2.5 bg-white">
                    <div>
                      <h3 className={`text-base font-extrabold font-heading tracking-tight transition-colors ${
                        isCurrent ? 'text-[#0052CC]' : isRevealed ? 'text-[#0C192E]' : 'text-slate-400'
                      }`}>
                        {step.stage}
                      </h3>
                      <span className={`text-[11px] font-mono font-semibold block mb-1 ${
                        isRevealed ? 'text-[#0052CC]' : 'text-slate-400'
                      }`}>
                        {step.subTitle}
                      </span>
                      <p className={`text-xs leading-relaxed font-normal ${
                        isRevealed ? 'text-[#475569]' : 'text-slate-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Progress Pill */}
                    <div className="pt-2">
                      <div className="w-full h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden relative">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#0052CC] to-[#38BDF8] rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: isRevealed ? '100%' : '0%' }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Connector Arrow */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center py-2 bg-[#F5F6F8] text-[#0052CC]">
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
                    <div className="px-3 py-1 rounded-full bg-[#0070F3] text-white shadow-[0_0_20px_#0070F3] flex items-center gap-1 text-xs font-mono font-bold">
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
