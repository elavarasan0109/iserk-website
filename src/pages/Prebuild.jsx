// src/pages/Prebuild.jsx
import { useMemo, useState } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight, Monitor, Cpu, FlaskConical, BarChart2, MoreHorizontal, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import products from '../data/Product.js'

const PURPOSES = [
  { id: 'gaming-streaming',  label: 'Gaming / Streaming',  icon: <Monitor size={18} strokeWidth={1.8} /> },
  { id: 'content-creation',  label: 'Content Creation',    icon: <Cpu size={18} strokeWidth={1.8} /> },
  { id: 'engineering-works', label: 'Engineering Works',   icon: <FlaskConical size={18} strokeWidth={1.8} /> },
  { id: 'data-science',      label: 'Data Science',        icon: <BarChart2 size={18} strokeWidth={1.8} /> },
  { id: 'others',            label: 'Others',              icon: <MoreHorizontal size={18} strokeWidth={1.8} /> },
]

const SORT_OPTIONS = [
  { label: 'None',        value: 'none' },
  { label: 'Low to High', value: 'price-asc' },
  { label: 'High to Low', value: 'price-desc' },
]

const MAX_BUDGET     = 100000
const ITEMS_PER_PAGE = 6

// ── Product Card ─────────────────────────────────────────────
function ProductCard({ product }) {
  const price = Number(String(product.price).replace(/,/g, ''))

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
        {product.type && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {product.type}
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'
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
          {product.title}
        </p>

        <p className="text-gray-400 text-[12px] mt-2">Starts</p>
        <p className="font-bold text-[20px] text-gray-900 leading-none mt-0.5">
          ₹{price.toLocaleString('en-IN')}
        </p>

        <div className="mt-auto pt-3">
          {/* ✅ uses /prebuild-product/:id — separate from accessories */}
          <Link
            to={`/prebuild-product/${product.id}`}
            className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] rounded-full py-2.5 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── Filter Sidebar ────────────────────────────────────────────
function FilterSidebar({ selectedPurpose, onPurposeChange, budget, onBudgetChange, onDone }) {
  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-5">
      <h3 className="font-bold text-[17px] text-gray-900">Filter By</h3>

      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[12px] text-gray-400 uppercase tracking-wider mb-1">Purpose</p>
        {PURPOSES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onPurposeChange(p.id === selectedPurpose ? null : p.id)}
            className={`flex items-center gap-3 w-full font-medium text-[15px] bg-white border rounded-xl px-4 py-3 transition-all duration-200 cursor-pointer ${
              selectedPurpose === p.id
                ? 'border-orange-500 text-orange-500 bg-orange-50'
                : 'border-gray-200 text-gray-800 hover:border-orange-400 hover:text-orange-500'
            }`}
          >
            <span className="flex-shrink-0">{p.icon}</span>
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-100" />

      <div className="flex flex-col gap-3">
        <p className="font-bold text-[15px] text-gray-900">Budget</p>
        <input
          type="range"
          min={0}
          max={MAX_BUDGET}
          step={500}
          value={budget}
          onChange={(e) => onBudgetChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex items-center justify-between">
          <span className="font-medium text-[12px] text-gray-500">₹0</span>
          <span className="font-medium text-[12px] text-gray-500">₹50,000</span>
          <span className="font-medium text-[12px] text-gray-500">₹1,00,000</span>
        </div>
        <p className="text-center text-[13px] text-orange-500 font-semibold">
          Up to ₹{budget.toLocaleString('en-IN')}
        </p>
      </div>

      <button
        type="button"
        onClick={onDone}
        className="flex items-center justify-between w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-[15px] rounded-full px-5 py-3 transition-colors mt-1"
      >
        <span>DONE</span>
        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <ArrowRight size={15} strokeWidth={2.5} />
        </span>
      </button>
    </aside>
  )
}

// ── Main Page ─────────────────────────────────────────────────
export default function Prebuild() {
  const [searchQuery,     setSearchQuery]     = useState('')
  const [selectedPurpose, setSelectedPurpose] = useState(null)
  const [budget,          setBudget]          = useState(MAX_BUDGET)
  const [sortBy,          setSortBy]          = useState('none')
  const [sortOpen,        setSortOpen]        = useState(false)
  const [currentPage,     setCurrentPage]     = useState(1)

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return products.filter((product) => {
      const price          = Number(String(product.price).replace(/,/g, ''))
      const matchesBudget  = price <= budget
      const matchesPurpose = selectedPurpose
        ? product.purpose?.toLowerCase().includes(selectedPurpose.replace(/-/g, ' '))
        : true
      const matchesSearch  = query
        ? product.title?.toLowerCase().includes(query) ||
          product.purpose?.toLowerCase().includes(query)
        : true
      return matchesBudget && matchesPurpose && matchesSearch
    })
  }, [budget, selectedPurpose, searchQuery])

  const sorted = useMemo(() => {
    if (sortBy === 'price-asc')
      return [...filtered].sort(
        (a, b) =>
          Number(String(a.price).replace(/,/g, '')) -
          Number(String(b.price).replace(/,/g, ''))
      )
    if (sortBy === 'price-desc')
      return [...filtered].sort(
        (a, b) =>
          Number(String(b.price).replace(/,/g, '')) -
          Number(String(a.price).replace(/,/g, ''))
      )
    return filtered
  }, [filtered, sortBy])

  const totalPages = Math.max(1, Math.ceil(sorted.length / ITEMS_PER_PAGE))
  const safePage   = Math.min(currentPage, totalPages)
  const paginated  = sorted.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)

  const handleSearch  = (val) => { setSearchQuery(val);     setCurrentPage(1) }
  const handlePurpose = (val) => { setSelectedPurpose(val); setCurrentPage(1) }
  const handleDone    = ()    => { setCurrentPage(1) }
  const handleSort    = (val) => { setSortBy(val); setSortOpen(false); setCurrentPage(1) }

  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? 'None'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">

        <nav className="flex items-center gap-2 text-[14px] text-gray-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Prebuild</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-[38px] font-extrabold text-gray-900 leading-none">Prebuild</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search size={16} strokeWidth={2} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search here..."
                className="w-full text-[14px] text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all"
                style={{ minWidth: 260 }}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-[14px] text-gray-700 whitespace-nowrap"
                >
                  <span className="text-gray-400">Sort by price:</span>
                  <span className="font-semibold">{currentSortLabel}</span>
                  <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 z-40 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[160px]">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSort(opt.value)}
                        className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors ${
                          sortBy === opt.value ? 'text-orange-500 font-semibold' : 'text-gray-700'
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

        <Banner />

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <FilterSidebar
              selectedPurpose={selectedPurpose}
              onPurposeChange={handlePurpose}
              budget={budget}
              onBudgetChange={setBudget}
              onDone={handleDone}
            />
          </div>

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
                <p className="text-[14px] text-gray-400">Try adjusting your filters or search term.</p>
              </div>
            )}

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
