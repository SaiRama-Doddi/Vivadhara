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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-white drop-shadow-lg italic">
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
                className="bg-[#336021] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
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
      <section className="py-20 bg-[#faf0e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#336021] mb-4">
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
                Green Energy’s bio-products
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
    <section
  className="py-20 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/0c/7f/31/0c7f31aacac02d554c9594e1c4163579.jpg')",
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">
      Need Premium-Quality Feed Ingredients?
    </h2>

    <p className="text-xl mb-8 text-gray-200">
      We supply to Dairy Farms, Poultry Units & Aquaculture Industries.
    </p>

    <button
      onClick={() => onNavigate('contact')}
      className="bg-white text-green-700   cursor-pointer px-8 py-4 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      Contact Us Today
    </button>
  </div>
</section>


{/* ---------------- WHAT MAKES US DIFFERENT ---------------- */}
<section className="py-20 bg-[#faf0e0]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 italic">
        What Makes <span className="text-[#336021]">Vivadhara Agro</span> Different?
      </h2>
      <p className="text-lg text-gray-600 mt-3">
        Premium feed ingredients backed with trust, quality & consistency.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-green-100">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
<img src="https://cdn-icons-png.flaticon.com/512/706/706164.png" className="w-10 h-10" />

        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center">
          100% Natural Sourcing
        </h3>
        <p className="text-gray-600 text-center mt-2">
          We source from trusted farms & certified suppliers, ensuring purity and nutrition.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-yellow-100">
        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png" className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center">
          Global Import Quality
        </h3>
        <p className="text-gray-600 text-center mt-2">
          International standard feed ingredients imported from reliable mills.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
     <img src="https://cdn-icons-png.flaticon.com/512/9425/9425727.png" className="w-10 h-10" />

        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center">
          Tested & Certified
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Every batch undergoes nutritional, moisture & toxin checks before dispatch.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
