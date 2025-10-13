import React from "react";
import { HiX } from "react-icons/hi";
const ISCategory = ({ handleClose }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col justify-center items-center">
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 text-4xl hover:text-red-500"
      >
        <HiX />
      </button>
      <div className="flex justify-center items-center flex-row gap-8">
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="text-sm ">
            <ul className="flex justify-center  gap-2 flex-col items-start">
              <span className="text-xl">WOMEN</span>
              <span className=" text-lg">UPPER</span>

              <li className="hover:underline">Kurtasli </li>
              <li className="hover:underline">Kaftans</li>
              <li className="hover:underline">Dresses</li>
              <li className="hover:underline">Shirts</li>
              <li className="hover:underline">Tops/Tunics</li>
              <li className="hover:underline">Coats</li>
              <li className="hover:underline">Blouses/Cholis</li>
              <li className="hover:underline">Blazers</li>
              <li className="hover:underline">Cape/Kimono</li>
              <li className="hover:underline">Overlays/Jackets</li>
            </ul>
          </div>
          <div className=" pt-3 pb-2">
            <span className="inline">MEN</span>
            <ul className="flex justify-center items-start flex-col gap-4 text-sm pb-62">
              <li className="hover:underline">Men Shirts</li>
              <li className="hover:underline">Men Kurtas</li>
              <li className="hover:underline">Men Pants</li>
              <li className="hover:underline">Jackets/Blazers</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-sm pt-9">
            <ul className="flex justify-center  gap-2 flex-col items-start">
              <span className="text-lg ">LOWER</span>
              <li className="hover:underline"> Ijar</li>
              <li className="hover:underline">Pants </li>
              <li className="hover:underline">Salwar</li>
              <li className="hover:underline">Skirts</li>
              <li className="hover:underline">Lehenga</li>
              <li className="hover:underline">Gharara/Sharara</li>
              <li className="hover:underline">DRAPES</li>
              <li className="hover:underline">Sarees</li>
              <li className="hover:underline">Dupattas</li>
              <li className="hover:underline">Doshala</li>
            </ul>
          </div>
          <div className="pt-3 pb-2">
            <span>ACCESSORIES</span> 
            <ul className="flex justify-center items-start flex-col gap-4 text-sm pb-70">
              <li className="hover:underline">All</li>
              <li className="hover:underline">Bags</li>
              <li className="hover:underline">Hats </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISCategory;
