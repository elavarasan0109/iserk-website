// src/App.jsx
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home.jsx'
import Prebuild from './pages/Prebuild.jsx'
import Accessories from './pages/Accessories.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import PrebuildDetails from './pages/PrebuildDetails.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Payment from './pages/Payment.jsx'
import Faq from './pages/Faq'
import Login from "./pages/Login.jsx";

import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/prebuild" element={<Prebuild />} />
            <Route
              path="/prebuild-product/:id"
              element={<PrebuildDetails />}
            />

            <Route path="/accessories" element={<Accessories />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/payment" element={<Payment />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  )
}

export default App