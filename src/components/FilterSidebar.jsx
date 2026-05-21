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
            className={`w-full rounded-[2rem] border px-4 py-4 text-left text-sm font-semibold transition ${
              selectedCategory === cat.id
                ? 'border-orange-400 bg-orange-50 text-slate-900'
                : 'border-slate-200 bg-slate-50 text-slate-900 hover:border-orange-300 hover:bg-orange-50/70'
            } flex items-center gap-3`}
          >
            <span className="flex-shrink-0 text-slate-700">{ICON_MAP[cat.icon]}</span>
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
        className="mt-1 inline-flex w-full items-center justify-between rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
      >
        <span>Done</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
          <ArrowRight size={15} strokeWidth={2.5} />
        </span>
      </button>
    </aside>
  )
}
