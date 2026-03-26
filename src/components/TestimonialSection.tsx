import { TextScramble } from './TextScramble';

export function TestimonialSection() {
  const logs = [
    { id: '0x8F92A1', output: '99.7%', text: "Works in rural areas where internet is non-existent. Game changer for field work.", role: 'Field Researcher' },
    { id: '0x1A4B99', output: '0ms', text: "Zero latency on GSM signaling. Payments complete faster than IP-based UPI.", role: 'Network Engineer' },
    { id: '0x9C77F2', output: '100%', text: "PIN entry remains air-gapped. Security model is impeccable for financial apps.", role: 'Security Analyst' },
  ];

  return (
    <section className="py-32 px-8 md:px-24 border-b border-divider bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-divider pb-4">
          <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight">Performance Metrics</h2>
          <span className="font-mono text-sm text-accent animate-pulse hidden md:block">LIVE TRANSACTION DATA</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {logs.map((log, i) => (
             <div key={i} className="p-8 border border-divider bg-surface flex flex-col gap-6 hover:border-accent transition-colors duration-300 relative overflow-hidden group">
              {/* Loading Bar Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              
              <div className="flex justify-between items-center text-xs font-mono border-b border-divider pb-4">
                <span className="text-text-hint">
                  TX_ID: <span className="text-text-primary group-hover:text-accent transition-colors"><TextScramble text={log.id} trigger={true} duration={800} /></span>
                </span>
                <span className="text-success bg-success/10 px-2 py-1">SUCCESS: {log.output}</span>
              </div>
              
              <p className="text-sm leading-relaxed flex-1 font-mono">
                <span className="text-accent mr-2">{'>'}</span>
                "{log.text}"
              </p>
              
              <div className="text-xs font-mono text-text-hint pt-4 border-t border-divider uppercase">
                VERIFIED BY: {log.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
