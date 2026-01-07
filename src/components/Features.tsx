import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Features() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { elementRef: alloysRef, isVisible: alloysVisible } = useScrollAnimation();

  const features = [
    {
      title: 'Superior Quality',
      description: 'Premium aluminum alloys with exceptional strength, durability, and corrosion resistance for demanding applications.'
    },
    {
      title: 'Multiple Alloys',
      description: 'Comprehensive range including ADC12, LM25, and LM6 alloys tailored to your specifications.'
    },
    {
      title: 'Dross Recovery',
      description: 'Advanced dross recovery services to maximize material efficiency and reduce waste in your operations.'
    },
    {
      title: 'SW104 Licensed',
      description: 'Fully licensed and compliant with SW104 regulations for waste management and recycling operations.'
    },
    {
      title: 'Fast Production',
      description: 'State-of-the-art facilities enable rapid turnaround times without compromising quality.'
    },
    {
      title: 'Industry Certified',
      description: 'ISO 9001 certified processes and compliance with international aluminum standards.'
    }
  ];

  const alloys = [
    { name: 'ADC12 - High silicon die-casting alloy (Si: 9.6-12%)', path: '/adc12' },
    { name: 'LM25 - Sand and gravity die-casting alloy', path: '/lm25' },
    { name: 'LM6 - High-purity aluminum-silicon alloy for general casting', path: '/lm6' }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div ref={headerRef} className={`mb-32 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-black mb-12 tracking-tight leading-[1.1]">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl font-light leading-relaxed">
            Industry-leading aluminum alloys for automotive and industrial applications worldwide.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 gap-16 mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group border-t-2 border-gray-200 pt-8 transition-all duration-700 cursor-default hover:border-red-500 relative ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 h-0.5 bg-red-500 w-0 group-hover:w-24 transition-all duration-500"></div>
              <h3 className="text-2xl font-light text-black mb-6 transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-600">{feature.title}</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div ref={alloysRef} className={`border-t border-gray-200 pt-16 transition-all duration-1000 ${alloysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-4xl sm:text-5xl font-light text-black mb-16 tracking-tight">
            Our Alloy Range
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {alloys.map((alloy, index) => (
              <Link
                key={index}
                to={alloy.path}
                className={`group flex items-start gap-4 transition-all duration-700 hover:translate-x-2 cursor-pointer ${
                  alloysVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-black mt-3 flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:bg-red-600 group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
                <span className="text-lg text-gray-700 font-light leading-relaxed group-hover:text-gray-900">{alloy.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
