import { useState, useEffect } from "react";
import consolePc from "../assets/console.png";
import redpill from "../assets/redpill.png";

const SLIDES = [
  {
    price: "82,990",
    title: "Console Killer PC",
    image: consolePc,
    bgColor: "bg-purple-700"
  },
  {
    price: "39,990",
    title: "Red Pill PC",
    image: redpill,
    bgColor: "bg-blue-700"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <div>
      <div className={`${slide.bgColor} rounded-3xl h-[280px] flex items-center justify-between px-20 relative overflow-hidden`}>
        <button
          onClick={prevSlide}
          className="absolute left-6 bg-opacity-70 bg-gray-700 hover:bg-opacity-100 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 transition"
        >
          ❮
        </button>

        <div className="text-white">
          <p className="text-lg font-semibold">Just ₹ {slide.price}</p>
          <h1 className="text-6xl font-bold mt-3 mb-6">
            {slide.title}
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition">
            Shop Now
            <span>→</span>
          </button>
        </div>

        <img
          src={slide.image}
          alt={slide.title}
          className="h-[230px] object-contain"
        />

        <button
          onClick={nextSlide}
          className="absolute right-6 bg-opacity-70 bg-gray-700 hover:bg-opacity-100 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 transition"
        >
          ❯
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;