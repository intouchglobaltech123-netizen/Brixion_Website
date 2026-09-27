import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Phone } from 'lucide-react';

interface StageData {
  id: string;
  stageTag: string;
  headline: string;
  subHeadline?: string;
  description: string;
  bgImage: string; // which page_X.png to show
  isInitial?: boolean;
  isFinal?: boolean;
}

const stages: StageData[] = [
  {
    id: "initial",
    stageTag: "BRIXION BRICKS & BLOCKS | COIMBATORE",
    headline: "From one brick,\na home.",
    description: "Fly ash bricks, made in Anoor. Pressed under hydraulic load, cured in water, uncompressed.",
    bgImage: "/assets/page_1.png",
    isInitial: true,
  },
  {
    id: "stage-1",
    stageTag: "STAGE 01 — THE BRICK",
    headline: "One brick.",
    description: "Fly ash, cement, sand and water. 9 × 4.25 × 3 inches, about 3.25 kg, the same every time.",
    bgImage: "/assets/page_1.png",
  },
  {
    id: "stage-2",
    stageTag: "STAGE 02 — STRUCTURE",
    headline: "Course by course.",
    description: "Uniform size and sharp 90° edges make every wall predictable to build, from the foundation to the roof slab.",
    bgImage: "/assets/page_2.png",
  },
  {
    id: "stage-3",
    stageTag: "STAGE 03 — FINISH",
    headline: "Mortar.\nPlaster. Paint.",
    description: "Low water absorption and a smooth face mean less mortar in the joints and thinner plaster on the wall.",
    bgImage: "/assets/page_3.png",
  },
  {
    id: "stage-4",
    stageTag: "STAGE 04 — DETAILS",
    headline: "Glass, wood\nand stone.",
    description: "The brick disappears into the architecture it made possible.",
    bgImage: "/assets/page_4.png",
  },
  {
    id: "final",
    stageTag: "BRIXION BRICKS AND BLOCKS",
    headline: "Build strong.\nBuild smart.",
    subHeadline: "Choose Brixion bricks.",
    description: "",
    bgImage: "/assets/page_4.png",
    isFinal: true,
  },
];

const TOTAL_STAGES = stages.length;
const WHEEL_THRESHOLD = 60; // delta threshold to trigger stage change
const TRANSITION_COOLDOWN = 700; // ms cooldown between stage transitions
const TOUCH_THRESHOLD = 50; // px swipe distance to trigger stage change

// Background image crossfade variants
const bgVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1.0 },
  exit: { opacity: 0, scale: 0.98 },
};

// Text content animation variants
const textVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
  }),
};

