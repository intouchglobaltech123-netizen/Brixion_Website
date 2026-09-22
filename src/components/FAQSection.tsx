import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    number: "01",
    question: "What product does Brixion manufacture?",
    answer: "Brixion Bricks and Blocks LLP specializes in manufacturing Fly Ash Bricks for general construction requirements."
  },
  {
    number: "02",
    question: "What is the standard size of a Brixion Fly Ash Brick?",
    answer: "The standard brick size is 9 × 4.25 × 3 inches, equivalent to 228 × 108 × 76 mm."
  },
  {
    number: "03",
    question: "What is the approximate weight of one Fly Ash Brick?",
    answer: "The approximate unit weight is 3.25 kg per brick."
  },
  {
    number: "04",
    question: "What materials are used to manufacture Fly Ash Bricks?",
    answer: "Brixion Fly Ash Bricks are manufactured using fly ash, cement, sand, and water."
  },
  {
    number: "05",
    question: "Do Fly Ash Bricks require a firing process?",
    answer: "No. Fly Ash Bricks do not require a firing process according to the supplied Brixion product information."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#CBD5E1] overflow-hidden select-none" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C192E] tracking-tight font-heading uppercase leading-tight"
          >
            FAQ — <span className="text-[#0052CC]">QUESTIONS BEFORE YOU BUILD?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium max-w-xl mx-auto"
          >
            Everything you need to know about Brixion Fly Ash Bricks, technical specifications, and manufacturing quality.
          </motion.p>
        </div>

        {/* Questions Accordion Below Header */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#0052CC] shadow-lg shadow-[#0052CC]/5' 
                    : 'bg-[#F1F5F9] border-[#CBD5E1] hover:border-[#94A3B8] hover:bg-white/80'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                      isOpen 
                        ? 'bg-[#0052CC] text-white' 
                        : 'bg-[#E2E8F0] text-[#0052CC] group-hover:bg-[#0052CC] group-hover:text-white'
                    }`}>
                      {faq.number}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold font-heading tracking-tight transition-colors ${
                      isOpen ? 'text-[#0052CC]' : 'text-[#0C192E] group-hover:text-[#0052CC]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ${
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-slate-100 mt-1">
                        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium pt-4">
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
    </section>
  );
}
