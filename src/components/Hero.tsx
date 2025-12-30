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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-red-600/90 border border-red-500 mb-8 backdrop-blur-sm hover:bg-red-600 transition-all duration-300">
          <Factory className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-semibold tracking-wide">PREMIUM ALUMINUM SOLUTIONS</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
          Bay Aluminium
        </h1>

        <p className="text-2xl sm:text-3xl text-red-500 font-semibold mb-4 max-w-3xl mx-auto">
          Premium Aluminum Ingots & Alloys
        </p>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Precision smelting operations delivering superior quality aluminum ingots including ADC 12, LM24, A380, and custom alloys for automotive, aerospace, and industrial applications worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBookCall}
            className="group px-8 py-4 bg-red-600 text-white font-bold rounded shadow-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center gap-2"
          >
            Book a Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onLearnMore}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-l-4 border-red-600 backdrop-blur-sm hover:border-red-500 transition-all duration-300 shadow-lg">
            <div className="text-4xl font-bold text-red-500 mb-2">99.9%</div>
            <div className="text-gray-300 font-semibold text-sm tracking-wide uppercase">Purity Grade</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-l-4 border-red-600 backdrop-blur-sm hover:border-red-500 transition-all duration-300 shadow-lg">
            <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-300 font-semibold text-sm tracking-wide uppercase">Production</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-l-4 border-red-600 backdrop-blur-sm hover:border-red-500 transition-all duration-300 shadow-lg">
            <div className="text-4xl font-bold text-red-500 mb-2">ISO</div>
            <div className="text-gray-300 font-semibold text-sm tracking-wide uppercase">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
