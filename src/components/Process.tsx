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

  return (
    <section className="py-40 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-12 tracking-tight leading-[1.1]">
            Our Process
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl font-light leading-relaxed">
            From molten metal to precision-engineered alloys, we transform raw aluminum into high-performance ingots through controlled metallurgical processes.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-t border-white/20 pt-12 grid md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-2">
                <div className="text-6xl font-light text-white/30">{step.step}</div>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-3xl font-light text-white mb-6">{step.title}</h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
