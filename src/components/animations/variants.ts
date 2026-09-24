import { Variants } from 'framer-motion';

// Standard Industrial Easing Curve (4-tuple cubic-bezier)
export const INDUSTRIAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// 1. Text Animation: opacity: 0 -> 1, y: 20 -> 0 (0.5s - 0.6s)
export const fadeUpText: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: INDUSTRIAL_EASE },
  },
};

export const fadeUp: Variants = fadeUpText;

// 2. Card Animation: opacity: 0 -> 1, y: 30 -> 0 (0.6s - 0.7s)
export const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: INDUSTRIAL_EASE },
  },
};

// 3. Image Reveal Animation: scale: 1.03 -> 1, opacity: 0 -> 1 (0.7s - 0.8s)
export const revealImage: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: INDUSTRIAL_EASE },
  },
};

// 4. Staggered Container for Cards Grid
export const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainer: Variants = staggerCards;

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: INDUSTRIAL_EASE },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: INDUSTRIAL_EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: INDUSTRIAL_EASE },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0, scale: 1, transition: { duration: 0.3 } },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.3, ease: INDUSTRIAL_EASE },
  },
};

export const iconFloat: Variants = {
  rest: { y: 0 },
  hover: { y: -3, transition: { duration: 0.25 } },
};

export const arrowSlide: Variants = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.2 } },
};
