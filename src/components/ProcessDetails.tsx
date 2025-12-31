import { ArrowLeft } from 'lucide-react';

interface ProcessDetailsProps {
  onBack: () => void;
}

export function ProcessDetails({ onBack }: ProcessDetailsProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">Our Process</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            Advanced aluminum smelting and quality testing protocols ensuring exceptional alloy standards
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Smelting Process</h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">1. Raw Material Preparation</div>
              <p className="text-gray-400 font-light leading-relaxed">
                High-grade aluminum scrap is carefully sorted and cleaned. We utilize advanced sorting technologies to ensure only premium materials enter our furnaces. Each batch is inspected for contaminants and foreign materials.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">2. Furnace Loading</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Materials are loaded into our state-of-the-art reverberatory furnaces. The loading sequence is precisely controlled to ensure optimal melting efficiency and energy utilization.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">3. Melting & Temperature Control</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Furnaces are heated to precisely 660-750°C. Advanced temperature monitoring systems maintain exact heat levels throughout the melting process, ensuring consistent alloy properties and minimal oxidation.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">4. Alloying & Refinement</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Precise amounts of alloying elements are added to create specific alloy compositions including ADC 12, LM24, A380, and custom specifications. Degassing agents remove hydrogen and other impurities.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">5. Dross Removal</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Surface impurities and oxide layers are systematically skimmed from the molten metal. Our advanced dross removal techniques maximize alloy yield while ensuring purity standards.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">6. Casting into Ingots</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Refined molten aluminum is poured into precision-engineered molds. Controlled cooling rates ensure optimal grain structure and mechanical properties. Each ingot is marked with batch identification for full traceability.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 max-w-4xl">
            <h3 className="text-2xl font-light mb-8">Advanced Process Controls</h3>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed">
              <p>Real-time spectrometric analysis monitors alloy composition throughout the melt</p>
              <p>Automated temperature control systems maintain ±3°C precision</p>
              <p>Continuous degassing systems ensure hydrogen levels below 0.15 ml/100g</p>
              <p>Energy-efficient furnace design reduces environmental impact by 30%</p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Quality Testing Protocols</h2>

          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Chemical Analysis</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Every batch undergoes rigorous spectroscopic testing to verify alloy composition.
              </p>
              <div className="space-y-3 text-gray-400 font-light text-sm">
                <p>Optical emission spectrometry</p>
                <p>X-ray fluorescence testing</p>
                <p>Wet chemical analysis verification</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6">Metallurgical Testing</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Advanced microscopy and mechanical testing ensure structural integrity.
              </p>
              <div className="space-y-3 text-gray-400 font-light text-sm">
                <p>Grain structure analysis</p>
                <p>Tensile strength testing</p>
                <p>Hardness measurements</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6">Physical Properties</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Comprehensive physical testing validates product specifications.
              </p>
              <div className="space-y-3 text-gray-400 font-light text-sm">
                <p>Density measurements</p>
                <p>Porosity analysis</p>
                <p>Surface quality inspection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">ADC 12 Specifications</h2>
          <p className="text-gray-400 font-light mb-12 max-w-4xl">
            We produce multiple alloy grades. Below shows our flagship ADC 12 composition:
          </p>

          <div className="max-w-4xl">
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div className="font-light text-sm text-gray-500">Element</div>
              <div className="font-light text-sm text-gray-500">Weight %</div>
              <div className="font-light text-sm text-gray-500">Tolerance</div>
            </div>

            <div className="space-y-6 mt-6">
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Silicon (Si)</div>
                <div className="text-gray-400 font-light">9.6 - 12.0%</div>
                <div className="text-gray-400 font-light">±0.2%</div>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Copper (Cu)</div>
                <div className="text-gray-400 font-light">1.5 - 3.5%</div>
                <div className="text-gray-400 font-light">±0.1%</div>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Iron (Fe)</div>
                <div className="text-gray-400 font-light">≤ 1.3%</div>
                <div className="text-gray-400 font-light">±0.05%</div>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Zinc (Zn)</div>
                <div className="text-gray-400 font-light">≤ 1.0%</div>
                <div className="text-gray-400 font-light">±0.05%</div>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Manganese (Mn)</div>
                <div className="text-gray-400 font-light">≤ 0.5%</div>
                <div className="text-gray-400 font-light">±0.02%</div>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Magnesium (Mg)</div>
                <div className="text-gray-400 font-light">≤ 0.3%</div>
                <div className="text-gray-400 font-light">±0.02%</div>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="font-light">Aluminum (Al)</div>
                <div className="text-gray-400 font-light">Balance</div>
                <div className="text-gray-400 font-light">-</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Industry-Leading Standards</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-16 max-w-4xl text-lg">
            Our commitment to excellence is backed by international certifications and continuous improvement processes.
          </p>
          <div className="grid md:grid-cols-3 gap-16 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-3">ISO 9001:2015</div>
              <div className="text-gray-500 font-light">Quality Management</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-3">ISO 14001</div>
              <div className="text-gray-500 font-light">Environmental Management</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-3">IATF 16949</div>
              <div className="text-gray-500 font-light">Automotive Quality</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
