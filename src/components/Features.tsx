export function Features() {
  const features = [
    {
      title: 'Superior Quality',
      description: 'Premium aluminum alloys with exceptional strength, durability, and corrosion resistance for demanding applications.'
    },
    {
      title: 'Multiple Alloys',
      description: 'Comprehensive range including ADC 12, LM24, A380, and custom alloy compositions tailored to your specifications.'
    },
    {
      title: 'Fast Production',
      description: 'State-of-the-art facilities enable rapid turnaround times without compromising quality.'
    },
    {
      title: 'Industry Certified',
      description: 'ISO 9001 certified processes and compliance with international aluminum standards.'
    },
    {
      title: 'Consistent Supply',
      description: 'Reliable inventory and production capacity to meet your ongoing demands.'
    },
    {
      title: 'Global Shipping',
      description: 'Worldwide delivery network ensuring your materials arrive safely and on schedule.'
    }
  ];

  const alloys = [
    'ADC 12 - High silicon die-casting alloy (Si: 9.6-12%)',
    'LM24 - General purpose die-casting alloy',
    'LM25 - Sand and gravity die-casting alloy',
    'A7 - High-purity aluminum for electrical applications',
    'A380 - High-strength alloy for complex castings',
    'Custom compositions tailored to specifications'
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-black mb-12 tracking-tight leading-[1.1]">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl font-light leading-relaxed">
            Industry-leading aluminum alloys for automotive, aerospace, and industrial applications worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-light text-black mb-6">{feature.title}</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-4xl sm:text-5xl font-light text-black mb-16 tracking-tight">
            Our Alloy Range
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {alloys.map((alloy, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-black mt-3 flex-shrink-0"></div>
                <span className="text-lg text-gray-700 font-light leading-relaxed">{alloy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
