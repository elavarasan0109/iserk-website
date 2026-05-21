// src/pages/Accessories.jsx
import { useState, useMemo } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import { PRODUCTS, MAX_BUDGET } from '../data/products.js'

const ITEMS_PER_PAGE = 9

const SORT_OPTIONS = [
  { value: 'none',       label: 'None' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'name-asc',   label: 'Name: A → Z' },
]

function ProductCard({ product }) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
      style={{ height: 420 }}
    >
      {/* Image */}
      <div
        className="relative bg-gray-50 rounded-t-2xl overflow-hidden flex-shrink-0"
        style={{ height: 220 }}
      >
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 overflow-hidden">
        <p
          className="font-medium text-[13px] text-gray-800 leading-snug"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: 36,
          }}
        >
          {product.name}
        </p>

        <p className="text-gray-400 text-[12px] mt-2">Starts</p>
        <p className="font-bold text-[20px] text-gray-900 leading-none mt-0.5">
          ₹{product.price.toLocaleString('en-IN')}
        </p>

        <div className="mt-auto pt-3">
          <Link
            to={`/product/${product.id}`}
            className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] rounded-full py-2.5 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Accessories() {
  const [search,           setSearch]           = useState('')
  const [sortBy,           setSortBy]           = useState('none')
  const [sortOpen,         setSortOpen]         = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [budget,           setBudget]           = useState(MAX_BUDGET)
  const [currentPage,      setCurrentPage]      = useState(1)

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory)
    list = list.filter((p) => p.price <= budget)
    if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [search, selectedCategory, budget, sortBy])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const safePage   = Math.min(currentPage, totalPages)
  const paginated  = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)

  const handleSearch   = (val) => { setSearch(val);           setCurrentPage(1) }
  const handleCategory = (cat) => { setSelectedCategory(cat); setCurrentPage(1) }
  const handleDone     = ()    => { setCurrentPage(1) }
  const handleSort     = (val) => { setSortBy(val); setSortOpen(false); setCurrentPage(1) }

  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? 'None'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-gray-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Accessories</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-[38px] font-extrabold text-gray-900 leading-none">
            Accessories
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Search */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search size={16} strokeWidth={2} />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search here..."
                className="w-full text-[14px] text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all"
                style={{ minWidth: 260 }}
              />
            </div>

            {/* Sort + count */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-[14px] text-gray-700 whitespace-nowrap"
                >
                  <span className="text-gray-400">Sort by price:</span>
                  <span className="font-semibold">{currentSortLabel}</span>
                  <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                    className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 z-40 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[180px]">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSort(opt.value)}
                        className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors ${
                          sortBy === opt.value
                            ? 'text-orange-500 font-semibold'
                            : 'text-gray-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="text-[13px] text-gray-400 whitespace-nowrap">
                Showing {safePage} of {totalPages} Pages
              </span>
            </div>
          </div>
        </div>

        {/* Banner */}
        <Banner />

        {/* Filter + Grid */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Sidebar */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategory}
              budget={budget}
              onBudgetChange={setBudget}
              onDone={handleDone}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1 flex flex-col gap-6">
            {paginated.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <p className="font-bold text-[20px] text-gray-700">No products found</p>
                <p className="text-[14px] text-gray-400">
                  Try adjusting your filters or search term.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 rounded-full text-[14px] font-semibold transition-colors ${
                        page === safePage
                          ? 'bg-orange-500 text-white'
                          : 'border border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {sortOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} />
      )}
    </div>
  )
}
