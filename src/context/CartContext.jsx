// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Add item — each call gets a unique cartId so same product can appear multiple times
  const addToCart = (item) => {
    setCartItems((prev) => {
      // If item already exists by cartId or id+variant, increment quantity
      const key = item.cartId || item.id
      const existing = prev.find(
        (i) => (i.cartId || i.id) === key
      )
      if (existing) {
        return prev.map((i) =>
          (i.cartId || i.id) === key
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        )
      }
      return [...prev, { ...item, cartId: item.cartId || `${item.id}-${Date.now()}`, quantity: item.quantity || 1 }]
    })
  }

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((i) => (i.cartId || i.id) !== cartId))
  }

  const updateQuantity = (cartId, qty) => {
    if (qty <= 0) {
      removeFromCart(cartId)
      return
    }
    setCartItems((prev) =>
      prev.map((i) =>
        (i.cartId || i.id) === cartId ? { ...i, quantity: qty } : i
      )
    )
  }

  const getCartTotal = () =>
    cartItems.reduce(
      (sum, i) =>
        sum + Number(String(i.price).replace(/,/g, '')) * (i.quantity || 1),
      0
    )

  const getCartCount = () =>
    cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0)

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
