import { ArrowLeft, CheckCircle2, Factory, Wrench, Cpu, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ADC12() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light mb-6">ADC 12 Alloy</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Premium die-casting aluminum alloy with exceptional fluidity and pressure tightness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-light mb-8">Overview</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              ADC 12 is a high-grade aluminum die-casting alloy widely recognized for its superior casting properties.
              This alloy is the Japanese equivalent to A383 and features excellent fluidity, making it ideal for
              complex die-casting applications requiring intricate details and thin walls.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Our ADC 12 ingots are manufactured using state-of-the-art smelting technology, ensuring consistent
              chemical composition and exceptional mechanical properties that meet international standards.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Chemical Composition</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Silicon (Si)</span>
                <span className="font-light">9.6 - 12.0%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Copper (Cu)</span>
                <span className="font-light">1.5 - 3.5%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Magnesium (Mg)</span>
                <span className="font-light">≤ 0.3%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Iron (Fe)</span>
                <span className="font-light">≤ 1.3%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Zinc (Zn)</span>
                <span className="font-light">≤ 1.0%</span>
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
              <Factory className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Excellent Castability</h3>
              <p className="text-gray-400 font-light">
                Superior fluidity allows for complex geometries and thin-walled sections with minimal defects
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Wrench className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">High Strength</h3>
              <p className="text-gray-400 font-light">
                Tensile strength of 240-280 MPa with good dimensional stability at elevated temperatures
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <CheckCircle2 className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Pressure Tightness</h3>
              <p className="text-gray-400 font-light">
                Excellent resistance to porosity, ideal for components requiring leak-proof performance
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Cpu className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Automotive Components</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Engine blocks and cylinder heads</li>
                <li>• Transmission cases</li>
                <li>• Pump housings</li>
                <li>• Manifolds and brackets</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Package className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Industrial Equipment</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Power tool housings</li>
                <li>• Electrical enclosures</li>
                <li>• Heat sinks and cooling systems</li>
                <li>• General machinery components</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-light mb-8">Ingot Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6 text-white/80">Standard Sizes</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• 7 kg ingots (300mm x 90mm x 45mm)</li>
                <li>• 10 kg ingots (400mm x 100mm x 50mm)</li>
                <li>• 20 kg T-bar ingots</li>
                <li>• Custom sizes available upon request</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6 text-white/80">Quality Assurance</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• Full chemical analysis certificate</li>
                <li>• ISO 9001:2015 certified production</li>
                <li>• Third-party testing available</li>
                <li>• Traceability for every batch</li>
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
