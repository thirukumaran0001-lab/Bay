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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div ref={headerRef} className={`mb-24 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl lg:text-display-md font-light text-neutral-950 mb-8 leading-[1.05]">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl font-normal leading-relaxed">
            Industry-leading aluminum alloys for automotive and industrial applications worldwide.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group pt-6 transition-all duration-700 cursor-default relative ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-12 h-px bg-brand-600 transition-all duration-500 group-hover:w-20"></div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-3 transition-all duration-300">{feature.title}</h3>
              <p className="text-base text-neutral-600 font-normal leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div ref={alloysRef} className={`border-t border-neutral-200 pt-16 transition-all duration-1000 ${alloysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl sm:text-4xl font-light text-neutral-950 mb-12">
            Our Alloy Range
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {alloys.map((alloy, index) => (
              <Link
                key={index}
                to={alloy.path}
                className={`group flex items-start gap-4 p-5 rounded-md border border-neutral-200 transition-all duration-300 hover:border-brand-600 hover:shadow-premium cursor-pointer ${
                  alloysVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 mt-2 flex-shrink-0 transition-all duration-300 group-hover:bg-brand-600"></div>
                <span className="text-base text-neutral-700 font-medium leading-relaxed group-hover:text-neutral-950">{alloy.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
