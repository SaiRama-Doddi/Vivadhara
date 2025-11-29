
import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Wheat,
} from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-amber-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight italic">
                High-Protein
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Organic Feed
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed italic">
                Supplying premium-quality, nutrient-rich feed ingredients
                imported from trusted global sources. Natural, safe, and
                performance-driven formulations.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate("services")}
                  className="bg-gradient-to-r bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span className=" text-lg cursor-pointer text-md">Explore Products</span>
                  <ArrowRight size={20} />
                </button>

               {/*  <button
                  onClick={() => onNavigate("contact")}
                  className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
                >
                  Contact Us
                </button> */}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
               <HeroCarousel />

              {/* FLOATING INFO */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10+ Years</p>
                    <p className="text-sm text-gray-600">Trusted Supplier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
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
                Natural and high-protein feed that improves growth, immunity, and
                overall animal health.
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
                Imported from certified mills with strict quality control &
                safety standards.
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
                Helps increase milk yield, weight gain, egg production & growth
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Premium-Quality Feed Ingredients?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            We supply to Dairy Farms, Poultry Units & Aquaculture Industries
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
}
