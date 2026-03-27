export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 overflow-hidden border-b border-divider">
      <div className="noise-overlay" />
      
      <div className="relative z-10 max-w-4xl text-center flex flex-col gap-8">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold leading-[0.9] sm:leading-[0.85] tracking-tight">
          <span className="block">Payments</span>
          <span className="block">Without</span>
          <span className="block text-accent">Internet</span>
        </h1>
        
        <p className="font-mono text-text-secondary max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
          AirPay enables UPI payments even when you have no internet connection. 
          Simple, secure, and works anywhere with mobile network coverage.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a 
            href="https://github.com/cgchiraggupta/airpay-testing-apk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-white font-mono text-sm hover:bg-accent/90 transition-colors active:scale-95 touch-manipulation min-h-[48px] inline-flex items-center justify-center"
          >
            DOWNLOAD FOR ANDROID
          </a>
          
          <a 
            href="#how-to-use"
            className="px-8 py-4 border border-divider text-text-primary font-mono text-sm hover:bg-surface transition-colors active:scale-95 touch-manipulation min-h-[48px] inline-flex items-center justify-center"
          >
            HOW TO USE
          </a>
        </div>
      </div>

      {/* Simple decorative element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="flex items-center gap-2 font-mono text-xs text-text-secondary">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>READY FOR OFFLINE PAYMENTS</span>
        </div>
      </div>
    </section>
  );
}