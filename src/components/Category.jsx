import React, { useState } from "react";
import MouseEvent from "./MouseEvent";
const Category = () => {
  const [child, setChild] = useState(false);
  const handleMouseEnter = () => {
    setChild(true);
  };

  const handleMouseLeave = () => {
    setChild(false);
  };
  return (
    <div
      className=" px-2 py-1 pb-6 pt-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="inline-block cursor-pointer">SHOP BY CATEGORY</span>

      {child && (
        <div className="absolute top-16 -left-25 z-50 w-300 bg-black/50 text-white p-4 shadow-lg rounded cursor-pointer">
          <MouseEvent />
        </div>
      )}
    </div>
  );
};

export default Category;
