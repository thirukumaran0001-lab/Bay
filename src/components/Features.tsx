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

  const colors = [
    { gradient: 'from-orange-500 to-red-500', bg: 'from-orange-50 to-red-50', border: 'border-orange-500', text: 'text-orange-600' },
    { gradient: 'from-blue-500 to-cyan-500', bg: 'from-blue-50 to-cyan-50', border: 'border-blue-500', text: 'text-blue-600' },
    { gradient: 'from-emerald-500 to-teal-500', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-500', text: 'text-emerald-600' },
    { gradient: 'from-violet-500 to-purple-500', bg: 'from-violet-50 to-purple-50', border: 'border-violet-500', text: 'text-violet-600' },
    { gradient: 'from-pink-500 to-rose-500', bg: 'from-pink-50 to-rose-50', border: 'border-pink-500', text: 'text-pink-600' },
    { gradient: 'from-amber-500 to-yellow-500', bg: 'from-amber-50 to-yellow-50', border: 'border-amber-500', text: 'text-amber-600' }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-white via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-blue-600 bg-clip-text text-transparent mb-12 tracking-tight leading-[1.1]">
            Excellence in Every Ingot
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-4xl font-light leading-relaxed">
            Industry-leading aluminum alloys for automotive, aerospace, and industrial applications worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          {features.map((feature, index) => (
            <div key={index} className={`group relative border-l-4 ${colors[index].border} pl-8 py-6 rounded-r-xl bg-gradient-to-r ${colors[index].bg} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
              <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-gradient-to-br ${colors[index].gradient} animate-pulse"></div>
              <h3 className={`text-2xl font-bold ${colors[index].text} mb-6 group-hover:scale-105 transition-transform duration-300`}>{feature.title}</h3>
              <p className="text-lg text-slate-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative pt-16 pb-12 px-12 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)] rounded-3xl"></div>
          <h3 className="relative text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent mb-16 tracking-tight">
            Our Alloy Range
          </h3>
          <div className="relative grid md:grid-cols-2 gap-8">
            {alloys.map((alloy, index) => (
              <div key={index} className="group flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${colors[index % colors.length].gradient} mt-2 flex-shrink-0 group-hover:scale-150 group-hover:animate-pulse transition-all duration-300`}></div>
                <span className="text-lg text-white font-medium leading-relaxed">{alloy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
