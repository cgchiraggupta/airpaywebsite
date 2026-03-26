import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextScramble } from './TextScramble';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'DOES IT WORK WITHOUT INTERNET?', a: 'Affirmative. FlowStable leverages GSM signaling (*99# USSD) which operates independently of IP connectivity. Works on 2G/EDGE networks.' },
    { q: 'IS MY PIN SECURE?', a: 'Zero-Trust architecture. MPIN entry remains air-gapped and is never intercepted by the application. Security is our highest priority.' },
    { q: 'WHICH OPERATORS ARE SUPPORTED?', a: 'Currently Airtel, Jio, and Vi (Vodafone Idea) are supported. BSNL support is in active development.' },
    { q: 'HOW DO I GET THE APK?', a: 'Download via our CI/CD pipeline. Visit the GitHub repository or use the Telegram bot for automated distribution.' },
  ];

  return (
    <section className="py-32 px-8 md:px-24 border-b border-divider bg-background">
      <div className="max-w-4xl mx-auto">
         <h2 className="font-heading text-4xl md:text-6xl uppercase mb-16 tracking-tight text-center">Protocol FAQ</h2>
        
        <div className="border border-divider bg-surface font-mono shadow-[8px_8px_0px_0px_rgba(42,42,42,1)]">
          <div className="p-4 border-b border-divider text-xs text-text-hint flex justify-between bg-divider text-text-primary">
            <span>flowstable_faq.db</span>
            <span>{faqs.length} RECORDS FOUND</span>
          </div>
          
           {faqs.map((faq, i) => (
            <div key={i} className="border-b last:border-b-0 border-divider">
              <button
                className="w-full p-6 md:p-8 flex items-start md:items-center justify-between text-left hover:bg-primary hover:text-text-primary transition-colors duration-0 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex gap-4 items-start md:items-center">
                  <span className="text-accent mt-1 md:mt-0">{'>'}</span>
                  <span className="text-sm md:text-base uppercase tracking-wider">{faq.q}</span>
                </div>
                <span className="text-sm ml-4 flex-shrink-0 text-text-hint group-hover:text-accent transition-colors">
                  {openIndex === i ? '[ - ]' : '[ + ]'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-background"
                  >
                     <div className="p-6 md:p-8 pl-14 md:pl-16 text-text-secondary text-sm leading-relaxed border-t border-divider relative">
                       {/* Vertical accent line */}
                       <div className="absolute left-6 md:left-8 top-6 md:top-8 bottom-6 md:bottom-8 w-px bg-accent/30" />
                       <TextScramble text={faq.a} duration={800} trigger={true} />
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
