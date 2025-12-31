import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onLearnMore: () => void;
}

export function Hero({ onBookCall, onLearnMore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="absolute inset-0 opacity-30">
        <spline-viewer
          url="https://prod.spline.design/wy5ZRvozoQKCKgXR/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32 text-left">
        <div className="max-w-5xl">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light mb-12 leading-[0.95] tracking-[-0.04em]">
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">Bay</span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">Aluminium</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-light mb-16 max-w-3xl leading-relaxed">
            Premium aluminum ingots and alloys for automotive, aerospace, and industrial applications worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 items-start mb-32">
            <button
              onClick={onBookCall}
              className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-medium text-lg hover:from-orange-400 hover:via-amber-400 hover:to-yellow-400 transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-orange-500/50 hover:shadow-orange-400/70 hover:scale-105 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <span className="relative z-10">Book a Call</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={onLearnMore}
              className="px-12 py-5 border-2 border-cyan-400 text-cyan-300 font-medium text-lg hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-200 transition-all duration-300 hover:scale-105 rounded-lg backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 left-8 sm:left-12 lg:left-16 grid grid-cols-3 gap-24 max-w-4xl">
          <div className="group cursor-default transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-cyan-300 text-sm font-medium">Purity Grade</div>
          </div>
          <div className="group cursor-default transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-cyan-300 text-sm font-medium">Production</div>
          </div>
          <div className="group cursor-default transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent mb-2">ISO</div>
            <div className="text-cyan-300 text-sm font-medium">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
