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
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 rounded bg-red-600 mb-6">
            <span className="text-white text-sm font-bold tracking-wider uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Industry-leading ADC 12 aluminum alloy for automotive, aerospace, and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 hover:border-red-600 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="p-8">
                  <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 p-12 border-l-8 border-red-600">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-4 inline-block">
              ADC 12 Specifications
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Our ADC 12 aluminum alloy meets and exceeds industry standards with optimal composition for die-casting applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-red-600 shadow">
                <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                <span className="font-bold text-gray-900">Silicon (Si): 9.6-12.0%</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-red-600 shadow">
                <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                <span className="font-bold text-gray-900">Copper (Cu): 1.5-3.5%</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-red-600 shadow">
                <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                <span className="font-bold text-gray-900">Excellent fluidity and castability</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-red-600 shadow">
                <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                <span className="font-bold text-gray-900">High dimensional stability</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-red-600 shadow">
                <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                <span className="font-bold text-gray-900">Superior corrosion resistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
