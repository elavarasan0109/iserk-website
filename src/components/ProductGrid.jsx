import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {
  return (
    <article>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          No PCs match this search or filter.
        </div>
      )}
    </article>
  );
};

export default ProductGrid;
