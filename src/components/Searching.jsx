import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { ClothesData } from "../ClothesData";
import { useCurrency } from "../context/CurrencyContext";
import { useCart } from "../contextCart/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { useFav } from "../favourateContext/favorate";
import Filters from "./Filters";
import { useReducer } from "react";
import gsap from "gsap";

const Searching = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { convertPrice, currency } = useCurrency();
  const { addToCart } = useCart();
  const { fav, addFavorite, removeFavorite } = useFav();
  const navigate = useNavigate();

  const searchRef = useReducer(null);

  const filteredData = ClothesData.filter((item) =>
    search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
  )
    .filter((item) =>
      color ? item.color?.toLowerCase() === color.toLowerCase() : true
    )
    .filter((item) =>
      size ? item.size?.toLowerCase() === size.toLowerCase() : true
    )
    .filter((item) =>
      category ? item.category?.toLowerCase() === category.toLowerCase() : true
    )
    .filter((item) => (minPrice ? item.price >= Number(minPrice) : true))
    .filter((item) => (maxPrice ? item.price <= Number(maxPrice) : true))
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  const toggleFavorite = (item) => {
    const isFav = fav.some((f) => f.id === item.id);
    if (isFav) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <div ref={searchRef}>
      <div className="w-full  h-[40px] md:h-[60px] border flex justify-center items-center">
        <input
          value={search}
          type="text"
          className="w-full h-[60px] px-2 py-3 outline-none"
          placeholder="Search....."
          onChange={(e) => setSearch(e.target.value)}
        />
        <RxCross1
          className="cursor-pointer text-xl"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="bg-white shadow w-[95%] md:w-[100%] mx-auto mt-2 p-2">
        <p className="mb-4 font-semibold text-gray-700 pl-3 md:pl-7">
          Total Results: {filteredData.length}
        </p>

        <div className="md:pl-4">
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
            totalResult={filteredData.length}
          />
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {filteredData.map((item, index) => {
              const isFavorite = fav.some((f) => f.id === item.id);
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 cursor-pointer "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 md:w-100 md:h-130 object-cover "
                  />
                  <h3 className="text-sm font-medium text-gray-800 text-center">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currency === "INR" ? "₹" : "$"} {convertPrice(item.price)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Size: {item.size || "Not specified"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Category: {item.category || "Not specified"}
                  </p>
                  <div className="flex justify-between items-center gap-5 mt-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 text-lg text-[#39731d] hover:bg-[#39731d] hover:text-white transition-all"
                    >
                      Add to Cart
                    </button>
                    <button
                      className={`text-xl p-2 rounded 
                       
                      `}
                      onClick={() => toggleFavorite(item)}
                    >
                      <FaRegHeart
                        className={`text-xl p-1/2 rounded-full ${
                          isFavorite
                            ? "bg-red-700 text-white"
                            : "bg-white text-gray-800"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="p-2 text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Searching;
