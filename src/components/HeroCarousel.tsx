import { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416900/vivadhara1_yzwdfu.jpg",
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416901/vivadhara2_qhotte.jpg",
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416901/vivadhara4_mfvnaj.jpg",
  "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764416900/vivadhara3_nkmcth.jpg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
      {/* Image */}
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Prev & Next Buttons */}
      <button
        onClick={() =>
          setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 text-gray-700 p-2 rounded-full shadow-md hover:bg-white"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 text-gray-700 p-2 rounded-full shadow-md hover:bg-white"
      >
        ›
      </button>
    </div>
  );
}
