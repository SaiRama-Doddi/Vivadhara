import {  Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';




export default function Footer() {

 
 





  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND */}
<div>
  <div className="flex flex-col items-center space-y-4 mb-4">
    {/* Logo */}
    <div className="flex-shrink-0">
      <img
        src="/logo3.png"
        alt="Logo"
        className="w-64 h-64 rounded-full object-cover" 
      />
    </div>

    {/* Text */}
   {/*  <p className="text-gray-600 text-base leading-relaxed text-center max-w-md">
      Delivering excellence in organic feed ingredients & agricultural solutions.
    </p> */}
  </div>
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

    {/* FLOATING SCROLL TO TOP BUTTON */}
{/* {showScrollTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-10 right-6 bg-[#249915] cursor-pointer text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
    aria-label="Scroll to Top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={4}
      stroke="white"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
)} */}

    </footer>
  );
}
