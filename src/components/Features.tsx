import { Shield, Zap, Award, TrendingUp, Atom, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Superior Quality',
      description: 'Premium aluminum alloys with exceptional strength, durability, and corrosion resistance for demanding applications.'
    },
    {
      icon: Atom,
      title: 'Multiple Alloys',
      description: 'Comprehensive range including ADC 12, LM24, A380, and custom alloy compositions tailored to your specifications.'
    },
    {
      icon: Zap,
      title: 'Fast Production',
      description: 'State-of-the-art facilities enable rapid turnaround times without compromising quality.'
    },
    {
      icon: Award,
      title: 'Industry Certified',
      description: 'ISO 9001 certified processes and compliance with international aluminum standards.'
    },
    {
      icon: TrendingUp,
      title: 'Consistent Supply',
      description: 'Reliable inventory and production capacity to meet your ongoing demands.'
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'Worldwide delivery network ensuring your materials arrive safely and on schedule.'
    }
  ];

  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="text-white text-xs font-medium tracking-[0.15em] uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Industry-leading aluminum alloys including ADC 12, LM24, LM25, A7, A380, and custom specifications for automotive, aerospace, and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent"></div>
          <div className="relative">
            <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
              Our Alloy Range
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg font-light">
              We produce a comprehensive range of aluminum alloys meeting and exceeding international standards, with ADC 12 being our flagship product for die-casting applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-gray-300 font-light">ADC 12 - High silicon die-casting alloy (Si: 9.6-12%)</span>
              </div>
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-gray-300 font-light">LM24 - General purpose die-casting alloy</span>
              </div>
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-gray-300 font-light">LM25 - Sand and gravity die-casting alloy</span>
              </div>
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-gray-300 font-light">A7 - High-purity aluminum for electrical applications</span>
              </div>
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-gray-300 font-light">A380 - High-strength alloy for complex castings</span>
              </div>
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-gray-300 font-light">Custom compositions tailored to specifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
