import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';

import BrixionHero from '../components/BrixionHero';
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
      {/* 01. HERO — PARALLAX SCROLL CONSTRUCTION JOURNEY (FROM BRICK TO HOME)     */}
      {/* ========================================================================= */}
      <BrixionHero />

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
