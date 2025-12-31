import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function A380() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">A380 Alloy</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            Industry-standard aluminum alloy for precision die-casting with optimal mechanical properties
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Overview</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              A380 is one of the most widely used aluminum die-casting alloys worldwide, recognized for its
              exceptional balance of castability, mechanical properties, and cost-effectiveness. As the American
              standard equivalent to LM24 (British) and ADC 10 (Japanese), it serves as the global benchmark
              for pressure die-casting applications.
            </p>
            <p>
              Our A380 ingots are produced with precise control over chemical composition and metallurgical
              structure, ensuring consistent performance across production runs. This alloy is the preferred
              choice for manufacturers requiring reliable, high-quality castings with excellent surface finish.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Chemical Composition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-2">7.5-9.5%</div>
              <div className="text-gray-500 font-light text-sm">Silicon (Si)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">3.0-4.0%</div>
              <div className="text-gray-500 font-light text-sm">Copper (Cu)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.1%</div>
              <div className="text-gray-500 font-light text-sm">Magnesium (Mg)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 2.0%</div>
              <div className="text-gray-500 font-light text-sm">Iron (Fe)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 3.0%</div>
              <div className="text-gray-500 font-light text-sm">Zinc (Zn)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.5%</div>
              <div className="text-gray-500 font-light text-sm">Nickel (Ni)</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Key Properties</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Optimal Fluidity</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Excellent mold-filling characteristics enable complex shapes with fine details and thin walls
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Dimensional Stability</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Minimal shrinkage and warping ensure tight tolerances and consistent part dimensions
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Versatile Finishing</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Excellent surface finish straight from the die, accepts various surface treatments
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Mechanical Properties</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl">
            <div>
              <div className="text-5xl font-light mb-4">324 MPa</div>
              <div className="text-gray-500 font-light">Tensile Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">159 MPa</div>
              <div className="text-gray-500 font-light">Yield Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">3.5%</div>
              <div className="text-gray-500 font-light">Elongation</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">80 HB</div>
              <div className="text-gray-500 font-light">Hardness</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Applications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Automotive & Transportation</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Engine brackets and mounts</p>
                <p>Transmission housings</p>
                <p>Wheel spacers and hubs</p>
                <p>Fuel system components</p>
                <p>Air conditioning parts</p>
                <p>Structural chassis components</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Industrial & Consumer</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Telecommunications equipment</p>
                <p>Electrical connectors and housings</p>
                <p>Power tool components</p>
                <p>Appliance parts and hardware</p>
                <p>Sporting goods and recreational equipment</p>
                <p>Furniture and architectural fittings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Processing Advantages</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Die-Casting Benefits</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Reduced cycle times due to excellent fluidity</p>
                <p>Lower rejection rates from superior castability</p>
                <p>Extended die life from balanced chemistry</p>
                <p>Consistent quality across production runs</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Post-Processing</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Excellent machinability for secondary operations</p>
                <p>Accepts anodizing and powder coating</p>
                <p>Can be chromate conversion coated</p>
                <p>Suitable for painting and plating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Ingot Specifications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Standard Formats</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>8 kg ingots (350mm x 90mm x 50mm)</p>
                <p>10 kg ingots (400mm x 100mm x 50mm)</p>
                <p>20 kg sow ingots (500mm x 120mm x 65mm)</p>
                <p>500 kg pig ingots for high-volume operations</p>
                <p>Custom configurations available</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Quality Certification</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>ASTM B85/B85M A380.0 compliant</p>
                <p>Complete chemical analysis report</p>
                <p>ISO 9001:2015 certified manufacturing</p>
                <p>Lot traceability and documentation</p>
                <p>Independent third-party testing available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-12 py-5 border border-white/30 text-white font-medium text-lg hover:border-white transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
