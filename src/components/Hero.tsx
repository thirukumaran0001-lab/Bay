import { ArrowRight, Factory } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onLearnMore: () => void;
}

export function Hero({ onBookCall, onLearnMore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <spline-viewer
          url="https://prod.spline.design/2iA7ifyFKCQ9SoZK/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-gray-900/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
        <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 animate-fadeIn">
          <Factory className="w-4 h-4 text-red-400" />
          <span className="text-white text-xs font-medium tracking-[0.15em] uppercase">Premium Aluminum Solutions</span>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.1] tracking-[-0.02em] animate-slideUp">
          Bay Aluminium
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl text-red-400 font-light mb-6 max-w-4xl mx-auto tracking-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Premium Aluminum Ingots & Alloys
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed font-light animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Precision smelting operations delivering superior quality aluminum ingots including ADC 12, LM24, LM25, A7, A380, and custom alloys for automotive, aerospace, and industrial applications worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={onBookCall}
            className="group relative px-10 py-4 bg-red-600 text-white font-medium rounded-lg shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:bg-red-500 transition-all duration-500 hover:scale-105 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Book a Call</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <button
            onClick={onLearnMore}
            className="group px-10 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 backdrop-blur-sm transition-all duration-500 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <div className="group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-red-400 mb-3 tracking-tight">99.9%</div>
              <div className="text-gray-300 font-light text-xs tracking-[0.15em] uppercase">Purity Grade</div>
            </div>
          </div>
          <div className="group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-red-400 mb-3 tracking-tight">24/7</div>
              <div className="text-gray-300 font-light text-xs tracking-[0.15em] uppercase">Production</div>
            </div>
          </div>
          <div className="group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-red-400 mb-3 tracking-tight">ISO</div>
              <div className="text-gray-300 font-light text-xs tracking-[0.15em] uppercase">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
