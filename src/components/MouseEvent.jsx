import React from "react";

const MouseEvent = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center gap-30 p-5 ">
        <div className="text-sm">
          <div className="flex justify-center items-start flex-col gap-10">
            <ul className="flex justify-center  gap-4 flex-col items-start">
              <span className="text-xl">WOMEN</span>
              <span className="pt-4 text-lg">UPPER</span>

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
        </div>
        <div className="text-sm flex justify-center items-start pt-16">
          <ul className="flex justify-center  gap-4 flex-col items-start">
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

        <div>
          <h1 className="pb-8">MEN</h1>
          <ul className="flex justify-center items-start flex-col gap-4 text-sm pb-62">
            <li className="hover:underline">Men Shirts</li>
            <li className="hover:underline">Men Kurtas</li>
            <li className="hover:underline">Men Pants</li>
            <li className="hover:underline">Jackets/Blazers/Coats</li>
          </ul>
        </div>
        <div >
          <h1 className="pb-8">ACCESSORIES</h1>
          <ul className="flex justify-center items-start flex-col gap-4 text-sm pb-70">
            <li className="hover:underline">All</li>
            <li className="hover:underline">Bags</li>
            <li className="hover:underline">Hats </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MouseEvent;
