import React from "react";
import { HiX } from "react-icons/hi";
const IScollection = ({handleCollectionclose}) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col justify-center items-center">
      <button
        onClick={handleCollectionclose}
        className="absolute top-5 right-5 text-4xl hover:text-red-500"
      >
        <HiX />
      </button>
    </div>
  );
};

export default IScollection;
