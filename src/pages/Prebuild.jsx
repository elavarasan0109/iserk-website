import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import products from "../data/Product";

const PURPOSES = [
  { id: "gaming-streaming", label: "Gaming / Streaming" },
  { id: "content-creation", label: "Content Creation" },
  { id: "engineering-works", label: "Engineering Works" },
  { id: "data-science", label: "Data Science" },
  { id: "others", label: "Others" },
];

const SORT_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Low to High", value: "price-asc" },
  { label: "High to Low", value: "price-desc" },
];

const ITEMS_PER_PAGE = 6;

const Prebuild = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [budget, setBudget] = useState(100000);
  const [appliedBudget, setAppliedBudget] = useState(100000);
  const [sortBy, setSortBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const price = Number(product.price.replace(/,/g, ""));
      const matchesBudget = price <= appliedBudget;
      const matchesPurpose = selectedPurpose
        ? product.purpose.toLowerCase().includes(selectedPurpose.replace(/-/g, " "))
        : true;
      const matchesSearch = query
        ? product.title.toLowerCase().includes(query) || product.purpose.toLowerCase().includes(query)
        : true;
      return matchesBudget && matchesPurpose && matchesSearch;
    });
  }, [appliedBudget, selectedPurpose, searchQuery]);

  const sortedProducts = useMemo(() => {
    if (sortBy === "price-asc") {
      return [...filteredProducts].sort((a, b) => Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, "")));
    }
    if (sortBy === "price-desc") {
      return [...filteredProducts].sort((a, b) => Number(b.price.replace(/,/g, "")) - Number(a.price.replace(/,/g, "")));
    }
    return filteredProducts;
  }, [filteredProducts, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / ITEMS_PER_PAGE));
  const visibleProducts = sortedProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">
              <Link to="/" className="font-medium text-slate-500 transition hover:text-slate-900">Home</Link> / Prebuild
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-[-0.04em] text-slate-950">Prebuild</h1>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-[1.2fr_auto] xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
            <div className="relative w-full min-w-[280px]">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search here..."
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <span>Sort by price:</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="rounded-full border border-slate-200 bg-white py-2 px-3 text-sm text-slate-900 outline-none"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-right">
                <div>Showing {currentPage} of {totalPages} Pages</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <Banner />
        </div>

        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 rounded-[2rem] bg-slate-950 px-5 py-6 text-white shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Filter By</p>
              <p className="mt-4 text-2xl font-semibold">Purpose</p>
            </div>

            <div className="space-y-3 rounded-[2rem] bg-slate-100 p-4">
              {PURPOSES.map((purpose) => {
                const active = selectedPurpose === purpose.id;
                return (
                  <button
                    key={purpose.id}
                    onClick={() => {
                      setSelectedPurpose(active ? null : purpose.id);
                      setCurrentPage(1);
                    }}
                    className={`w-full rounded-3xl px-4 py-4 text-left text-sm font-semibold tracking-tight transition ${
                      active
                        ? 'bg-slate-950 text-white'
                        : 'bg-white text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {purpose.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-[2rem] bg-slate-100 p-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Budget</p>
              <input
                type="range"
                min={0}
                max={100000}
                step={500}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>₹0</span>
                <span>₹{budget.toLocaleString('en-IN')}</span>
                <span>₹100,000</span>
              </div>
              <button
                onClick={() => {
                  setAppliedBudget(budget);
                  setCurrentPage(1);
                }}
                className="mt-6 inline-flex w-full items-center justify-between rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
              >
                <span>Done</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">→</span>
              </button>
            </div>
          </aside>

          <section>
            <ProductGrid products={visibleProducts} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Prebuild;
