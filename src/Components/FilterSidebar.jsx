import { useState } from "react";

const FilterSidebar = ({ initialBudget = 25000, onApplyBudget }) => {
  const [budget, setBudget] = useState(initialBudget);

  const filters = [
    "Gaming / Streaming",
    "Content Creation",
    "Engineering Works",
    "Data Science",
    "Others"
  ];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-md w-[250px]">
      <h2 className="font-bold text-2xl mb-5">
        Filter By
      </h2>

      <div className="bg-gray-100 rounded-2xl p-4">
        <h3 className="font-bold mb-4">
          Purpose
        </h3>

        <div className="space-y-3">
          {filters.map((item, index) => (
            <button
              key={index}
              className="w-full bg-white rounded-xl p-4 text-left hover:bg-gray-50"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-gray-100 rounded-2xl p-4">
        <h3 className="font-bold">
          Budget
        </h3>

        <div className="text-sm text-gray-600 mb-3">
          Showing results for budget up to <span className="font-semibold">₹{budget.toLocaleString()}</span>
        </div>

        <input
          type="range"
          className="w-full mt-4"
          min={25000}
          max={1000000}
          step={1000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />

        <div className="flex justify-between text-sm">
          <span>₹25,000</span>
          <span>₹10,00,000</span>
        </div>

        <button
          className="w-full bg-orange-500 text-white rounded-full p-3 mt-5"
          type="button"
          onClick={() => onApplyBudget?.(budget)}
        >
          Done →
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;