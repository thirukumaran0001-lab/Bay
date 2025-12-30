import { Shield, Zap, Award, TrendingUp, Atom, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Superior Quality',
      description: 'ADC 12 aluminum alloy with exceptional strength, durability, and corrosion resistance for demanding applications.'
    },
    {
      icon: Atom,
      title: 'Perfect Composition',
      description: 'Optimized silicon content (9.6-12%) ensuring excellent castability and mechanical properties.'
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
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-leading ADC 12 aluminum alloy for automotive, aerospace, and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                ADC 12 Specifications
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our ADC 12 aluminum alloy meets and exceeds industry standards with optimal composition for die-casting applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>Silicon (Si): 9.6-12.0%</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>Copper (Cu): 1.5-3.5%</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>Excellent fluidity and castability</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>High dimensional stability</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Atom className="w-32 h-32 text-cyan-400/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
