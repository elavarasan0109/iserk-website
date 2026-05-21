import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import Prebuild from './pages/Prebuild.jsx'
import Accessories from './pages/Accessories.jsx'
import PrebuildProductDetails from './pages/PrebuildProductDetails.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prebuild" element={<Prebuild />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<PrebuildProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
