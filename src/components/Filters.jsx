import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Filters = ({
  sortOrder,
  setSortOrder,
  color,
  setColor,
  size,
  setSize,
  category,
  setCategory,
  showPriceFilter,
  setShowPriceFilter,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 p-3">
       
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-start sm:items-center">
        <span className="font-medium">Filter:</span>

        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setShowPriceFilter((prev) => !prev)}
            className="flex items-center justify-between sm:justify-start gap-1 px-3 py-2 w-full sm:w-auto rounded-md border hover:bg-[#839c62] transition-all text-sm"
          >
            Price {showPriceFilter ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {showPriceFilter && (
            <div className="absolute top-full left-0 mt-1 bg-white p-3 border shadow z-20 w-64 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">
                  Enter Price for Filter:
                </span>
                <button
                  onClick={() => {
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="px-2 py-1 text-xs hover:bg-[#839c62] transition-all bg-gray-300 text-black rounded-md"
                >
                  Reset
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="border border-gray-400 p-1 w-20 rounded-md text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="border border-gray-400 p-1 w-20 rounded-md text-sm"
                />
              </div>
            </div>
          )}
        </div>

      
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="px-3 py-2 w-full sm:w-auto rounded-md border outline-none hover:bg-[#839c62] transition-all text-sm"
        >
          <option value="">All Sizes</option>
          <option value="s-m">S-M</option>
          <option value="m-l">M-L</option>
          <option value="l-xl">L-XL</option>
          <option value="free size">Free Size</option>
        </select>

    
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="px-3 py-2 w-full sm:w-auto rounded-md border outline-none hover:bg-[#839c62] transition-all text-sm"
        >
          <option value="">All Colors</option>
          <option value="pink">Pink</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="fuchsia">Fuchsia</option>
          <option value="kora">Kora</option>
        </select>

      
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 w-full sm:w-auto rounded-md border outline-none hover:bg-[#839c62] transition-all text-sm"
        >
          <option value="">All Categories</option>
          <option value="kurta">Kurta</option>
          <option value="blazer">Blazer</option>
          <option value="gharara">Gharara</option>
          <option value="sharara">Sharara</option>
          <option value="aagaaz">Aagaaz</option>
          <option value="paakhi">Paakhi</option>
        </select>
      </div>

     
      <div className="w-full sm:w-auto">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-3 py-2 w-full sm:w-auto rounded-md border outline-none hover:bg-[#839c62] transition-all text-sm"
        >
          <option value="">Default Sorting</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
