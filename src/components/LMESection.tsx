import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { LMEWidget } from './LMEWidget';

export function LMESection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-40 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Live Market Prices
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-6">
                Stay informed with real-time aluminum pricing from the London Metal Exchange. Our transparent pricing model ensures you always get competitive rates for premium quality products.
              </p>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></div>
                  <p className="text-base font-light">Direct LME pricing with no hidden margins</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></div>
                  <p className="text-base font-light">Updated continuously throughout trading hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></div>
                  <p className="text-base font-light">Transparent pricing for all aluminum grades</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <LMEWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
