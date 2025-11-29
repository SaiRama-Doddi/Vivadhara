import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onCartClick: () => void;
}

export default function Footer({ onCartClick }: FooterProps) {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                <img
                  src="/vivadhara.jpg"
                  alt="Logo"
                  className="w-15 h-15 rounded-full shadow-md object-cover"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Vivadhara
              </span>
            </div>

            <p className="text-gray-400">
              Delivering excellence in organic feed ingredients & agricultural solutions.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400">vivadhara@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400" />
                <span className="text-gray-400">+91 94909 22228</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-yellow-400" />
                <span className="text-gray-400">Nandigama, Vijayawada, NTR District - 521185</span>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/share/16gSkfi7EE/?mibextid=wwXIfr" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-all">
                <Facebook className="text-white" size={20} />
              </a>

              <a href="https://www.instagram.com/vivadhara_feed?igsh=dzZlcnJiOWoxdzBp&utm_source=qr" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 transition-all">
                <Instagram className="text-white" size={20} />
              </a>

              <a href="https://linkedin.com" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition-all">
                <Linkedin className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* COPY */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Vivadhara. All rights reserved.</p>
        </div>
      </div>

      {/* FLOATING CART BUTTON */}
      <button
        onClick={onCartClick}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Shopping Cart"
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>
    </footer>
  );
}
