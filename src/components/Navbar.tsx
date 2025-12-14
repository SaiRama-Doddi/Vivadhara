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
    { name: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: string) => {
    setActiveLink(navItems.find((item) => item.page === page)?.name || "Home");
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[white] shadow-lg fixed w-full top-0 z-50">    {/* #4CAF50 */} {/*  #249915] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
   {/* LOGO */}
<div
  className="shrink-0 cursor-pointer flex items-center"
  onClick={() => handleNavClick("home")}
>
  {/* Logo wrapper */}
  <div className="
    w-38 h-38
    sm:w-38 sm:h-38
    md:w-48 md:h-48
    min-w-32
    p-2
    overflow-visible
  ">
    <img
      src="/logo.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>



          {/* DESKTOP NAV */}
      {/* DESKTOP NAV */}
<div className="hidden md:block">
  <div className="ml-10 flex items-center space-x-8">
    {navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => handleNavClick(item.page)}
        className={`relative text-lg font-medium transition-colors duration-300 cursor-pointer italic
          ${
            activeLink === item.name
              ? "text-[#249915]"
              : "text-gray-600 hover:text-black"
          }
        `}
      >
        {item.name}

        {/* UNDERLINE */}
        <span
          className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#249915] rounded-full transition-all duration-300
            ${
              activeLink === item.name
                ? "w-full -translate-x-1/2"
                : "w-0 group-hover:w-full group-hover:-translate-x-1/2"
            }
          `}
        />
      </button>
    ))}
  </div>
</div>


          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600 p-3 focus:outline-none"
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
