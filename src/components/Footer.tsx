interface FooterProps {
  onProcessClick?: () => void;
}

export function Footer({ onProcessClick }: FooterProps) {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-light text-white mb-6">Bay Aluminium</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Leading provider of premium aluminum ingots and alloys with cutting-edge smelting technology.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-light mb-6 text-sm">Products</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">ADC 12 Alloy</li>
              <li className="hover:text-white transition-colors cursor-pointer">LM24 Alloy</li>
              <li className="hover:text-white transition-colors cursor-pointer">A380 Alloy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Custom Alloys</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-light mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li onClick={onProcessClick} className="hover:text-white transition-colors cursor-pointer">Our Process</li>
              <li className="hover:text-white transition-colors cursor-pointer">Quality</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-light mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>info@bayaluminium.com</li>
              <li>+60103668054</li>
              <li>Lot 18, Jalan Zurah 5A<br />Selangor, Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
