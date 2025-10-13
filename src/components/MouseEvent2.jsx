import React from "react";

const MouseEvent2 = () => {
  return (
    <div className="p-5  flex justify-center items-start gap-30 cursor-pointer">
      <div className="">
        <h1 className="text-xl pb-3">Latest Collection</h1>
        <span className="text-sm">Dhun</span>
      </div>
      <div>
        <ul className="flex justify-center items-start flex-col text-sm gap-4">
          <li className="hover:underline transition-all">Kainaat</li>
          <li className="hover:underline transition-all">Chandra Bindu</li>
          <li className="hover:underline transition-all">Bindu</li>
          <li className="hover:underline transition-all">Ruhaani</li>
          <li className="hover:underline transition-all">Mrida</li>
          <li className="hover:underline transition-all">Dhaaga</li>
          <li className="hover:underline transition-all">Lihaaf</li>
          <li className="hover:underline transition-all">Rushaan Edit 2</li>
          <li className="hover:underline transition-all">Aagaaz</li>
          <li className="hover:underline transition-all">Ethereal</li>
          <button className=" py-1 text-start hover:bg-green-500/60 transition-all">
            View All
          </button>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center items-start flex-col text-sm gap-4">
          <li className="hover:underline transition-all"> Gulzaar Edit</li>
          <li className="hover:underline transition-all">Jugni</li>
          <li className="hover:underline transition-all">Aira</li>
          <li className="hover:underline transition-all">Mausam-E-Sukoon</li>
          <li className="hover:underline transition-all">Gulzaar</li>
          <li className="hover:underline transition-all">Mool</li>
          <li className="hover:underline transition-all">Shibui</li>
          <li className="hover:underline transition-all">Paakhi</li>
          <li className="hover:underline transition-all">Nazm</li>
          <li className="hover:underline transition-all">Iro Meir</li>
          <button className=" py-1 text-start hover:bg-green-500/60 transition-all">
            View All
          </button>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center items-start flex-col text-sm gap-4">
          <li className="hover:underline transition-all">Nitya 2025</li>
          <li className="hover:underline transition-all">Nitya 2024</li>
          <li className="hover:underline transition-all"></li>
        </ul>
      </div>
    </div>
  );
};

export default MouseEvent2;
