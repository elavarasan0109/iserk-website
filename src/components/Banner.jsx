// src/components/Banner.jsx
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { BANNER_SLIDES } from '../data/products.js'
export default function Banner() {
  const [current, setCurrent] = useState(0)
  const total = BANNER_SLIDES.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  // Auto-advance every 4 s
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const slide = BANNER_SLIDES[current]

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ background: slide.bg, minHeight: 320, transition: 'background 0.5s ease' }}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-10 flex items-center justify-between gap-6">
        {/* Text side */}
        <div className="flex-1 min-w-0">
          <p
            className="font-sans font-500 text-[15px] mb-3 opacity-80"
            style={{ color: slide.textColor }}
          >
            {slide.tag}
          </p>
          <h2
            className="font-display font-800 text-4xl sm:text-5xl leading-tight whitespace-pre-line mb-6"
            style={{ color: slide.textColor }}
          >
            {slide.title}
          </h2>
          <button
            className="inline-flex items-center gap-2 font-sans font-700 text-[15px] px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: slide.textColor === '#ffffff' ? '#ffffff' : '#FF4500',
              color:      slide.textColor === '#ffffff' ? slide.bg   : '#ffffff',
            }}
          >
            {slide.cta}
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Image side */}
        <div className="hidden sm:block flex-shrink-0 w-56 sm:w-72 h-48 sm:h-64 relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ transition: 'opacity 0.4s ease' }}
          />
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {BANNER_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              i === current ? 'bg-brand-orange w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
