import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutUs() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: detailsRef, isVisible: detailsVisible } = useScrollAnimation();

  const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '50+', label: 'Global Partners' },
    { value: '99.9%', label: 'Purity Standard' }
  ];

  const details = [
    {
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience in metallurgy and production engineering'
    },
    {
      title: 'Certified Quality',
      description: 'ISO standards and industry certifications ensuring consistent quality across all products'
    },
    {
      title: 'Precision Focus',
      description: 'Meticulous attention to every detail in production and quality control processes'
    },
    {
      title: 'Global Reach',
      description: 'Serving automotive and industrial applications worldwide with reliable delivery'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div ref={headerRef} className={`mb-24 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl lg:text-display-md font-light text-neutral-950 mb-8 leading-[1.05]">
            About Bay Aluminium
          </h2>
          <div className="max-w-3xl">
            <p className="text-xl text-neutral-700 font-normal leading-relaxed mb-6">
              With over 5 years of proven excellence in aluminum smelting and production, Bay Aluminium has established itself as a trusted partner in the global metals industry.
            </p>
            <p className="text-lg text-neutral-600 font-normal leading-relaxed">
              Our team brings decades of combined experience in metallurgy, production engineering, and quality assurance, delivering superior quality aluminum products through precision engineering and unwavering dedication.
            </p>
          </div>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-3 gap-16 mb-24 py-12 border-y border-neutral-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group cursor-default transition-all duration-700 relative ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl font-semibold text-neutral-950 mb-2 transition-all duration-300 group-hover:text-brand-600">
                {stat.value}
              </div>
              <div className="text-neutral-600 font-medium text-sm transition-colors duration-300 group-hover:text-neutral-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div ref={detailsRef} className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className={`group pt-6 transition-all duration-700 cursor-default relative ${
                detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-12 h-px bg-brand-600 transition-all duration-500 group-hover:w-20"></div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-3 transition-all duration-300">
                {detail.title}
              </h3>
              <p className="text-base text-neutral-600 font-normal leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
