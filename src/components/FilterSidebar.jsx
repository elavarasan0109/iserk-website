// src/components/FilterSidebar.jsx
import { Monitor, Mouse, Keyboard, Headphones, ArrowRight } from 'lucide-react'
import { CATEGORIES } from '../data/products.js'

const MAX_BUDGET = 50000

const ICON_MAP = {
  Monitor:    <Monitor    size={18} strokeWidth={1.8} />,
  Mouse:      <Mouse      size={18} strokeWidth={1.8} />,
  Keyboard:   <Keyboard   size={18} strokeWidth={1.8} />,
  Headphones: <Headphones size={18} strokeWidth={1.8} />,
}

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  budget,
  onBudgetChange,
  onDone,
}) {
  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-5">

      {/* Title */}
      <h3 className="font-bold text-[17px] text-gray-900">Filter By</h3>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[12px] text-gray-400 uppercase tracking-wider mb-1">
          Category
        </p>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() =>
              onCategoryChange(cat.id === selectedCategory ? null : cat.id)
            }
            className={`flex items-center gap-3 w-full font-medium text-[15px] bg-white border rounded-xl px-4 py-3 transition-all duration-200 cursor-pointer ${
              selectedCategory === cat.id
                ? 'border-orange-500 text-orange-500 bg-orange-50'
                : 'border-gray-200 text-gray-800 hover:border-orange-400 hover:text-orange-500'
            }`}
          >
            <span className="flex-shrink-0">{ICON_MAP[cat.icon]}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Budget */}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-[15px] text-gray-900">Budget</p>

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={MAX_BUDGET}
          step={500}
          value={budget}
          onChange={(e) => onBudgetChange(Number(e.target.value))}
          className="w-full"
        />

        {/* 3 labels */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-[12px] text-gray-500">₹0</span>
          <span className="font-medium text-[12px] text-gray-500">₹25,000</span>
          <span className="font-medium text-[12px] text-gray-500">₹50,000</span>
        </div>

        {/* Live value */}
        <p className="text-center text-[13px] text-orange-500 font-semibold">
          Up to ₹{budget.toLocaleString('en-IN')}
        </p>
      </div>

      {/* Done button */}
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
