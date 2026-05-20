// src/components/FilterSidebar.jsx
import { Monitor, Mouse, Keyboard, Headphones, ArrowRight } from 'lucide-react'
import { CATEGORIES, MAX_BUDGET } from '../data/products.js'

const ICON_MAP = {
  Monitor:    <Monitor  size={18} strokeWidth={1.8} />,
  Mouse:      <Mouse    size={18} strokeWidth={1.8} />,
  Keyboard:   <Keyboard size={18} strokeWidth={1.8} />,
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
    <aside className="w-full bg-white rounded-2xl border border-brand-gray-mid p-5 flex flex-col gap-5">
      {/* Title */}
      <h3 className="font-sans font-700 text-[17px] text-brand-black">
        Filter By
      </h3>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <p className="font-sans font-600 text-[13px] text-brand-text-muted uppercase tracking-wider mb-1">
          Category
        </p>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id === selectedCategory ? null : cat.id)}
            className={`filter-category-btn${selectedCategory === cat.id ? ' active' : ''}`}
          >
            <span className="flex-shrink-0">{ICON_MAP[cat.icon]}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-brand-gray-mid" />

      {/* Budget */}
      <div className="flex flex-col gap-3">
        <p className="font-sans font-700 text-[15px] text-brand-black">
          Budget
        </p>

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={MAX_BUDGET}
          step={500}
          value={budget}
          onChange={(e) => onBudgetChange(Number(e.target.value))}
          className="w-full accent-brand-black"
        />

        {/* Labels */}
        <div className="flex items-center justify-between">
          <span className="font-sans text-[13px] text-brand-text-muted">₹0</span>
          <span className="font-sans font-600 text-[13px] text-brand-black">
            ₹{budget.toLocaleString('en-IN')}
          </span>
          <span className="font-sans text-[13px] text-brand-text-muted">
            ₹{MAX_BUDGET.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Done button */}
      <button
        onClick={onDone}
        className="btn-primary w-full justify-between mt-1"
      >
        <span>Done</span>
        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <ArrowRight size={15} strokeWidth={2.5} />
        </span>
      </button>
    </aside>
  )
}
