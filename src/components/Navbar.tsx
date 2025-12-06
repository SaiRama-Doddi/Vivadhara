import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Products", page: "products" },
    { name: "Testimonials", page: "testimonials" },
    { name: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: string) => {
    setActiveLink(navItems.find((item) => item.page === page)?.name || "Home");
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#249915] shadow-lg fixed w-full top-0 z-50">    {/* #4CAF50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* LOGO */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center space-x-3"
            onClick={() => handleNavClick("home")}
          >
            <img
              src="/logo3.png"
              alt="Logo"
              className="w-50 h-40 rounded-full  object-cover "
            />
            {/*  <span
               className="text-xl sm:text-2xl md:text-3xl font-bold uppercase 
                bg-yellow-400 bg-clip-text text-transparent"
                style={{ fontFamily: "AVANT GARDE" }} 
                >
              Vivadhara Agro
           </span> */}


          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
   <button
  key={item.name}
  onClick={() => handleNavClick(item.name.toLowerCase())}
  className={`cursor-pointer relative px-3 py-3 text-lg font-medium transition-all 
    ${
      activeLink === item.name
        ? "text-[#ebc890] border-b-2 border-[#f7daab]"
        : "text-white border-b-2 border-transparent hover:text-[#f7daab]"
    }
  `}
>
  {item.name}
</button>


              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-200 p-3 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE NAV MENU ---------------- */}
      {isOpen && (
        <div className="md:hidden bg-white text-black border-t border-gray-200 shadow-lg animate-slideDown">
          <div className="px-2 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-md text-lg font-medium transition-all ${
                  activeLink === item.name
                    ? "text-green-700 font-semibold bg-green-50 border-l-4 border-green-600"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
