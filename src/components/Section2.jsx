import React, { useState } from "react";
import { Data2 } from "../Data2";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { useCurrency } from "../context/CurrencyContext";

const Section2 = () => {
  const [index, setIndex] = useState(0);
  const { convertPrice, currency } = useCurrency();

  const HandlePrev = () => {
    setIndex((prev) => (prev === 0 ? Data2.length - 1 : prev - 1));
  };

  const HandleNext = () => {
    setIndex((prev) => (prev === Data2.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="w-full h-full py-10 ">
      <h2 className="text-lg sm:text-xl md:text-2xl  mb-4 flex justify-center items-center">
        <span className="border-b-2 border-black">
          OUR 'NITYA 25' FAVOURITES
        </span>
      </h2>
      <div className="hidden sm:w-full sm:flex sm:justify-center sm:items-center sm:gap-20 sm:object-cover ">
        {Data2?.map((item, id) => (
          <div key={id} className="w-[400px]   ">
            <img src={item.image} alt="" />
            <p className="text-center">{item.name}</p>
            <p className="text-center">
              {currency=== "INR" ? "RS" : "$"} {convertPrice(item.price)}
            </p>
          </div>
        ))}
      </div>
      <div className="md:hidden w-full h-full relative">
        <img src={Data2[index].image} alt="" />
        <p className="text-sm text-center">{Data2[index].name}</p>
        <p className="text-sm text-center">
          {currency === "INR" ? "RS" : "$"} {convertPrice(Data2[index].price)}
        </p>
        <button
          className="text-lg sm:top-150 h-6 w-6 rounded-full bg-amber-50 absolute left-6 top-55"
          onClick={() => HandlePrev()}
        >
          <FaChevronLeft />
        </button>
        <button
          className="text-lg sm:top-150 h-6 w-6 rounded-full bg-amber-50 absolute right-6 top-55"
          onClick={() => HandleNext()}
        >
          <FaAngleRight />
        </button>

        <div className="flex justify-center items-center gap-3 absolute bottom-15 left-25">
          {Data2?.map((idx, id) => (
            <div
              key={id}
              className={`h-3 w-3 rounded-full  ${
                index === id ? "bg-gray-300" : "bg-gray-700"
              } `}
              onClick={() => setIndex(id)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
