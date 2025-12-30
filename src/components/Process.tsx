import { Flame, Beaker, CheckCircle, Package } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Flame,
      title: 'Smelting',
      description: 'Advanced high-temperature smelting process with precision temperature control and monitoring.',
      step: '01'
    },
    {
      icon: Beaker,
      title: 'Alloying',
      description: 'Carefully controlled alloying process to achieve the perfect ADC 12 composition and properties.',
      step: '02'
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Rigorous testing and quality assurance at every stage to ensure superior product standards.',
      step: '03'
    },
    {
      icon: Package,
      title: 'Delivery',
      description: 'Secure packaging and efficient logistics to deliver your aluminum alloy on time, every time.',
      step: '04'
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Precision at Every Stage
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From raw materials to finished product, our state-of-the-art process ensures unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 text-6xl font-bold text-cyan-500/5 leading-none p-4">
                  {step.step}
                </div>

                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
