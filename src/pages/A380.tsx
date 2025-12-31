import { ArrowLeft, CheckCircle2, Cpu, Award, Layers, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export function A380() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light mb-6">A380 Alloy</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Industry-standard aluminum alloy for precision die-casting with optimal mechanical properties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-light mb-8">Overview</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              A380 is one of the most widely used aluminum die-casting alloys worldwide, recognized for its
              exceptional balance of castability, mechanical properties, and cost-effectiveness. As the American
              standard equivalent to LM24 (British) and ADC 10 (Japanese), it serves as the global benchmark
              for pressure die-casting applications.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Our A380 ingots are produced with precise control over chemical composition and metallurgical
              structure, ensuring consistent performance across production runs. This alloy is the preferred
              choice for manufacturers requiring reliable, high-quality castings with excellent surface finish.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Chemical Composition</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Silicon (Si)</span>
                <span className="font-light">7.5 - 9.5%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Copper (Cu)</span>
                <span className="font-light">3.0 - 4.0%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Magnesium (Mg)</span>
                <span className="font-light">≤ 0.1%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Iron (Fe)</span>
                <span className="font-light">≤ 2.0%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Zinc (Zn)</span>
                <span className="font-light">≤ 3.0%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Nickel (Ni)</span>
                <span className="font-light">≤ 0.5%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Tin (Sn)</span>
                <span className="font-light">≤ 0.35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Aluminum (Al)</span>
                <span className="font-light">Balance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Key Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Award className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Optimal Fluidity</h3>
              <p className="text-gray-400 font-light">
                Excellent mold-filling characteristics enable complex shapes with fine details and thin walls
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Layers className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Dimensional Stability</h3>
              <p className="text-gray-400 font-light">
                Minimal shrinkage and warping ensure tight tolerances and consistent part dimensions
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <CheckCircle2 className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Versatile Finishing</h3>
              <p className="text-gray-400 font-light">
                Excellent surface finish straight from the die, accepts various surface treatments
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Cpu className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Automotive & Transportation</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Engine brackets and mounts</li>
                <li>• Transmission housings</li>
                <li>• Wheel spacers and hubs</li>
                <li>• Fuel system components</li>
                <li>• Air conditioning parts</li>
                <li>• Structural chassis components</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Package className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Industrial & Consumer</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Telecommunications equipment</li>
                <li>• Electrical connectors and housings</li>
                <li>• Power tool components</li>
                <li>• Appliance parts and hardware</li>
                <li>• Sporting goods and recreational equipment</li>
                <li>• Furniture and architectural fittings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Mechanical Properties</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-light mb-2">324 MPa</div>
                <div className="text-gray-400 font-light">Tensile Strength</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">159 MPa</div>
                <div className="text-gray-400 font-light">Yield Strength</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">3.5%</div>
                <div className="text-gray-400 font-light">Elongation</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">80 HB</div>
                <div className="text-gray-400 font-light">Hardness</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Processing Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-light mb-4">Die-Casting Benefits</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Reduced cycle times due to excellent fluidity</li>
                <li>• Lower rejection rates from superior castability</li>
                <li>• Extended die life from balanced chemistry</li>
                <li>• Consistent quality across production runs</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-light mb-4">Post-Processing</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Excellent machinability for secondary operations</li>
                <li>• Accepts anodizing and powder coating</li>
                <li>• Can be chromate conversion coated</li>
                <li>• Suitable for painting and plating</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-light mb-8">Ingot Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6 text-white/80">Standard Formats</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• 8 kg ingots (350mm x 90mm x 50mm)</li>
                <li>• 10 kg ingots (400mm x 100mm x 50mm)</li>
                <li>• 20 kg sow ingots (500mm x 120mm x 65mm)</li>
                <li>• 500 kg pig ingots for high-volume operations</li>
                <li>• Custom configurations available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6 text-white/80">Quality Certification</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• ASTM B85/B85M A380.0 compliant</li>
                <li>• Complete chemical analysis report</li>
                <li>• ISO 9001:2015 certified manufacturing</li>
                <li>• Lot traceability and documentation</li>
                <li>• Independent third-party testing available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block px-12 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-sm font-light"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
