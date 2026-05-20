// src/components/ProductCard.jsx
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false)

  const fallback =
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'

  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] transition hover:-translate-y-1">
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{product.type}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950 leading-tight">{product.title}</h3>
          </div>
          {product.badge && (
            <span className="rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="overflow-hidden bg-slate-950">
        <img
          src={imgError ? fallback : product.image}
          alt={product.title}
          onError={() => setImgError(true)}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-slate-500">Starts</p>
        <p className="mt-2 text-2xl font-bold text-slate-950">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  )
}
