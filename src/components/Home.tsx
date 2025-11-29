import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Wheat,
  Shield,
  TrendingUp,
} from "lucide-react";

const carouselImages = [
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416900/vivadhara1_yzwdfu.jpg",
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416901/vivadhara2_qhotte.jpg",
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416901/vivadhara4_mfvnaj.jpg",
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416900/vivadhara3_nkmcth.jpg",
];

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* ---------------- HERO SECTION WITH CAROUSEL ---------------- */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Blurred glowing background carousel */}
        <div className="absolute inset-0">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                index === current
                  ? "opacity-100 scale-105 brightness-110 blur-[3px]"
                  : "opacity-0 scale-100 brightness-90 blur-sm"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter:
                  index === current
                    ? "blur(4px) brightness(1.1)"
                    : "blur(2px) brightness(0.9)",
              }}
            ></div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40"></div>
        </div>

        {/* Foreground content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
          <div className="p-8 rounded-3xl max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-[#fbebd5] drop-shadow-lg">
              High-Protein <br />
              <span className="text-white">Organic Feed</span>
            </h1>

            <p className="text-md md:text-lg text-gray-100 leading-relaxed mb-8">
              Supplying premium-quality, nutrient-rich feed ingredients{" "}
              <span className="font-semibold text-[#fbebd5]">
                for cattle, poultry & aquaculture
              </span>
              . Trusted by farmers across India.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => onNavigate("services")}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="text-lg cursor-pointer text-md">
                  Explore Products
                </span>
                <ArrowRight size={20} />
              </button>

             {/*  <a
                href="#blog"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#fbebd5] text-[#fbebd5] hover:bg-[#fbebd5] hover:text-[#901f3b] hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Read Our Blog
              </a> */}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
          {carouselImages.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === current ? "bg-[#fbebd5]" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-20 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Farmers Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              Pure. Safe. Nutrient-Rich. Reliable Every Time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Wheat className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Organic Ingredients
              </h3>
              <p className="text-gray-600">
                Natural, high-protein feed enhancing growth, immunity & overall
                animal health.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <Shield className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Safe & Reliable
              </h3>
              <p className="text-gray-600">
                Imported from certified mills with strict quality and safety
                assurance.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <TrendingUp className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Better Productivity
              </h3>
              <p className="text-gray-600">
                Boosts milk yield, weight gain, egg production & growth
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Premium-Quality Feed Ingredients?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            We supply to Dairy Farms, Poultry Units & Aquaculture Industries.
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
