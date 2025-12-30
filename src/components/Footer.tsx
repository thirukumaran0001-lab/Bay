import { Factory, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bay Aluminium</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of premium ADC 12 aluminum alloy with cutting-edge smelting technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">ADC 12 Ingots</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Custom Alloys</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Die-Casting Solutions</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Technical Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Our Process</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Quality Standards</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Certifications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@bayaluminium.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Industrial Zone, Bay Area</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
