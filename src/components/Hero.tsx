import { ArrowRight, Factory } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

export function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-900/10 to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300">
          <Factory className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Premium Aluminum Solutions</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
          Bay Aluminium
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Industry-Leading ADC 12 Aluminum Alloy
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Superior quality aluminum smelting with cutting-edge technology and precision engineering.
          Your trusted partner for high-performance aluminum solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBookCall}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-gray-800/30 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300 font-medium">Purity Grade</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/30 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300 font-medium">Production</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/30 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">ISO</div>
            <div className="text-gray-300 font-medium">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
