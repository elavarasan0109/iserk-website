import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home.jsx'
import Prebuild from './pages/Prebuild.jsx'
import Accessories from './pages/Accessories.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import PrebuildDetails from './pages/PrebuildDetails.jsx'
import About from './pages/About.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
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

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App