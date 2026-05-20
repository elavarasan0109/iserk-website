// src/components/ProductCard.jsx
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false)

  const fallback =
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'

  return (
    <div className="product-card group flex flex-col">
      {/* Image wrapper */}
      <div className="relative bg-brand-gray flex items-center justify-center overflow-hidden"
           style={{ height: 200 }}>
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 font-sans font-600 text-[11px] text-white bg-brand-orange rounded-full px-2.5 py-0.5 uppercase tracking-wide">
            {product.badge}
          </span>
        )}
        <img
          src={imgError ? fallback : product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Name */}
        <p className="font-sans font-500 text-[14px] text-brand-black leading-snug line-clamp-2 flex-1">
          {product.name}
        </p>

        {/* Price */}
        <p className="font-sans font-700 text-[17px] text-brand-black">
          ₹ {product.price.toLocaleString('en-IN')}
        </p>

        {/* View button */}
        <button className="btn-primary w-full justify-center text-[14px] py-2.5">
          View
        </button>
      </div>
    </div>
  )
}
