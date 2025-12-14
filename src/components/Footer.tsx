import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
       {/* BRAND */}
<div className="flex flex-col items-start gap-3">
  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-2 rounded-xl">
    <img
      src="/logo.png"
      alt="Vivadhara Logo"
      className="w-full h-full object-contain"
    />
  </div>

  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
    Delivering high-quality animal feed ingredients with trust,
    nutrition, and sustainability at the core.
  </p>
</div>


          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-0.5" />
                <span className="text-gray-400">vivadhara@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-green-400 mt-0.5" />
                <span className="text-gray-400">+91 94909 22228</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  Nandigama, Vijayawada,  
                  <br />
                  NTR District – 521185
                </span>
              </div>
            </div>
          </div>

          {/* LINKS + SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/share/16gSkfi7EE/?mibextid=wwXIfr"
                target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/vivadhara_feed"
                target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 <span className="text-white font-medium">Vivadhara</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
