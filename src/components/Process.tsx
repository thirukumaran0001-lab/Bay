import { Flame, Beaker, CheckCircle, Package } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Flame,
      title: 'Melting & Smelting',
      description: 'Raw aluminum scrap is melted in high-efficiency reverberatory furnaces at 700-750°C. Impurities like iron, zinc, and oxides are removed through fluxing and degassing to achieve 99%+ purity molten aluminum base.',
      step: '01'
    },
    {
      icon: Beaker,
      title: 'Alloying & Composition',
      description: 'Precise amounts of silicon (9-12%), copper (2-3%), and other elements are added to create specific alloys: ADC 12 for die-casting, LM24 for automotive components, or A380 for high-pressure applications with exact compositional control.',
      step: '02'
    },
    {
      icon: CheckCircle,
      title: 'Casting & Solidification',
      description: 'Molten alloy is poured into pre-heated steel or graphite molds at controlled rates. The ingots solidify from outside-in, forming a dense crystalline structure. Each ingot weighs 7-25kg with uniform grain distribution for optimal mechanical properties.',
      step: '03'
    },
    {
      icon: Package,
      title: 'Quality Testing & Delivery',
      description: 'Spectrometric analysis verifies alloy composition. Physical testing checks density, hardness, and surface quality. Ingots are stamped with grade certification, packaged to prevent oxidation, and delivered with full material traceability documentation.',
      step: '04'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2.5 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
            <span className="text-red-600 text-xs font-medium tracking-[0.15em] uppercase">Our Process</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            The Aluminum Ingot Making Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            From molten metal to precision-engineered alloys, we transform raw aluminum into high-performance ingots through controlled metallurgical processes that ensure consistent quality and exact specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 hover:border-red-500 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative">
                  <div className="absolute top-6 right-6 text-7xl font-black text-gray-50 leading-none group-hover:text-red-50 transition-colors duration-500">
                    {step.step}
                  </div>

                  <div className="relative mb-6">
                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 relative">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-light relative">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
