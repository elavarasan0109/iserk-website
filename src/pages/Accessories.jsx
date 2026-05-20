// src/pages/Accessories.jsx
import { useState, useMemo } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Banner from '../components/Banner.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, MAX_BUDGET } from '../data/products.js'

const ITEMS_PER_PAGE = 9

const SORT_OPTIONS = [
  { value: 'none',       label: 'None' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'name-asc',   label: 'Name: A → Z' },
]

export default function Accessories() {
  // ── State ────────────────────────────────────────────────
  const [search,           setSearch]           = useState('')
  const [sortBy,           setSortBy]           = useState('none')
  const [sortOpen,         setSortOpen]         = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [budget,           setBudget]           = useState(MAX_BUDGET)
  const [appliedBudget,    setAppliedBudget]    = useState(MAX_BUDGET)
  const [currentPage,      setCurrentPage]      = useState(1)

  // ── Filtering + Sorting ──────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    // search
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }

    // category
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory)
    }

    // budget
    list = list.filter((p) => p.price <= appliedBudget)

    // sort
    if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name))

    return list
  }, [search, selectedCategory, appliedBudget, sortBy])

  // ── Pagination ───────────────────────────────────────────
  const totalPages  = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const safePage    = Math.min(currentPage, totalPages)
  const paginated   = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)

  const handleSearch = (val) => {
    setSearch(val)
    setCurrentPage(1)
  }
  const handleCategory = (cat) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }
  const handleDone = () => {
    setAppliedBudget(budget)
    setCurrentPage(1)
  }
  const handleSort = (val) => {
    setSortBy(val)
    setSortOpen(false)
    setCurrentPage(1)
  }

  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? 'None'

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">

          {/* ── Breadcrumb ── */}
          <nav aria-label="breadcrumb">
            <ol className="flex items-center gap-2 font-sans text-[14px] text-brand-text-muted">
              <li>
                <a href="/" className="hover:text-brand-orange transition-colors">Home</a>
              </li>
              <li className="text-brand-gray-mid select-none">›</li>
              <li className="text-brand-black font-500">Accessories</li>
            </ol>
          </nav>

          {/* ── Page header row ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Title */}
            <h1 className="font-display font-800 text-[42px] text-brand-black leading-none tracking-tight">
              Accessories
            </h1>

            {/* Right: Search + Sort info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Search bar */}
              <div className="relative">
                {/* Search icon */}
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none">
                  <Search size={16} strokeWidth={2} />
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search here..."
                  className="search-input"
                  style={{ minWidth: 260 }}
                />
              </div>

              {/* Sort + page count */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Sort dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setSortOpen((v) => !v)}
                    className="flex items-center gap-1.5 font-sans font-500 text-[14px] text-brand-black whitespace-nowrap"
                  >
                    <span className="text-brand-text-muted">Sort by price:</span>
                    <span className="font-600">{currentSortLabel}</span>
                    <ChevronDown size={15} strokeWidth={2.5} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-2 z-40 bg-white border border-brand-gray-mid rounded-xl shadow-lg py-1 min-w-[180px]">
                      {SORT_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleSort(opt.value)}
                          className={`w-full text-left px-4 py-2.5 font-sans text-[14px] hover:bg-brand-gray transition-colors ${
                            sortBy === opt.value
                              ? 'text-brand-orange font-600'
                              : 'text-brand-black font-400'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Page count */}
                <span className="font-sans font-400 text-[13px] text-brand-text-muted whitespace-nowrap">
                  Showing {safePage} of {totalPages} Pages
                </span>
              </div>
            </div>
          </div>

          {/* ── Banner ── */}
          <Banner />

          {/* ── Filter + Products ── */}
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
                  <p className="font-display font-700 text-[22px] text-brand-black">No products found</p>
                  <p className="font-sans text-[14px] text-brand-text-muted">
                    Try adjusting your filters or search term.
                  </p>
                </div>
              )}

              {/* ── Pagination ── */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-2">
                  {/* Prev */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={safePage === 1}
                    className="w-9 h-9 rounded-full border border-brand-gray-mid flex items-center justify-center text-brand-black hover:border-brand-orange hover:text-brand-orange transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} strokeWidth={2.5} />
                  </button>

                  {/* Page numbers */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-full font-sans font-600 text-[14px] transition-colors ${
                          page === safePage
                            ? 'bg-brand-orange text-white'
                            : 'border border-brand-gray-mid text-brand-black hover:border-brand-orange hover:text-brand-orange'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={safePage === totalPages}
                    className="w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-brand-orange-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      {/* Close sort dropdown on outside click */}
      {sortOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setSortOpen(false)}
        />
      )}
    </div>
  )
}
