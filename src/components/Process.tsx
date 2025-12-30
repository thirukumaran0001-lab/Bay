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
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 rounded bg-red-600 mb-6">
            <span className="text-white text-sm font-bold tracking-wider uppercase">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The Aluminum Ingot Making Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From molten metal to precision-engineered alloys, we transform raw aluminum into high-performance ingots through controlled metallurgical processes that ensure consistent quality and exact specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

                <div className="p-8">
                  <div className="absolute top-6 right-6 text-6xl font-black text-gray-100 leading-none">
                    {step.step}
                  </div>

                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
