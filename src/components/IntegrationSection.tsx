import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Smartphone, WifiOff, Shield, Cpu } from 'lucide-react';

export function IntegrationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      stroke: '#00FF66',
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <section ref={ref} className="min-h-screen py-32 px-8 flex flex-col items-center justify-center bg-background border-b border-divider relative overflow-hidden">
      <h2 className="font-heading text-5xl md:text-7xl uppercase text-center mb-24 tracking-tighter">
        System Architecture
      </h2>

      <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
        {/* SVG Lines */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
          <motion.path
            d="M 40 40 L 25 25"
            stroke="#1A1A1A"
            strokeWidth="0.25"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M 60 40 L 75 25"
            stroke="#1A1A1A"
            strokeWidth="0.25"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M 40 60 L 25 75"
            stroke="#1A1A1A"
            strokeWidth="0.25"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M 60 60 L 75 75"
            stroke="#1A1A1A"
            strokeWidth="0.25"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </svg>

        {/* Central Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-24 bg-surface border border-ink flex items-center justify-center z-10">
          <span className="font-heading text-2xl uppercase tracking-tighter">CHRONOS</span>
        </div>

        {/* Outer Nodes */}
        <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface border border-divider flex items-center justify-center z-10">
          <Smartphone strokeWidth={1.5} className="text-text-secondary" />
        </div>
        <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface border border-divider flex items-center justify-center z-10">
          <WifiOff strokeWidth={1.5} className="text-text-secondary" />
        </div>
        <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface border border-divider flex items-center justify-center z-10">
          <Shield strokeWidth={1.5} className="text-text-secondary" />
        </div>
        <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface border border-divider flex items-center justify-center z-10">
          <Cpu strokeWidth={1.5} className="text-text-secondary" />
        </div>
      </div>
    </section>
  );
}
