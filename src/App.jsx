import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prebuild from "./Pages/Prebuild";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Prebuild />} />
            <Route path="/prebuild" element={<Prebuild />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
