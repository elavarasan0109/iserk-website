import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="bg-white min-h-screen">

      <div className="px-16 py-16 grid md:grid-cols-2 gap-16">

        <img
          src={product.image}
          alt=""
          className="rounded-3xl w-full"
        />

        <div>

          <h1 className="text-6xl font-bold">
            {product.name}
          </h1>

          <p className="text-orange-500 text-5xl font-bold mt-8">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 text-xl mt-10 leading-10">
            Premium gaming accessory designed for
            professional gamers and creators.
            High quality performance with stylish
            RGB aesthetics.
          </p>

          <button className="bg-orange-500 text-white px-10 py-5 rounded-full mt-10 text-2xl">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}