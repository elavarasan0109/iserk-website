import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105">
        <div className="p-5">
          <div className="mb-3">
            <p className="text-gray-600 text-sm font-semibold">{product.title}</p>
            <p className="text-orange-500 text-xs font-bold uppercase">{product.type}</p>
          </div>

          <div className="overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center h-[180px]">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain p-2"
            />
          </div>

          <div className="mt-4">
            <p className="text-gray-400 text-xs">Starts</p>
            <h2 className="font-bold text-2xl text-gray-800">
              ₹ {product.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;