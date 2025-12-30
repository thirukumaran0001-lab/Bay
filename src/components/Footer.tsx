import { Factory, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Bay Aluminium</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of premium ADC 12 aluminum alloy with cutting-edge smelting technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm tracking-wider uppercase border-b-2 border-red-600 pb-2 inline-block">Products</h3>
            <ul className="space-y-2 text-gray-400 mt-4">
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">ADC 12 Ingots</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">Custom Alloys</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">Die-Casting Solutions</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">Technical Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm tracking-wider uppercase border-b-2 border-red-600 pb-2 inline-block">Company</h3>
            <ul className="space-y-2 text-gray-400 mt-4">
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">About Us</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">Our Process</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">Quality Standards</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer font-medium">Certifications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm tracking-wider uppercase border-b-2 border-red-600 pb-2 inline-block">Contact</h3>
            <ul className="space-y-3 text-gray-400 mt-4">
              <li className="flex items-center gap-3 hover:text-red-500 transition-colors">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="font-medium">info@bayaluminium.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-red-500 transition-colors">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 hover:text-red-500 transition-colors">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="font-medium">Lot 18, Jalan Zurah 5A, Selangor, Malaysia.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
