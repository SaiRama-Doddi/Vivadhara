import React, { useState, useEffect } from "react";
import {
  ArrowRight
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
      <section className="relative w-full h-[95vh] overflow-hidden ">
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-white drop-shadow-lg italic">
              High-Protein <br />
              <span className="text-white">Cattle Feed</span>
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
                onClick={() => onNavigate("products")}
                className="bg-[#249915] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
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


    </div>
  );
};

export default Home;