export default function HeroParallaxScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isLocked, setIsLocked] = useState(true); // locks page scroll while in hero
  const lastTransitionTime = useRef(0);
  const accumulatedDelta = useRef(0);
  const touchStartY = useRef(0);

  // Check if hero section is in view to decide scroll locking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && activeStage < TOTAL_STAGES - 1) {
          setIsLocked(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeStage]);

  const advanceStage = useCallback((dir: number) => {
    const now = Date.now();
    if (now - lastTransitionTime.current < TRANSITION_COOLDOWN) return;

    setDirection(dir);

    if (dir > 0) {
      // Scrolling down
      if (activeStage < TOTAL_STAGES - 1) {
        lastTransitionTime.current = now;
        setActiveStage((prev) => prev + 1);
        accumulatedDelta.current = 0;
      } else {
        // At last stage, release scroll lock
        setIsLocked(false);
      }
    } else {
      // Scrolling up
      if (activeStage > 0) {
        lastTransitionTime.current = now;
        setActiveStage((prev) => prev - 1);
        accumulatedDelta.current = 0;
        setIsLocked(true); // re-lock when going back
      }
    }
  }, [activeStage]);

  // Wheel handler
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!isLocked) {
      // If at last stage and scrolling down, check if we should re-lock on scroll up
      if (e.deltaY < 0 && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // If hero section is still visible and user scrolls up
        if (rect.top >= -10) {
          setIsLocked(true);
          e.preventDefault();
          advanceStage(-1);
          return;
        }
      }
      return; // allow normal scroll
    }

    e.preventDefault();
    e.stopPropagation();

    accumulatedDelta.current += e.deltaY;

    if (Math.abs(accumulatedDelta.current) >= WHEEL_THRESHOLD) {
      const dir = accumulatedDelta.current > 0 ? 1 : -1;
      advanceStage(dir);
    }
  }, [isLocked, advanceStage]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isLocked) return;

    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaY) >= TOUCH_THRESHOLD) {
      const dir = deltaY > 0 ? 1 : -1;
      advanceStage(dir);
    }
  }, [isLocked, advanceStage]);

  // Prevent page scroll when locked
  useEffect(() => {
    if (!isLocked) return;

    const preventScroll = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Only prevent scroll if the hero is in view
      if (rect.top <= 10 && rect.bottom >= window.innerHeight * 0.5) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    return () => window.removeEventListener('wheel', preventScroll);
  }, [isLocked]);

  const currentStage = stages[activeStage];
  const progressPercent = (activeStage / (TOTAL_STAGES - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#0A0F1A] text-white select-none overflow-hidden"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. PARALLAX BACKGROUND IMAGES — CROSSFADE ON STAGE CHANGE */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentStage.bgImage + '-' + activeStage}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentStage.bgImage}
              alt={`Stage background - ${currentStage.stageTag}`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Dark Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A]/90 via-[#090E1A]/30 to-black/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none z-[1]" />
      </div>

      {/* 2. CONTENT OVERLAY — TEXT STAGES WITH ANIMATED CROSSFADE */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-32 sm:pt-40 w-full h-full flex flex-col justify-between">

        {/* Main Text Content Area */}
        <div className="flex-grow flex items-center relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStage.id}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-2xl space-y-4"
            >
              {/* Stage Tag Pill */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded backdrop-blur-md ${
                currentStage.isInitial || currentStage.isFinal
                  ? 'bg-[#E05628]/20 border border-[#E05628]/40'
                  : 'bg-black/60 border border-white/20'
              }`}>
                <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase ${
                  currentStage.isInitial || currentStage.isFinal ? 'text-[#FF7A50]' : 'text-[#FF7A50]'
                }`}>
                  {currentStage.stageTag}
                </span>
              </div>

              {/* Headline */}
              {currentStage.isFinal ? (
                <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-white tracking-tight uppercase font-heading drop-shadow-xl leading-[1.05] whitespace-pre-line">
                  Build strong.<br />
                  <span className="text-[#FF7A50]">Build smart.</span>
                </h2>
              ) : currentStage.isInitial ? (
                <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.05] uppercase font-heading drop-shadow-md whitespace-pre-line">
                  {currentStage.headline}
                </h1>
              ) : (
                <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-heading drop-shadow-md whitespace-pre-line leading-[1.08]">
                  {currentStage.headline}
                </h2>
              )}

              {/* Sub-headline (final only) */}
              {currentStage.subHeadline && (
                <p className="text-lg sm:text-xl text-slate-100 font-semibold pt-1">
                  {currentStage.subHeadline}
                </p>
              )}

              {/* Description */}
              {currentStage.description && (
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-lg pt-1">
                  {currentStage.description}
                </p>
              )}

              {/* Initial — Scroll Prompt */}
              {currentStage.isInitial && (
                <div className="pt-6 flex items-center gap-2 text-xs font-mono text-slate-300 font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#E05628] animate-ping" />
                  <span>SCROLL TO BEGIN</span>
                  <ChevronDown className="w-4 h-4 animate-bounce text-[#E05628]" />
                </div>
              )}

              {/* Final — CTA Buttons */}
              {currentStage.isFinal && (
                <>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="h-[46px] px-6 bg-[#E05628] hover:bg-[#c94920] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg inline-flex items-center gap-2 transition-all active:scale-95"
                    >
                      <span>GET A QUOTE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="/assets/company-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[46px] px-6 bg-black/60 hover:bg-black/80 text-white border border-white/30 font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all backdrop-blur-md inline-flex items-center gap-2 active:scale-95"
                    >
                      <Download className="w-4 h-4" />
                      <span>BROCHURE</span>
                    </a>
                  </div>

                  <div className="pt-3 flex items-center gap-3 text-xs font-mono font-bold text-slate-300">
                    <Phone className="w-4 h-4 text-[#FF7A50]" />
                    <span>+91 90826 33833 &nbsp;|&nbsp; +91 4814 33833</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. STAGE INDICATOR DOTS + STATS BAR */}
        <div className="pb-6 space-y-4">

          {/* Stats Bar — Visible on final stage */}
          <AnimatePresence>
            {currentStage.isFinal && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#090E1A]/80 border border-white/10 backdrop-blur-md rounded-xl py-4 px-6"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
                  <div className="border-r border-white/10 last:border-0 pr-4">
                    <div className="text-xl sm:text-2xl font-black font-mono text-white">8,310</div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">BRICKS PER CAR CAPACITY</div>
                  </div>
                  <div className="border-r border-white/10 last:border-0 pr-4">
                    <div className="text-xl sm:text-2xl font-black font-mono text-[#FF7A50]">1.2–12 N/mm²</div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">COMPRESSIVE STRENGTH</div>
                  </div>
                  <div className="border-r border-white/10 last:border-0 pr-4">
                    <div className="text-xl sm:text-2xl font-black font-mono text-white">0.52 kg</div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">PER BRICK WEIGHT SAVING</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black font-mono text-white">5%</div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">UP TO 5% WATER ABSORPTION</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage Navigation Dots */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {stages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => {
                    setDirection(idx > activeStage ? 1 : -1);
                    setActiveStage(idx);
                    if (idx < TOTAL_STAGES - 1) setIsLocked(true);
                  }}
                  className={`group relative transition-all duration-300 ${
                    idx === activeStage
                      ? 'w-10 h-2.5 rounded-full bg-[#E05628]'
                      : 'w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to ${stage.stageTag}`}
                >
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {stage.stageTag.length > 20 ? stage.stageTag.slice(0, 20) + '…' : stage.stageTag}
                  </span>
                </button>
              ))}
            </div>

            {/* Stage Counter */}
            <div className="text-xs font-mono font-bold text-slate-400 tracking-wider">
              <span className="text-white">{String(activeStage + 1).padStart(2, '0')}</span>
              <span className="text-slate-600"> / </span>
              <span>{String(TOTAL_STAGES).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E05628] via-[#FF7A50] to-[#38BDF8] rounded-full"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
