import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    number: "01",
    question: "What products do you manufacture?",
    answer: "Brixion specializes in manufacturing high-density Fly Ash Bricks designed for structural integrity, uniform dimensions, and long-term durability across residential, commercial, and infrastructure construction projects."
  },
  {
    number: "02",
    question: "What are Fly Ash Bricks made from?",
    answer: "Our bricks are engineered using a precise industrial mix of high-grade fly ash, cement, sand, and water. They are compressed under hydraulic pressure without requiring thermal kiln firing."
  },
  {
    number: "03",
    question: "What is the standard brick size?",
    answer: "The standard Brixion Fly Ash Brick size is 9 × 4.25 × 3 inches (228 × 108 × 76 mm) with a consistent unit weight of approximately 3.25 kg per brick."
  },
  {
    number: "04",
    question: "Where can Fly Ash Bricks be used?",
    answer: "Fly Ash Bricks are suitable for load-bearing walls, high-rise partition walls, commercial buildings, boundary structures, and industrial complexes requiring high compressive strength."
  },
  {
    number: "05",
    question: "How can I request a quotation?",
    answer: "You can request a custom quotation by filling out our online inquiry form on the Contact page, sending us your project bill of quantities (BOQ), or contacting our sales office directly."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0C192E] border-b border-[#CBD5E1] overflow-hidden select-none" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left Column (Header + CTA) | Right Column (Accordion) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Sticky Header Information */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] font-mono text-xs font-bold uppercase tracking-wider"
            >
              <span>QUESTIONS?</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C192E] tracking-tight font-heading uppercase leading-[1.1]"
            >
              WE'RE HERE <br />
              <span className="text-[#0052CC]">TO HELP.</span>
            </motion.h2>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-[#475569] leading-relaxed font-medium max-w-md"
            >
              Get answers to common commercial and technical questions regarding Brixion Fly Ash Bricks, product specifications, and ordering details.
            </motion.p>

            {/* Direct Contact Card CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 border-t border-[#CBD5E1]"
            >
              <div className="p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center font-bold">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0C192E]">Have a specific query?</h4>
                    <p className="text-xs text-[#64748B]">Our sales engineers are ready to assist.</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group pt-1"
                >
                  <span>Talk to our technical team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Right Column — Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className={`rounded-xl transition-all duration-200 border overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#0052CC] shadow-md' 
                      : 'bg-[#F1F5F9] border-[#CBD5E1] hover:border-[#94A3B8] hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.number}`}
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#1078ED] rounded-xl group"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-5">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                        isOpen 
                          ? 'bg-[#0052CC] text-white' 
                          : 'bg-[#E2E8F0] text-[#0052CC] group-hover:bg-[#0052CC] group-hover:text-white'
                      }`}>
                        {faq.number} {isOpen && <span className="sr-only">(Selected)</span>}
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold font-heading tracking-tight transition-colors ${
                        isOpen ? 'text-[#0052CC]' : 'text-[#0C192E] group-hover:text-[#0052CC]'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                      isOpen 
                        ? 'bg-[#0052CC] text-white rotate-180' 
                        : 'bg-[#E2E8F0] text-[#475569] group-hover:bg-[#CBD5E1]'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.number}`}
                        role="region"
                        aria-label={faq.question}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium pt-3">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
