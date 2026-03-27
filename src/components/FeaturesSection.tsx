import { WifiOff, Shield, Smartphone, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: WifiOff,
      title: 'Works Offline',
      description: 'Make UPI payments even without internet connection using mobile network.',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Your UPI PIN is always entered manually. No automatic PIN entry.',
    },
    {
      icon: Smartphone,
      title: 'Easy to Use',
      description: 'Simple interface. Scan QR code or enter details manually.',
    },
    {
      icon: Zap,
      title: 'Fast',
      description: 'Complete payments in seconds through USSD banking.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-24 border-b border-divider bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Why AirPay?
          </h2>
          <p className="font-mono text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
            Designed for reliability when you need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 border border-divider bg-background hover:bg-primary/10 transition-colors duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-text-secondary flex-1">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}