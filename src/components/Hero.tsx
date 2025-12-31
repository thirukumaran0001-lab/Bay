import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onLearnMore: () => void;
}

export function Hero({ onBookCall, onLearnMore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <spline-viewer
          url="https://prod.spline.design/wy5ZRvozoQKCKgXR/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32 text-left">
        <div className="max-w-5xl">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light mb-12 text-white leading-[0.95] tracking-[-0.04em]">
            Bay<br />Aluminium
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-16 max-w-3xl leading-relaxed">
            Premium aluminum ingots and alloys for automotive, aerospace, and industrial applications worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 items-start">
            <button
              onClick={onBookCall}
              className="group px-12 py-5 bg-white text-black font-medium text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={onLearnMore}
              className="px-12 py-5 border border-white/30 text-white font-medium text-lg hover:border-white transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 left-8 sm:left-12 lg:left-16 grid grid-cols-3 gap-16 max-w-4xl">
          <div>
            <div className="text-4xl font-light text-white mb-2">99.9%</div>
            <div className="text-gray-400 text-sm font-light">Purity Grade</div>
          </div>
          <div>
            <div className="text-4xl font-light text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm font-light">Production</div>
          </div>
          <div>
            <div className="text-4xl font-light text-white mb-2">ISO</div>
            <div className="text-gray-400 text-sm font-light">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
