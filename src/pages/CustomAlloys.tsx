import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CustomAlloys() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">Custom Alloys</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            Engineered aluminum alloy solutions tailored to your exact specifications and requirements
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Bespoke Metallurgy</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              When standard alloys don't meet your specific performance requirements, Bay Aluminium's custom
              alloy development service provides the solution. Our metallurgical expertise and state-of-the-art
              laboratory facilities enable us to formulate proprietary aluminum alloys optimized for your unique
              application needs.
            </p>
            <p>
              Whether you need enhanced strength, improved corrosion resistance, specialized thermal properties,
              or unique casting characteristics, we work closely with your engineering team to develop and
              produce custom alloy compositions that exceed standard specifications.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Development Process</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">1. Requirements Analysis</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Comprehensive evaluation of your application requirements and performance criteria
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">2. Alloy Formulation</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Metallurgical design and computer modeling of candidate alloy compositions
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">3. Laboratory Testing</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Small-batch production and rigorous testing of mechanical and chemical properties
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-2xl font-light mb-4">4. Production Scale-Up</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Full-scale manufacturing with quality control and certification
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Customization Options</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Chemical Composition</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Modified silicon content for casting fluidity</p>
                <p>Adjusted copper levels for strength tuning</p>
                <p>Magnesium additions for enhanced properties</p>
                <p>Specialized grain refiners and modifiers</p>
                <p>Proprietary element combinations</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Performance Characteristics</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Enhanced tensile and yield strength</p>
                <p>Improved elongation and ductility</p>
                <p>Superior corrosion resistance</p>
                <p>Optimized thermal conductivity</p>
                <p>Specialized hardness requirements</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Processing Properties</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Tailored fluidity for complex geometries</p>
                <p>Reduced hot cracking susceptibility</p>
                <p>Enhanced machinability characteristics</p>
                <p>Optimized die-filling behavior</p>
                <p>Controlled solidification patterns</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Application-Specific</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Automotive performance requirements</p>
                <p>Aerospace-grade specifications</p>
                <p>Marine environment resistance</p>
                <p>High-temperature stability</p>
                <p>Electrical conductivity needs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Industry Applications</h2>
          <div className="space-y-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Automotive Racing & Performance</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                Custom alloys engineered for motorsport applications requiring extreme strength-to-weight ratios,
                high-temperature stability, and consistent performance under demanding conditions. Specialized
                compositions for engine components, suspension parts, and structural elements.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Aerospace & Defense</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                Proprietary alloys meeting stringent aerospace specifications for lightweight structural components,
                avionics housings, and critical mechanical parts requiring exceptional reliability and performance
                in extreme environments.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Medical & Scientific Equipment</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                Specialized alloys for medical devices and scientific instrumentation requiring biocompatibility,
                precise dimensional stability, non-magnetic properties, or specialized surface characteristics
                for critical applications.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Industrial Machinery</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                Custom formulations for specialized industrial applications including chemical processing equipment,
                high-wear components, thermal management systems, and machinery operating in aggressive environments.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Technical Support</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Engineering Services</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>Materials selection consulting</p>
                <p>Casting process optimization</p>
                <p>Failure analysis and troubleshooting</p>
                <p>Performance testing and validation</p>
                <p>Process parameter development</p>
                <p>Quality assurance protocols</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Testing Capabilities</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>Spectroscopic chemical analysis</p>
                <p>Tensile and hardness testing</p>
                <p>Metallographic examination</p>
                <p>Thermal analysis (DSC, TGA)</p>
                <p>Corrosion resistance evaluation</p>
                <p>Fatigue and fracture testing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-4xl sm:text-5xl font-light mb-12 tracking-tight">Get Started</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-16 max-w-4xl text-lg">
            Our metallurgical team is ready to discuss your custom alloy requirements. Whether you need minor
            modifications to existing alloys or completely new compositions, we provide comprehensive support
            from initial concept through full-scale production.
          </p>
          <div className="grid md:grid-cols-3 gap-16 max-w-4xl">
            <div>
              <div className="text-gray-500 font-light text-sm mb-3">Minimum Order Quantity</div>
              <div className="text-3xl font-light">500 kg</div>
            </div>
            <div>
              <div className="text-gray-500 font-light text-sm mb-3">Development Timeline</div>
              <div className="text-3xl font-light">6-12 weeks</div>
            </div>
            <div>
              <div className="text-gray-500 font-light text-sm mb-3">Technical Support</div>
              <div className="text-3xl font-light">Included</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-12 py-5 border border-white/30 text-white font-medium text-lg hover:border-white transition-all duration-300"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
