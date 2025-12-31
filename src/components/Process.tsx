export function Process() {
  const steps = [
    {
      title: 'Melting & Smelting',
      description: 'Raw aluminum scrap is melted in high-efficiency reverberatory furnaces at 700-750°C, removing impurities to achieve 99%+ purity molten aluminum base.',
      step: '01'
    },
    {
      title: 'Alloying & Composition',
      description: 'Precise amounts of silicon, copper, and other elements are added to create specific alloys like ADC 12, LM24, or A380 with exact compositional control.',
      step: '02'
    },
    {
      title: 'Casting & Solidification',
      description: 'Molten alloy is poured into pre-heated molds at controlled rates, forming ingots with uniform grain distribution for optimal mechanical properties.',
      step: '03'
    },
    {
      title: 'Quality Testing & Delivery',
      description: 'Spectrometric analysis verifies composition while physical testing checks density and hardness. Ingots are certified and delivered with full traceability.',
      step: '04'
    }
  ];

  const stepColors = [
    { gradient: 'from-red-500 via-orange-500 to-amber-500', glow: 'shadow-orange-500/50', ring: 'ring-orange-400' },
    { gradient: 'from-amber-500 via-yellow-500 to-lime-500', glow: 'shadow-yellow-500/50', ring: 'ring-yellow-400' },
    { gradient: 'from-cyan-500 via-blue-500 to-indigo-500', glow: 'shadow-blue-500/50', ring: 'ring-blue-400' },
    { gradient: 'from-emerald-500 via-teal-500 to-cyan-500', glow: 'shadow-teal-500/50', ring: 'ring-teal-400' }
  ];

  return (
    <section className="py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,146,60,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent mb-12 tracking-tight leading-[1.1]">
            Our Process
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl font-light leading-relaxed">
            From molten metal to precision-engineered alloys, we transform raw aluminum into high-performance ingots through controlled metallurgical processes.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative border-l-4 border-transparent hover:${stepColors[index].ring} pl-12 py-8 rounded-r-2xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 hover:to-white/5 hover:shadow-2xl ${stepColors[index].glow} transition-all duration-500 hover:scale-[1.02]`}
            >
              <div className={`absolute -left-8 top-8 w-16 h-16 rounded-full bg-gradient-to-br ${stepColors[index].gradient} flex items-center justify-center font-bold text-2xl text-white shadow-xl ${stepColors[index].glow} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                {step.step}
              </div>
              <div className="pl-8">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${stepColors[index].gradient} bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform duration-300`}>{step.title}</h3>
                <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
