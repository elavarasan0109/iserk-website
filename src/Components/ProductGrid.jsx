import ProductCard from "./ProductCard";
import products from "../Data/Product";

const ProductGrid = ({ budget = Infinity }) => {
  const filteredProducts = products.filter((product) => {
    const price = Number(product.price.replace(/,/g, ""));
    return price <= budget;
  });

  return (
    <article className="flex-1">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-xl font-semibold">
          Showing {filteredProducts.length} PC{filteredProducts.length === 1 ? "" : "s"}
        </h2>
        <p className="text-sm text-gray-500">
          Budget filter: ₹{Number(budget).toLocaleString()}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-600">
          No PCs match this budget.
        </div>
      )}
    </article>
  );
};

export default ProductGrid;