import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);

  return (
    <section ref={containerRef} className="h-[150vh] flex items-center justify-center relative bg-background">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <h2 className="font-heading text-5xl md:text-7xl lg:text-9xl text-center uppercase max-w-6xl px-8 leading-[0.9] tracking-tighter text-text-hint">
          Digital payments fail when internet fails.
        </h2>
        
        <motion.h2
          className="font-heading text-5xl md:text-7xl lg:text-9xl text-center uppercase max-w-6xl px-8 leading-[0.9] tracking-tighter text-text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          style={{ clipPath }}
        >
          Digital payments fail when internet fails.
        </motion.h2>
      </div>
    </section>
  );
}
