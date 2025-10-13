import React, { useState } from "react";
import { Data } from "../Data";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { useCurrency } from "../context/CurrencyContext";

const Section = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { convertPrice, currency } = useCurrency();

  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="w-full h-full   mt-10">
      <h1 className="flex justify-center items-center pb-10 p-4">
        <span className="border-b-2 border-black text-lg  lg:text-2xl">
          OUR 'DHUN' FAVOURITES
        </span>
      </h1>
      <div className="hidden md:w-full md:h-full   md:flex justify-center items-center  md:gap-20 ">
        {Data?.map((item, id) => (
          <div key={id} className="w-[350px]  ">
            <img
              className=" w-[325px] h-[100%] object-contain"
              src={item.image}
              alt=""
            />
            <p className="text-center">{item.name}</p>
            <p className="text-center">
              {currency === "INR" ? "RS" : "$"} {convertPrice(item.price)}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-full md:hidden flex justify-center items-center flex-col relative">
        <img className="w-[350px]" src={Data[imageIndex].image} alt="" />
        <p className="p-2 text-sm">{Data[imageIndex].name}</p>
        <p className="text-sm text-center">
          {currency === "INR" ? "RS" : "$"} {convertPrice(Data[imageIndex].price)}
        </p>

        <button
          onClick={() => handlePrev()}
          className="text-lg sm:top-150 h-6 w-6 rounded-full bg-amber-50 absolute left-6 top-55"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => handleNext()}
          className="text-lg sm:top-150 h-6 w-6 rounded-full bg-amber-50 absolute right-6 top-55"
        >
          <FaAngleRight />
        </button>

        <div className="flex justify-center items-center gap-3 absolute bottom-25">
          {Data?.map((idx, id) => (
            <div
              key={id}
              className={`h-3 w-3 rounded-full  ${
                imageIndex === id ? "bg-gray-300" : "bg-gray-600"
              } `}
              onClick={() => setImageIndex(imageIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
