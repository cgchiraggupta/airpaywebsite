import { useState } from 'react';
import { Shield, Zap, Database, Terminal, WifiOff, Smartphone, Lock, QrCode } from 'lucide-react';
import { TextScramble } from './TextScramble';

export function FeaturesSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  
  const features = [
    { id: 'PROT.01', icon: WifiOff, title: 'Offline-First', desc: 'Leverages GSM signaling (*99#) when IP connectivity fails.', metric: '0 INTERNET REQ' },
    { id: 'PROT.02', icon: Smartphone, title: 'USSD Gateway', desc: 'Programmatic navigation of cellular telephony menus.', metric: 'AUTO NAVIGATION' },
    { id: 'PROT.03', icon: Lock, title: 'Zero-Trust PIN', desc: 'MPIN entry remains air-gapped. Never intercepted.', metric: '100% SECURE' },
    { id: 'PROT.04', icon: QrCode, title: 'QR Parsing', desc: 'On-device QR code processing with Google ML Kit.', metric: 'EDGE COMPUTING' },
  ];

  return (
    <section className="py-32 px-8 md:px-24 border-b border-divider bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-divider pb-4">
          <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight">Protocol Features</h2>
          <span className="font-mono text-sm text-text-hint hidden md:block">STATUS: <span className="text-success">OPERATIONAL</span></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-divider">
          {features.map((feature, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="p-8 border-b lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0 border-divider bg-surface hover:bg-primary hover:text-text-primary transition-colors duration-200 flex flex-col group"
            >
              <div className="flex justify-between items-center mb-12 font-mono text-xs">
                <span className="text-text-hint group-hover:text-text-primary/50 transition-colors">{feature.id}</span>
                <feature.icon className="w-5 h-5 text-accent group-hover:text-accent transition-colors" strokeWidth={1.5} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl uppercase tracking-wider mb-4 font-bold h-14">
                  {hovered === i ? <TextScramble text={feature.title} duration={300} /> : feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary group-hover:text-text-primary/70 transition-colors mb-8">
                  {feature.desc}
                </p>
              </div>
              
              <div className="font-mono text-xs tracking-widest text-success group-hover:text-success pt-4 border-t border-divider group-hover:border-text-primary/20 transition-colors">
                [{feature.metric}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
