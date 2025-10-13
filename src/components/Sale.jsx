import React, { useState } from "react";
import image26 from "../assets/image26.jpg";
import { sales } from "../sales";
import { useCurrency } from "../context/CurrencyContext";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Sale = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { convertPrice, currency } = useCurrency();
  const itemsPerPage = 4;

  const filteredSales = [...sales]
    .filter((item) =>
      color ? item.name.toLowerCase().includes(color.toLowerCase()) : true
    )
    .filter((item) =>
      size ? item.size.trim().toLowerCase() === size.toLowerCase() : true
    )
    .filter((item) =>
      category
        ? item.category.trim().toLowerCase() === category.toLowerCase()
        : true
    )
    .filter((item) => {
      if (showPriceFilter && minPrice && maxPrice) {
        return item.price >= Number(minPrice) && item.price <= Number(maxPrice);
      }
      return true;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price;
    });

  const totalPages = Math.ceil(filteredSales.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredSales.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full h-full ">
      
      <img className="w-full" src={image26} alt="" />
     
      <div className="md:w-full md:h-full xl:px-50">
         <h1 className="md:text-3xl md:pt-10 pt-4">Sale ({filteredSales.length} Result)</h1>
        <Filters
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          color={color}
          setColor={setColor}
          size={size}
          setSize={setSize}
          category={category}
          setCategory={setCategory}
          showPriceFilter={showPriceFilter}
          setShowPriceFilter={setShowPriceFilter}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          totalResult={filteredSales.length}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {paginatedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              convertPrice={convertPrice}
              currency={currency}
            />
          ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Sale;
