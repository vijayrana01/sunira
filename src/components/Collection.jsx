import React from "react";
import { useState } from "react";
import MouseEvent2 from "./MouseEvent2";


const Collection = () => {
  const [child, setChild] = useState(false);

  const handleMouseEnter = () => {
    setChild(true);
  };

  const handleMouseLeave = () => {
    setChild(false);
  };
  return (
    <div
      className="  md:px-2 md:py-1 md:pb-6 md:pt-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="inline-block cursor-pointer">SHOP BY COLLECTION</span>
      {child && (
        <div className="md:absolute md:top-16 md:-left-25 md:z-50 md:w-300 md:bg-black/50 md:text-white md:p-4 md:shadow-lg rounded  h-[480px]">
          <MouseEvent2/>
        </div>
      )}
    </div>
  );
};

export default Collection;
