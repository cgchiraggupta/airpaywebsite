import { motion } from 'motion/react';

export function MarqueeSection() {
  const text = "NO INTERNET REQUIRED ✦ GSM SIGNALING ✦ OFFLINE PAYMENTS ✦ ";
  
  return (
    <section className="gradient-shell py-6 overflow-hidden border-y border-divider relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex font-heading text-4xl md:text-6xl uppercase text-white tracking-tighter"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
        >
          {text.repeat(4)}
        </motion.div>
      </div>
    </section>
  );
}
