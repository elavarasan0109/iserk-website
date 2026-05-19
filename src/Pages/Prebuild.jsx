import { useState } from "react";
import Banner from "../Components/Banner";
import FilterSidebar from "../Components/FilterSidebar";
import ProductGrid from "../Components/ProductGrid";

const Prebuild = () => {
  const [budget, setBudget] = useState(1000000);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-sm">
            <a href="/" className="hover:text-orange-500">Home</a> / <span className="text-gray-800">Prebuild</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Prebuild
          </h1>
          <input
            type="text"
            placeholder="Search here..."
            className="hidden md:block border-2 border-gray-300 rounded-lg px-5 py-3 w-[280px] focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Banner/Carousel Section */}
        <div className="mb-12">
          <Banner />
        </div>

        {/* Filter and Product Grid Section */}
        <div className="flex gap-8">
          <FilterSidebar initialBudget={budget} onApplyBudget={setBudget} />
          <ProductGrid budget={budget} />
        </div>
      </div>
    </div>
  );
};

export default Prebuild;