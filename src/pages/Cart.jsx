// src/pages/Cart.jsx
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, ChevronRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart()
  const navigate = useNavigate()

  const subtotal = getCartTotal()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-gray-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Cart</span>
        </nav>

        <h1 className="text-[38px] font-extrabold text-gray-900 leading-none">Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center justify-center gap-4">
                <p className="font-bold text-[20px] text-gray-700">Your cart is empty</p>
                <p className="text-[14px] text-gray-400">Add some products to get started.</p>
                <Link
                  to="/prebuild"
                  className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] rounded-full px-6 py-3 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.cartId || item.id} className="flex items-center gap-4 p-5">
                    {/* Image */}
                    <div className="w-[90px] h-[70px] rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name || item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[14px] text-gray-900 leading-snug truncate">
                        {item.name || item.title}
                      </p>
                      {/* Show variant info if any */}
                      {item.variantLabel && (
                        <p className="text-[12px] text-gray-400 mt-0.5">{item.variantLabel}</p>
                      )}
                      {/* Show config details if prebuild */}
                      {item.ramStorage && (
                        <p className="text-[12px] text-gray-400 mt-0.5">
                          ramStorage: {item.ramStorage}, primaryStorage: {item.primaryStorage}, secondaryStorage: {item.secondaryStorage ?? 'undefined'}, case: {item.case ?? 'undefined'}
                          {item.chosenQuotation !== undefined && `, Chosen Quotation : ${item.chosenQuotation ?? 'undefined'}`}
                        </p>
                      )}
                      {item.color && (
                        <p className="text-[12px] text-gray-400 mt-0.5">
                          color: {item.color}
                          {item.chosenQuotation !== undefined && `, Chosen Quotation : ${item.chosenQuotation ?? 'undefined'}`}
                        </p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => updateQuantity(item.cartId || item.id, (item.quantity || 1) - 1)}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors text-[16px] font-bold leading-none"
                      >
                        -
                      </button>
                      <span className="text-[14px] font-semibold text-gray-900 w-4 text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartId || item.id, (item.quantity || 1) + 1)}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors text-[16px] font-bold leading-none"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-semibold text-[15px] text-gray-900 flex-shrink-0 w-24 text-right">
                      ₹{(Number(String(item.price).replace(/,/g, '')) * (item.quantity || 1)).toLocaleString('en-IN')}
                    </p>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromCart(item.cartId || item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors flex-shrink-0 ml-2"
                    >
                      <Trash2 size={18} strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="w-full lg:w-[320px] flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
                <h3 className="font-bold text-[17px] text-gray-900">Cart summary</h3>

                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Total Items</span>
                  <span className="font-semibold text-[14px] text-gray-900">
                    {cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0)}
                  </span>
                </div>

                <div className="border-t border-gray-100" />

                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Subtotal</span>
                  <span className="font-bold text-[16px] text-gray-900">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => navigate('/cart/payment')}
                  className="flex items-center justify-between w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-[15px] rounded-full px-5 py-3.5 transition-colors mt-1"
                >
                  <span>Check out</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <ChevronRight size={15} strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
