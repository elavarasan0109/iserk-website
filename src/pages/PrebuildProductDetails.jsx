import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/Product";

export default function PrebuildProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const error = !product ? "Product not found" : null;
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (!product) {
      console.warn("PrebuildProductDetails: product not found for id", id);
    } else {
      console.log("PrebuildProductDetails loaded", { id, product });
    }
  }, [id, product]);

  const handleAddToCart = () => {
    if (!product) return
    addToCart({ ...product, quantity: 1 })
    navigate('/cart')
  }

  const fallbackImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80";

  if (error) {
    return (
      <div className="bg-white min-h-screen px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center shadow-sm">
          <p className="text-xl font-semibold text-slate-950">{error}</p>
          <p className="mt-3 text-slate-600">The requested prebuilt configuration could not be loaded.</p>
          <Link to="/prebuild" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-400">
            Back to Prebuild
          </Link>
        </div>
      </div>
    );
  }

  return (
      <div className="bg-white min-h-screen">
        <div className="px-6 py-12 max-w-7xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Prebuild Product Details</h2>

          {/* DEBUG: visible banner to confirm component render and product data */}
          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            Debug: product id = {id} — product loaded: {product ? 'yes' : 'no'}
          </div>

          <div className="px-16 py-16 grid md:grid-cols-2 gap-16">
            <img src={product?.image || fallbackImage} alt={product?.title || "Product"} className="rounded-3xl w-full object-cover" />

            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">{product?.title}</h1>

              {product?.type && (
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mt-4">{product.type}</p>
              )}

              <p className="text-orange-500 text-4xl sm:text-5xl font-bold mt-6">₹ {product?.price}</p>

              <p className="text-gray-600 text-lg mt-6 leading-8">{product?.title} is a powerful prebuilt PC suitable for {product?.purpose || "various workloads"}.</p>

              <div className="mt-8 flex gap-4">
                <Link to="/prebuild" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/20">Back</Link>
                <button onClick={handleAddToCart} className="bg-orange-500 text-white px-6 py-3 rounded-full">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
