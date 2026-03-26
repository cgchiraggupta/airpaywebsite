import { useEffect, useState } from 'react';

export function Footer() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-background py-12 px-8 md:px-24 border-t border-divider flex flex-col md:flex-row justify-between items-end min-h-[30vh]">
      <div className="font-mono text-text-hint text-sm md:text-base mb-8 md:mb-0">
        <span className="text-text-primary">&gt;</span> FlowStable_UPI.terminate()
        <span className={`inline-block w-2 h-4 bg-text-primary ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="flex flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-widest text-text-hint">
        <a href="#" className="hover:text-text-primary transition-colors duration-0">Documentation</a>
        <a href="#" className="hover:text-text-primary transition-colors duration-0">GitHub</a>
        <a href="#" className="hover:text-text-primary transition-colors duration-0">Security</a>
        <a href="#" className="hover:text-text-primary transition-colors duration-0">Compliance</a>
        <div className="mt-4 text-text-secondary">Â© 2026 FLOWSTABLE PROTOCOL</div>
      </div>
    </footer>
  );
}
