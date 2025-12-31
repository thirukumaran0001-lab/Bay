import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ADC12() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">ADC 12 Alloy</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            Premium die-casting aluminum alloy with exceptional fluidity and pressure tightness
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Overview</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              ADC 12 is a high-grade aluminum die-casting alloy widely recognized for its superior casting properties.
              This alloy is the Japanese equivalent to A383 and features excellent fluidity, making it ideal for
              complex die-casting applications requiring intricate details and thin walls.
            </p>
            <p>
              Our ADC 12 ingots are manufactured using state-of-the-art smelting technology, ensuring consistent
              chemical composition and exceptional mechanical properties that meet international standards.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Chemical Composition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-2">9.6-12%</div>
              <div className="text-gray-500 font-light text-sm">Silicon (Si)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">1.5-3.5%</div>
              <div className="text-gray-500 font-light text-sm">Copper (Cu)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.3%</div>
              <div className="text-gray-500 font-light text-sm">Magnesium (Mg)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 1.3%</div>
              <div className="text-gray-500 font-light text-sm">Iron (Fe)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 1.0%</div>
              <div className="text-gray-500 font-light text-sm">Zinc (Zn)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">Balance</div>
              <div className="text-gray-500 font-light text-sm">Aluminum (Al)</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Key Properties</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Excellent Castability</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Superior fluidity allows for complex geometries and thin-walled sections with minimal defects
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">High Strength</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Tensile strength of 240-280 MPa with good dimensional stability at elevated temperatures
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Pressure Tightness</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Excellent resistance to porosity, ideal for components requiring leak-proof performance
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Applications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Automotive Components</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Engine blocks and cylinder heads</p>
                <p>Transmission cases</p>
                <p>Pump housings</p>
                <p>Manifolds and brackets</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Industrial Equipment</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Power tool housings</p>
                <p>Electrical enclosures</p>
                <p>Heat sinks and cooling systems</p>
                <p>General machinery components</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Ingot Specifications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Standard Sizes</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>7 kg ingots (300mm x 90mm x 45mm)</p>
                <p>10 kg ingots (400mm x 100mm x 50mm)</p>
                <p>20 kg T-bar ingots</p>
                <p>Custom sizes available upon request</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Quality Assurance</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>Full chemical analysis certificate</p>
                <p>ISO 9001:2015 certified production</p>
                <p>Third-party testing available</p>
                <p>Traceability for every batch</p>
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
