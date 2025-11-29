import React from "react";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section className="bg-white pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6 animate-fadeIn">

          <h1 className="text-4xl md:text-6xl font-bold text-green-700 leading-tight font-[Poppins]">
            Transform Your Vision into
            <span className="text-green-600"> Reality</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl font-[Poppins] mx-auto md:mx-0 animate-slideUp">
            Vivadhara brings innovative solutions, design excellence, and
            reliable services that elevate your brand to the next level.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-5 pt-4 animate-slideUp">
            <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full text-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started <ArrowRight size={20} />
            </button>

            <button className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-7 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 justify-center md:justify-end flex animate-fadeIn">
          <div className="w-full md:w-[500px]">
            <img
              src="/vivadhara-hero.jpg"
              alt="Vivadhara Hero"
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
