import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { TextScramble } from './TextScramble';

export function HeroSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const rotation = seconds * 6;

  return (
     <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-24 overflow-hidden border-b border-divider pt-20 md:pt-0">
      <div className="noise-overlay" />
      
      <div className="relative z-10 max-w-4xl flex flex-col gap-8">
         <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold leading-[0.9] sm:leading-[0.85] tracking-tight">
          <TextScramble text="Payments" delay={100} duration={800} />
          <br />
          <TextScramble text="without" delay={300} duration={800} />
          <br />
          <span className="text-accent">
            <TextScramble text="Internet." delay={500} duration={800} />
          </span>
        </h1>
         <p className="font-mono text-text-secondary max-w-md text-xs sm:text-sm md:text-base">
          AirPay UPI v1.0.0-alpha // INITIALIZING PROTOCOL...
          <br />
          BRIDGING MODERN UPI WITH LEGACY GSM SIGNALING.
        </p>
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
          <button className="px-6 py-4 sm:px-8 sm:py-3 bg-accent text-white font-mono text-sm hover:bg-accent/90 transition-colors active:scale-95 touch-manipulation min-h-[48px]">
            DOWNLOAD APK
          </button>
          <button className="px-6 py-4 sm:px-8 sm:py-3 border border-divider text-text-primary font-mono text-sm hover:bg-surface transition-colors active:scale-95 touch-manipulation min-h-[48px]">
            VIEW DOCS
          </button>
        </div>
      </div>

       <div className="absolute md:right-[-20vw] right-[-40vw] top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] md:max-w-[800px] md:max-h-[800px] opacity-10 md:opacity-20 pointer-events-none">
        <div className="w-full h-full border-[1px] border-divider relative flex items-center justify-center">
          {/* Inner rings */}
          <div className="w-[80%] h-[80%] border-[1px] border-divider absolute" />
          <div className="w-[60%] h-[60%] border-[1px] border-divider absolute" />
          
          {/* Signal strength indicator */}
          <div className="absolute flex flex-col items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="w-2 bg-success"
                style={{ height: `${i * 8}px`, opacity: i <= 3 ? 1 : 0.3 }}
              />
            ))}
          </div>
          
          {/* Center dot */}
          <div className="w-4 h-4 bg-accent absolute" />
        </div>
      </div>
    </section>
  );
}
