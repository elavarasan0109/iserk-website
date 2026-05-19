import { useParams, useNavigate } from "react-router-dom";
import products from "../Data/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate("/prebuild")}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Back to Prebuild
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-orange-500">Home</a>
            <span>/</span>
            <a href="/prebuild" className="hover:text-orange-500">Prebuild</a>
            <span>/</span>
            <span className="text-gray-800">Pc-Details</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Prebuild</h1>

        {/* Product Details Section */}
        <article className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Product Title & Key Specs */}
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-gray-800">{product.title}</span>
                <span className="text-orange-500 ml-2">- {product.type}</span>
              </h2>

              {/* Key Specs */}
              <div className="space-y-4 mt-6">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg">
                    <h6 className="font-bold text-sm text-gray-700">Processor</h6>
                    <p className="text-sm text-gray-600">{product.processor}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg">
                    <h6 className="font-bold text-sm text-gray-700">Purpose</h6>
                    <p className="text-sm text-gray-600 uppercase">{product.purpose}</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg">
                    <h6 className="font-bold text-sm text-gray-700">GPU</h6>
                    <p className="text-sm text-gray-600">{product.gpu}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image & Price */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white rounded-xl p-6 w-full h-[300px] flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Price & Warranty */}
              <div className="w-full space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-bold text-gray-800">₹ {product.price}</p>
                  <p className="text-sm text-gray-500">Inclusive of GST. (Free Delivery)</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-sm text-gray-700 mb-2">Free on-site Warranty</h6>
                  <p className="text-sm font-semibold text-gray-800 mb-2">{product.warranty}</p>
                  <p className="text-xs text-gray-500">
                    3-10 years of off-site warranty is applicable for post on-site warranty as per OEM terms.*
                  </p>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <span>🛒</span> Add to Cart
                </button>

                <a href="/accessories" className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition">
                  Explore Accessories
                </a>
              </div>
            </div>
          </div>

          {/* Configuration Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-300">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">RAM</h4>
              <div className="space-y-2">
                <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm">
                  16GB
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">
                Primary Storage <span className="text-gray-500 font-normal">SSD</span>
              </h4>
              <div className="space-y-2">
                <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm">
                  240GB
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">
                Secondary Storage <span className="text-gray-500 font-normal">HDD</span>
              </h4>
              <div className="space-y-2">
                <button className="block w-full px-4 py-2 bg-gray-300 text-gray-600 rounded-lg font-semibold text-sm cursor-not-allowed">
                  Not Selected
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Cabinet Colors</h4>
              <div className="space-y-2">
                <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm">
                  BLACK
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Full Tech Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tech specs</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SpecCard label="Mother Board" value={product.motherboard} />
            <SpecCard label="RAM" value={product.ram} />
            <SpecCard label="CPU COOLER" value={product.cooler} />
            <SpecCard label="STORAGE 1" value={product.storage1} />
            <SpecCard label="STORAGE 2" value={product.storage2} />
            <SpecCard label="CASE" value={product.case} />
            <SpecCard label="PROCESSOR" value={product.processor} />
            <SpecCard label="GPU" value={product.gpu} />
            <SpecCard label="SMPS" value={product.psu} />
          </div>
        </section>
      </div>
    </div>
  );
};

const SpecCard = ({ label, value }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition border border-gray-200">
      <p className="text-gray-600 font-semibold text-sm mb-2">{label}</p>
      <p className="text-gray-800 text-sm">{value}</p>
    </div>
  );
};

export default ProductDetails;
