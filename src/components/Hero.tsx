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
      <div className="absolute inset-0 opacity-30 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}>
        <spline-viewer
          url="https://prod.spline.design/wy5ZRvozoQKCKgXR/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32 text-left">
        <div className="max-w-5xl">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light mb-12 text-white leading-[0.95] tracking-[-0.04em] animate-slideUp">
            Bay<br />Aluminium
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-16 max-w-3xl leading-relaxed animate-slideUp" style={{ animationDelay: '100ms' }}>
            Premium aluminum ingots and alloys for automotive, aerospace, and industrial applications worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 items-start mb-32 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <button
              onClick={onBookCall}
              className="group relative px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-light text-lg overflow-hidden transition-all duration-500 flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative">Book a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
            </button>

            <button
              onClick={onLearnMore}
              className="group px-12 py-5 border border-white/20 text-white font-light text-lg transition-all duration-500 hover:scale-105 hover:bg-white/5 hover:border-white/40 hover:shadow-lg hover:shadow-white/5"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 left-8 sm:left-12 lg:left-16 grid grid-cols-3 gap-24 max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group cursor-default animate-slideUp"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-4xl font-light text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-100">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-light transition-colors duration-300 group-hover:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
