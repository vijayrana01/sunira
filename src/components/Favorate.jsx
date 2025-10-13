import React from "react";
import { useFav } from "../favourateContext/favorate";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useCurrency } from "../context/CurrencyContext";

const Favorate = () => {
  const { fav, removeFavorite } = useFav();
  const { currency, convertPrice } = useCurrency();

  if (fav.length === 0) {
    return (
      <p className="p-4 text-center text-lg md:text-3xl text-[#39731d]">
        Your WishList is empty
      </p>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#39731d]">
        Favorite Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {fav.map((item) => (
          <div
            key={item.id}
            className="h-80 md:h-130 w-full p-2 flex flex-col items-center gap-2 border shadow-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 md:h-100 object-cover rounded"
            />
            <p className="text-sm font-medium text-center">{item.name}</p>
            <p className="text-sm text-gray-600 text-center">
              {currency === "INR" ? "₹" : "$"} {convertPrice(item.price)}
            </p>
            <button onClick={() => removeFavorite(item.id)} className="">
              <MdOutlineDeleteForever size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorate;
