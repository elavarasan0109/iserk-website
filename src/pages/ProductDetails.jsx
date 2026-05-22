// src/pages/ProductDetails.jsx
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { PRODUCTS } from '../data/products.js'

export default function ProductDetails() {
  const { id } = useParams()
  const product = PRODUCTS.find((item) => item.id === Number(id))
  const [selectedColor, setSelectedColor] = useState(0)
  const [imgError, setImgError] = useState(false)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: ['BLACK 2K 180HZ', 'WHITE 2K 165HZ'][selectedColor],
      quantity: 1,
    })
    navigate('/cart')
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    )
  }

  const colors = ['BLACK 2K 180HZ', 'WHITE 2K 165HZ']

  const specDesc = `${product.name} — SS IPS Display, 180Hz, 2560 x 1440 (QHD), 1ms (MPRT) Response Time, 100% sRGB, HDR Ready, Flicker-Free, Black`

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-gray-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/accessories" className="hover:text-orange-500 transition-colors">Accessories</Link>
        </nav>

        <h1 className="text-[32px] font-extrabold text-gray-900 leading-tight">
          {product.name}
        </h1>

        {/* Main card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid md:grid-cols-2 gap-10">

          {/* Left — image */}
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden" style={{ minHeight: 360 }}>
            <img
              src={imgError ? 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' : product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain p-6"
              style={{ maxHeight: 400 }}
            />
          </div>

          {/* Right — details */}
          <div className="flex flex-col gap-5">
            {/* Name */}
            <h2 className="font-extrabold text-[22px] text-gray-900 uppercase leading-snug">
              {product.name}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-[14px] leading-relaxed">
              {specDesc}
            </p>

            {/* Colors */}
            <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
              <p className="font-bold text-[14px] text-gray-800">Colors</p>
              <div className="flex flex-wrap gap-2">
                {colors.map((c, i) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(i)}
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold border-2 transition-all ${
                      selectedColor === i
                        ? 'border-gray-900 bg-white text-gray-900'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-1">
              <p className="font-extrabold text-[36px] text-gray-900">
                ₹ {product.price.toLocaleString('en-IN')}
              </p>
              <p className="text-gray-400 text-[13px]">Inclusive of GST. (Free Delivery)</p>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white font-bold text-[15px] rounded-full px-6 py-4 transition-colors w-full sm:w-auto sm:max-w-xs"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart size={18} strokeWidth={2} />
                Add To Cart
              </span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight size={16} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}