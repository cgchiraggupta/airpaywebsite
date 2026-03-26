import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function MechanicsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const fontWeight = useTransform(scrollYProgress, [0, 0.5, 1], [300, 500, 700]);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-background border-t border-divider">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row">
        {/* Left Side: Sticky Heading */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center border-r border-divider p-8">
          <motion.h2
            className="font-heading text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85]"
            style={{ fontWeight }}
          >
            Payment
            <br />
            Protocol
          </motion.h2>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="w-full md:w-1/2 h-full overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col">
            {/* Feature 1 */}
            <motion.div
              className="h-screen w-full flex flex-col justify-center p-12 md:p-24 border-b border-divider bg-surface"
              style={{
                y: useTransform(scrollYProgress, [0, 1], ['0%', '-200%']),
              }}
            >
              <h3 className="font-heading text-4xl md:text-6xl uppercase mb-6 text-text-primary">USSD Gateway</h3>
              <p className="font-mono text-text-secondary text-sm md:text-base leading-relaxed max-w-md">
                Programmatic navigation of cellular telephony menus via *99#. Acts as a headless browser for GSM signaling channels, bridging modern UPI with legacy infrastructure.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="h-screen w-full flex flex-col justify-center p-12 md:p-24 border-b border-divider bg-surface"
              style={{
                y: useTransform(scrollYProgress, [0, 1], ['0%', '-200%']),
              }}
            >
              <h3 className="font-heading text-4xl md:text-6xl uppercase mb-6 text-text-primary">QR Parsing Engine</h3>
              <p className="font-mono text-text-secondary text-sm md:text-base leading-relaxed max-w-md">
                On-device QR code processing using Google ML Kit Vision API. Extracts payment parameters (pa, pn, am) from ISO/IEC 18004 matrices with zero cloud dependency.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="h-screen w-full flex flex-col justify-center p-12 md:p-24 border-b border-divider bg-surface"
              style={{
                y: useTransform(scrollYProgress, [0, 1], ['0%', '-200%']),
              }}
            >
              <h3 className="font-heading text-4xl md:text-6xl uppercase mb-6 text-text-primary">Finite State Automaton</h3>
              <p className="font-mono text-text-secondary text-sm md:text-base leading-relaxed max-w-md">
                Deterministic state transitions (IDLE → MENU → UPI → AMOUNT → CONFIRM) ensure transaction reliability over flaky cellular sessions. Zero ambiguity in payment flow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
