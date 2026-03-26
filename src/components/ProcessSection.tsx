export function ProcessSection() {
  const steps = [
    { phase: '01', title: 'QR SCAN', desc: 'Scan UPI QR code using on-device ML Kit Vision API. Extract payment parameters locally.', code: '> extractQR(pa, pn, am)' },
    { phase: '02', title: 'USSD HANDHAKE', desc: 'Initiate *99# USSD session. Parse operator-specific menu dialects (Airtel/Jio/Vi).', code: 'SIGINT: *99# → ACK: 200 OK' },
    { phase: '03', title: 'STATE TRANSITION', desc: 'Navigate payment flow via finite state automaton. Inject VPA, amount, confirm.', code: 'IDLE → MENU → UPI → AMOUNT → CONFIRM' },
  ];

  return (
    <section className="py-32 px-8 md:px-24 border-b border-divider bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl uppercase mb-24 tracking-tight text-center">Transaction Flow</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[40px] md:left-[120px] top-0 bottom-0 w-px bg-divider" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col md:flex-row mb-24 last:mb-0 group">
              {/* Oversized Number */}
              <div className="absolute -top-10 left-0 md:left-4 font-heading text-8xl md:text-[120px] font-black text-surface border-text group-hover:text-accent transition-colors duration-500 z-0 select-none opacity-30 md:opacity-50">
                {step.phase}
              </div>

              <div className="ml-[80px] md:ml-[240px] relative z-10 pt-4">
                {/* Node Dot */}
                <div className="absolute -left-[44px] md:-left-[124px] top-6 w-2 h-2 bg-background border-2 border-accent rounded-full group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />
                
                <h3 className="text-3xl uppercase tracking-wider mb-4 font-bold">{step.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-xl">{step.desc}</p>
                
                <div className="bg-divider text-success font-mono text-xs p-4 inline-block shadow-[4px_4px_0px_0px_rgba(233,69,96,1)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  {step.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
