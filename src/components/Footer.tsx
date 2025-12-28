import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      
      {/* TOP GRADIENT LINE */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500" />

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
           <img
  src="/logo5.PNG"
  alt="Vivadhara Logo"
  className="
    w-56 h-56          /* 🔥 larger logo */
    md:w-64 md:h-64    /* 🔥 even bigger on desktop */
    object-contain
  "
/>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Delivering high-quality animal feed ingredients with
              trust, nutrition, and sustainability at the core.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide">
              Contact
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group">
                <Mail className="text-blue-400 group-hover:scale-110 transition" size={18} />
                <span className="text-gray-400 group-hover:text-white transition">
                  vivadhara@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="text-green-400 group-hover:scale-110 transition" size={18} />
                <span className="text-gray-400 group-hover:text-white transition">
                  +91 94909 22228
                </span>
              </div>
            </div>
          </div>

          {/* LINKS & SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms of Service", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <SocialIcon
                href="https://www.facebook.com/share/16gSkfi7EE/?mibextid=wwXIfr"
                color="hover:bg-blue-600"
              >
                <Facebook size={18} />
              </SocialIcon>

              <SocialIcon
                href="https://www.instagram.com/vivadhara_feed"
                color="hover:bg-pink-500"
              >
                <Instagram size={18} />
              </SocialIcon>

              <SocialIcon
                href="https://linkedin.com"
                color="hover:bg-blue-500"
              >
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025{" "}
          <span className="text-white font-semibold">
            Vivadhara
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* SOCIAL ICON WRAPPER */
function SocialIcon({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`p-2 rounded-full bg-gray-800 ${color}
        transition transform hover:-translate-y-1 hover:shadow-lg`}
    >
      {children}
    </a>
  );
}
