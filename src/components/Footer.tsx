import { Factory, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-white tracking-tight">Bay Aluminium</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Leading provider of premium aluminum ingots and alloys with cutting-edge smelting technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-xs tracking-[0.15em] uppercase">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-red-400 transition-colors cursor-pointer font-light hover:translate-x-1 transition-transform duration-300">ADC 12 Alloy</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer font-light hover:translate-x-1 transition-transform duration-300">LM24 Alloy</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer font-light hover:translate-x-1 transition-transform duration-300">A380 Alloy</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer font-light hover:translate-x-1 transition-transform duration-300">Custom Alloys</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-xs tracking-[0.15em] uppercase">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#about" className="hover:text-red-400 transition-all duration-300 font-light inline-block hover:translate-x-1">About Us</a>
              </li>
              <li className="hover:text-red-400 transition-all duration-300 cursor-pointer font-light hover:translate-x-1 inline-block">Our Process</li>
              <li className="hover:text-red-400 transition-all duration-300 cursor-pointer font-light hover:translate-x-1 inline-block">Quality Standards</li>
              <li className="hover:text-red-400 transition-all duration-300 cursor-pointer font-light hover:translate-x-1 inline-block">Certifications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-xs tracking-[0.15em] uppercase">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-red-400 transition-colors group">
                <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-light text-sm">info@bayaluminium.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-red-400 transition-colors group">
                <Phone className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-light text-sm">+60103668054</span>
              </li>
              <li className="flex items-start gap-3 hover:text-red-400 transition-colors group">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-light text-sm">Lot 18, Jalan Zurah 5A, Selangor, Malaysia.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-red-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-red-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
