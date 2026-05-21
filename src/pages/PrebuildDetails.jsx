// src/pages/PrebuildDetails.jsx
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCart, ChevronRight, Cpu, Monitor, HardDrive, MemoryStick, Wind, Package, Zap, Shield } from 'lucide-react'
import { useCart } from '../context/CartContext'
import products from '../data/Product.js'

export default function PrebuildDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const [imgError, setImgError] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 })
    alert('Added to cart')
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Product not found.</p>
          <Link to="/prebuild" className="text-orange-500 font-semibold hover:underline">
            ← Back to Prebuild
          </Link>
        </div>
      </div>
    )
  }

  const price = Number(String(product.price).replace(/,/g, ''))

  const specs = [
    { icon: <Cpu size={16} />,        label: 'Processor',    value: product.processor },
    { icon: <Monitor size={16} />,    label: 'Graphics Card', value: product.gpu },
    { icon: <Package size={16} />,    label: 'Motherboard',  value: product.motherboard },
    { icon: <MemoryStick size={16} />,label: 'RAM',          value: product.ram },
    { icon: <Wind size={16} />,       label: 'Cooler',       value: product.cooler },
    { icon: <HardDrive size={16} />,  label: 'Storage 1',    value: product.storage1 },
    { icon: <HardDrive size={16} />,  label: 'Storage 2',    value: product.storage2 },
    { icon: <Package size={16} />,    label: 'Cabinet',      value: product.case },
    { icon: <Zap size={16} />,        label: 'PSU',          value: product.psu },
    { icon: <Shield size={16} />,     label: 'Warranty',     value: product.warranty },
  ].filter((s) => s.value && s.value !== 'N/A')

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-gray-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/prebuild" className="hover:text-orange-500 transition-colors">Prebuild</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">{product.title}</span>
        </nav>

        <h1 className="text-[32px] font-extrabold text-gray-900 leading-tight">Prebuild</h1>

        {/* Main card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid md:grid-cols-2 gap-10">

          {/* Left — image */}
          <div
            className="bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden"
            style={{ minHeight: 360 }}
          >
            <img
              src={imgError ? 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' : product.image}
              alt={product.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain p-6"
              style={{ maxHeight: 400 }}
            />
          </div>

          {/* Right — details */}
          <div className="flex flex-col gap-5">

            {/* Type badge */}
            {product.type && (
              <span className="self-start bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {product.type}
              </span>
            )}

            {/* Title */}
            <h2 className="font-extrabold text-[24px] text-gray-900 leading-snug">
              {product.title}
            </h2>

            {/* Price */}
            <div className="flex flex-col gap-1">
              <p className="text-gray-400 text-[13px]">Starts</p>
              <p className="font-extrabold text-[36px] text-gray-900 leading-none">
                ₹ {price.toLocaleString('en-IN')}
              </p>
              <p className="text-gray-400 text-[13px]">Inclusive of GST. (Free Delivery)</p>
            </div>

            {/* Purpose tag */}
            {product.purpose && (
              <div className="flex flex-wrap gap-2">
                {product.purpose.split(' ').map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-50 text-orange-500 border border-orange-200 text-[12px] font-semibold px-3 py-1 rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white font-bold text-[15px] rounded-full px-6 py-4 transition-colors w-full sm:w-auto sm:max-w-xs mt-auto">
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

        {/* Specs table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-[18px] text-gray-900 mb-4">Full Specifications</h3>
          <div className="flex flex-col divide-y divide-gray-100">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-start gap-4 py-3">
                <span className="text-orange-500 mt-0.5 flex-shrink-0">{spec.icon}</span>
                <span className="font-semibold text-[13px] text-gray-500 w-28 flex-shrink-0">{spec.label}</span>
                <span className="text-[13px] text-gray-800 leading-snug">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
