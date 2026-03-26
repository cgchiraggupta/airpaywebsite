import { useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { TextScramble } from './TextScramble';

export function PricingSection() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-32 px-8 flex flex-col items-center justify-center bg-background border-b border-divider">
      <h2 className="font-heading text-5xl md:text-7xl uppercase text-center mb-24 tracking-tighter">
        Distribution
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Tier 1 */}
        <div className="flex-1 bg-surface relative pt-12 pb-8 px-8 flex flex-col font-mono text-sm border-x border-b border-divider">
          <div className="receipt-edge" />
          
          <div className="text-center mb-8 uppercase tracking-widest text-text-hint">
            --- ALPHA RELEASE ---
          </div>
          
          <div className="text-4xl font-light mb-8 text-center">
            FREE<span className="text-text-hint text-sm">/forever</span>
          </div>

          <div className="flex flex-col gap-4 mb-12 flex-grow">
            <div className="flex justify-between border-b border-divider pb-2">
              <span>USSD Gateway</span>
              <span>[INCLUDED]</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2">
              <span>QR Parsing</span>
              <span>[INCLUDED]</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2 text-text-hint">
              <span>Multi-Operator</span>
              <span>[AIRTEL/JIO]</span>
            </div>
          </div>

          <MagneticButton
            className="w-full bg-primary text-text-primary py-4 font-bold uppercase tracking-wider hover:bg-accent transition-colors duration-0"
            onClick={() => {}}
            onMouseEnter={() => setHoveredTier('core')}
            onMouseLeave={() => setHoveredTier(null)}
          >
            <div className="w-full h-full flex items-center justify-center">
              {hoveredTier === 'core' ? (
                <TextScramble text="DOWNLOAD" duration={200} />
              ) : (
                'GET APK'
              )}
            </div>
          </MagneticButton>
        </div>

        {/* Tier 2 */}
        <div className="flex-1 bg-surface relative pt-12 pb-8 px-8 flex flex-col font-mono text-sm border border-divider">
          <div className="receipt-edge" />
          
          <div className="text-center mb-8 uppercase tracking-widest text-accent">
            --- ENTERPRISE ---
          </div>
          
          <div className="text-4xl font-light mb-8 text-center">
            CUSTOM<span className="text-text-hint text-sm">/quote</span>
          </div>

          <div className="flex flex-col gap-4 mb-12 flex-grow">
            <div className="flex justify-between border-b border-divider pb-2">
              <span>Everything in Alpha</span>
              <span>[INCLUDED]</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2">
              <span>White Label</span>
              <span>[INCLUDED]</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2">
              <span>API Integration</span>
              <span>[INCLUDED]</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2">
              <span>Priority Support</span>
              <span>[INCLUDED]</span>
            </div>
          </div>

          <MagneticButton
            className="w-full bg-accent text-white py-4 font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors duration-0"
            onClick={() => {}}
            onMouseEnter={() => setHoveredTier('pro')}
            onMouseLeave={() => setHoveredTier(null)}
          >
            <div className="w-full h-full flex items-center justify-center">
              {hoveredTier === 'pro' ? (
                <TextScramble text="CONTACT" duration={200} />
              ) : (
                'REQUEST DEMO'
              )}
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
