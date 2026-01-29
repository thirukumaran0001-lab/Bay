import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onBookCall: () => void;
  onLearnMore: () => void;
}

export function Hero({ onBookCall, onLearnMore }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '99.9%', label: 'Purity Grade', delay: '0ms' },
    { value: '24/7', label: 'Production', delay: '100ms' },
    { value: 'ISO', label: 'Certified', delay: '200ms' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-40 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}>
        <spline-viewer
          url="https://prod.spline.design/f0WUE-mimz7SW8il/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32 text-left">
        <div className="max-w-5xl">
          <h1 className="text-7xl sm:text-8xl lg:text-display-lg font-light mb-10 text-white leading-[0.95] animate-slideUp">
            Bay<br />Aluminium
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-normal mb-16 max-w-2xl leading-relaxed animate-slideUp" style={{ animationDelay: '100ms' }}>
            Premium aluminum ingots and alloys for automotive and industrial applications worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start mb-32 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <button
              onClick={onBookCall}
              className="group relative px-10 py-4 bg-brand-600 rounded-md text-white font-medium text-base overflow-hidden transition-all duration-300 flex items-center gap-3 hover:bg-brand-700 hover:shadow-brand-lg active:scale-[0.98]"
            >
              <span className="relative">Book a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
            </button>

            <button
              onClick={onLearnMore}
              className="group px-10 py-4 rounded-md border border-white/30 text-white font-medium text-base transition-all duration-300 hover:bg-white/5 hover:border-white/50 active:scale-[0.98]"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 left-8 sm:left-12 lg:left-16 grid grid-cols-3 gap-20 max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group cursor-default animate-slideUp relative"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-4xl font-semibold text-white mb-1.5 transition-all duration-300 group-hover:text-neutral-50">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm font-medium transition-colors duration-300 group-hover:text-neutral-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
