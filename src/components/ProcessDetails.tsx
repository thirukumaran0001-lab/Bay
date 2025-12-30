import { ArrowLeft, Factory, Shield, Thermometer, FlaskConical, Microscope, CheckCircle, Settings } from 'lucide-react';

interface ProcessDetailsProps {
  onBack: () => void;
}

export function ProcessDetails({ onBack }: ProcessDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-gray-900/95">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-red-600/90 border border-red-500 mb-6 backdrop-blur-sm">
              <Factory className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold tracking-wide">DETAILED PROCESSES</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Our Smelting Excellence</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced aluminum smelting processes for multiple alloy grades backed by rigorous quality testing protocols
            </p>
          </div>

          <div className="space-y-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Thermometer className="w-8 h-8 text-red-500" />
                Smelting Process
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Raw Material Preparation</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    High-grade aluminum scrap is carefully sorted and cleaned. We utilize advanced sorting technologies to ensure only premium materials enter our furnaces. Each batch is inspected for contaminants and foreign materials.
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Furnace Loading</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Materials are loaded into our state-of-the-art reverberatory furnaces. The loading sequence is precisely controlled to ensure optimal melting efficiency and energy utilization.
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Melting & Temperature Control</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Furnaces are heated to precisely 660-750°C. Advanced temperature monitoring systems maintain exact heat levels throughout the melting process, ensuring consistent alloy properties and minimal oxidation.
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Alloying & Refinement</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Precise amounts of alloying elements are added to create specific alloy compositions including ADC 12, LM24, A380, and custom specifications. Degassing agents remove hydrogen and other impurities, while flux treatments eliminate oxide inclusions.
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Dross Removal</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Surface impurities and oxide layers are systematically skimmed from the molten metal. Our advanced dross removal techniques maximize alloy yield while ensuring purity standards.
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Casting into Ingots</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Refined molten aluminum is poured into precision-engineered molds. Controlled cooling rates ensure optimal grain structure and mechanical properties. Each ingot is marked with batch identification for full traceability.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-gray-800 border-l-4 border-red-600 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-red-500" />
                  Advanced Process Controls
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time spectrometric analysis monitors alloy composition throughout the melt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Automated temperature control systems maintain ±3°C precision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Continuous degassing systems ensure hydrogen levels below 0.15 ml/100g</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Energy-efficient furnace design reduces environmental impact by 30%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-red-500" />
                Quality Testing Protocols
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <FlaskConical className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Chemical Analysis</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Every batch undergoes rigorous spectroscopic testing to verify alloy composition.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Optical emission spectrometry
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      X-ray fluorescence testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Wet chemical analysis verification
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <Microscope className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Metallurgical Testing</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Advanced microscopy and mechanical testing ensure structural integrity.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Grain structure analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Tensile strength testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Hardness measurements
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-all duration-300">
                  <Thermometer className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Physical Properties</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Comprehensive physical testing validates product specifications.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Density measurements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Porosity analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      Surface quality inspection
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">ADC 12 Alloy Specifications (Example)</h3>
                <p className="text-gray-400 mb-4 text-sm">We produce multiple alloy grades. Below shows our flagship ADC 12 composition:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-4 px-4 text-red-500 font-semibold">Element</th>
                        <th className="py-4 px-4 text-red-500 font-semibold">Weight %</th>
                        <th className="py-4 px-4 text-red-500 font-semibold">Tolerance</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-medium">Silicon (Si)</td>
                        <td className="py-3 px-4">9.6 - 12.0%</td>
                        <td className="py-3 px-4">±0.2%</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-medium">Copper (Cu)</td>
                        <td className="py-3 px-4">1.5 - 3.5%</td>
                        <td className="py-3 px-4">±0.1%</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-medium">Iron (Fe)</td>
                        <td className="py-3 px-4">≤ 1.3%</td>
                        <td className="py-3 px-4">±0.05%</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-medium">Zinc (Zn)</td>
                        <td className="py-3 px-4">≤ 1.0%</td>
                        <td className="py-3 px-4">±0.05%</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-medium">Manganese (Mn)</td>
                        <td className="py-3 px-4">≤ 0.5%</td>
                        <td className="py-3 px-4">±0.02%</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-medium">Magnesium (Mg)</td>
                        <td className="py-3 px-4">≤ 0.3%</td>
                        <td className="py-3 px-4">±0.02%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Aluminum (Al)</td>
                        <td className="py-3 px-4">Balance</td>
                        <td className="py-3 px-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Industry-Leading Quality Standards</h2>
              <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
                Our commitment to excellence is backed by international certifications and continuous improvement processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">ISO 9001:2015</div>
                  <div className="text-white/80 text-sm">Quality Management</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">ISO 14001</div>
                  <div className="text-white/80 text-sm">Environmental Management</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">IATF 16949</div>
                  <div className="text-white/80 text-sm">Automotive Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
