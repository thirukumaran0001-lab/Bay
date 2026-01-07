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
    <section id="about" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div ref={headerRef} className={`mb-32 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-black mb-12 tracking-tight leading-[1.1]">
            About Bay Aluminium
          </h2>
          <div className="max-w-4xl">
            <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed mb-8">
              With over 5 years of proven excellence in aluminum smelting and production, Bay Aluminium has established itself as a trusted partner in the global metals industry.
            </p>
            <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed">
              Our team brings decades of combined experience in metallurgy, production engineering, and quality assurance, delivering superior quality aluminum products through precision engineering and unwavering dedication.
            </p>
          </div>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-3 gap-24 mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group cursor-default transition-all duration-700 relative ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl font-light text-black mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-red-600">
                {stat.value}
              </div>
              <div className="text-gray-600 font-light transition-colors duration-300 group-hover:text-red-800">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div ref={detailsRef} className="grid md:grid-cols-2 gap-16">
          {details.map((detail, index) => (
            <div
              key={index}
              className={`group border-t-2 border-gray-200 pt-8 transition-all duration-700 cursor-default hover:border-red-500 relative ${
                detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 h-0.5 bg-red-500 w-0 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-2xl font-light text-black mb-6 transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-600">
                {detail.title}
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
