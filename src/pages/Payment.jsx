// src/pages/Payment.jsx
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, X, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
  'Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
]

export default function Payment() {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [showAddressForm, setShowAddressForm] = useState(false)

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart')
    }
  }, [cartItems, navigate])
  const [savedAddress, setSavedAddress]       = useState(null)
  const [promoCode, setPromoCode]             = useState('')
  const [couponDiscount, setCouponDiscount]   = useState(0)

  const [form, setForm] = useState({
    firstName:     '',
    lastName:      '',
    addressLine1:  '',
    addressLine2:  '',
    state:         '',
    pincode:       '',
    email:         '',
    gstNo:         '',
    phone1:        '',
    phone2:        '',
  })

  const grossTotal    = getCartTotal()
  const discount      = 0
  const subtotal      = grossTotal - discount
  const deliveryFee   = 0
  const grandTotal    = subtotal - couponDiscount + deliveryFee
  const hasCartItems  = cartItems.length > 0
  const isPlaceOrderDisabled = !hasCartItems || !savedAddress

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleAddressSubmit = () => {
    if (!form.firstName || !form.addressLine1 || !form.state || !form.pincode || !form.email || !form.phone1) {
      alert('Please fill in all required fields.')
      return
    }
    setSavedAddress({ ...form })
    setShowAddressForm(false)
  }

  const handlePlaceOrder = () => {
    if (!hasCartItems) {
      alert('Your cart is empty. Please add at least one item to proceed.')
      return
    }
    if (!savedAddress) {
      alert('Please add a delivery address first.')
      return
    }
    // Navigate or trigger payment
    alert('Order placed successfully! Redirecting to home...')
    clearCart?.()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-gray-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/cart" className="hover:text-orange-500 transition-colors">Cart</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Payment</span>
        </nav>

        <h1 className="text-[38px] font-extrabold text-gray-900 leading-none">Payment</h1>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left — Address + Payment */}
          <div className="flex-1 flex flex-col gap-5">

            {/* 1. Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
              <h2 className="font-bold text-[17px] text-gray-900">1. Address</h2>

              {/* Saved address display */}
              {savedAddress && (
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 flex flex-col gap-1 relative">
                  <button
                    onClick={() => { setSavedAddress(null); setShowAddressForm(false) }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                  <p className="font-semibold text-[14px] text-gray-900">
                    {savedAddress.firstName} {savedAddress.lastName}
                  </p>
                  <p className="text-[13px] text-gray-600">{savedAddress.addressLine1}</p>
                  {savedAddress.addressLine2 && (
                    <p className="text-[13px] text-gray-600">{savedAddress.addressLine2}</p>
                  )}
                  <p className="text-[13px] text-gray-600">
                    {savedAddress.state} – {savedAddress.pincode}
                  </p>
                  <p className="text-[13px] text-gray-600">{savedAddress.email}</p>
                  <p className="text-[13px] text-gray-600">{savedAddress.phone1}</p>
                </div>
              )}

              {/* Add New Address Button */}
              {!showAddressForm && !savedAddress && (
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="flex items-center gap-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium text-gray-700 hover:border-orange-400 hover:text-orange-500 transition-colors"
                >
                  <Plus size={16} strokeWidth={2} />
                  Add New Address
                </button>
              )}

              {/* Address Form */}
              {showAddressForm && (
                <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[15px] text-gray-900">Add New Address</h3>
                    <button onClick={() => setShowAddressForm(false)} className="text-gray-400 hover:text-gray-600">
                      <X size={18} />
                    </button>
                  </div>

                  {/* First + Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-medium text-gray-600">First Name*</label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-medium text-gray-600">Last Name*</label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-600">Address*</label>
                    <input
                      name="addressLine1"
                      value={form.addressLine1}
                      onChange={handleChange}
                      placeholder="Address Line 1"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />
                    <input
                      name="addressLine2"
                      value={form.addressLine2}
                      onChange={handleChange}
                      placeholder="Address Line 2"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition mt-2"
                    />
                  </div>

                  {/* State + Pincode */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-medium text-gray-600">State*</label>
                      <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition bg-white"
                      >
                        <option value="">Select State</option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-medium text-gray-600">Pincode*</label>
                      <input
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-600">Email*</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>

                  {/* GST No */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-600">GST No</label>
                    <input
                      name="gstNo"
                      value={form.gstNo}
                      onChange={handleChange}
                      placeholder="GST No"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-600">Phone Number 1*</label>
                    <input
                      name="phone1"
                      value={form.phone1}
                      onChange={handleChange}
                      placeholder="Number"
                      type="tel"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-600">Phone Number 2</label>
                    <input
                      name="phone2"
                      value={form.phone2}
                      onChange={handleChange}
                      placeholder="Number"
                      type="tel"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                      onClick={() => setShowAddressForm(false)}
                      className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold text-[14px] rounded-full py-3 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddressSubmit}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] rounded-full py-3 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
              <h2 className="font-bold text-[17px] text-gray-900">2. Payment</h2>

              {hasCartItems ? (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-[14px] text-gray-900 mb-3">Review items</p>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.cartId || item.id} className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-[13px] font-medium text-gray-900">{item.name || item.title}</p>
                          <p className="text-[11px] text-gray-500">Qty: {item.quantity || 1}</p>
                        </div>
                        <p className="text-[13px] font-semibold text-gray-900">
                          ₹{(Number(String(item.price).replace(/,/g, '')) * (item.quantity || 1)).toLocaleString('en-IN')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                  Your cart is empty. Add items first to continue with payment.
                </div>
              )}

              {/* Zoho Payments option */}
              <div className="border border-orange-300 rounded-2xl p-4 flex items-start justify-between gap-4 bg-white">
                <div className="flex items-start gap-3">
                  {/* Zoho logo placeholder */}
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                      <rect width="40" height="40" rx="8" fill="#E8F0FE"/>
                      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a73e8">Z</text>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-gray-900">Zoho Payments</p>
                    <p className="text-[12px] text-gray-500 mt-0.5">
                      Secure online payments via UPI, Cards, NetBanking &amp; Wallets
                    </p>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                      Note: Additional charges may apply for ZOHO payments.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-orange-500 border border-orange-300 rounded-full px-3 py-1 flex-shrink-0 mt-0.5">
                  Only available option
                </span>
              </div>
            </div>
          </div>

          {/* Right — Order Summary */}
          <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4 sticky top-6">
              <h3 className="font-bold text-[17px] text-gray-900">Order summary</h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Gross Total</span>
                  <span className="text-[14px] font-medium text-gray-900">
                    ₹{grossTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Discount</span>
                  <span className="text-[14px] font-medium text-red-500">
                    ₹{discount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Subtotal</span>
                  <span className="text-[14px] font-medium text-gray-900">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Coupon Discount</span>
                  <span className="text-[14px] font-medium text-red-500">
                    ₹{couponDiscount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-500">Delivery Fee</span>
                  <span className="text-[14px] font-medium text-gray-900">
                    ₹{deliveryFee}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Grand Total */}
              <div className="flex flex-col gap-0.5">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Grand Total</p>
                <p className="font-extrabold text-[28px] text-gray-900 leading-none">
                  ₹ {grandTotal.toLocaleString('en-IN')}
                </p>
                <p className="text-[12px] text-gray-400">Incl. GST &amp; delivery</p>
              </div>

              {/* Promo Code */}
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M3 3h7.5L21 14.5l-7 7L2 10.5V3z" />
                  </svg>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="ADD PROMO CODE"
                    className="flex-1 bg-transparent outline-none text-[13px] text-gray-500 placeholder-gray-400"
                  />
                </div>
                <button
                  onClick={() => {
                    if (promoCode.trim()) {
                      alert('Promo code applied!')
                    }
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-[13px] rounded-xl px-4 py-2.5 transition-colors flex-shrink-0"
                >
                  Apply
                </button>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                disabled={isPlaceOrderDisabled}
                className={`flex items-center justify-between w-full font-bold text-[15px] rounded-full px-5 py-3.5 transition-colors ${isPlaceOrderDisabled ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
              >
                <span>{isPlaceOrderDisabled ? 'Complete address to place order' : 'Place Order'}</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <ChevronRight size={15} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
