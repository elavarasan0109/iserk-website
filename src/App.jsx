import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accessories from './pages/Accessories.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accessories />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </BrowserRouter>
  )
}