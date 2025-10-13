import React from "react";
import { useCart } from "../contextCart/CartContext";

const ProductCard = ({ product, convertPrice, currency }) => {
  const { addToCart } = useCart();

  return (
    <div className="p-4 shadow hover:shadow-lg transition-transform flex flex-col items-center relative bg-white rounded-lg">
     
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 md:h-150 object-cover rounded"
      />

    
      {product.sale && (
        <div className="px-3 py-1 bg-white text-black text-xs font-semibold absolute top-5 left-5 ">
          {product.sale}
        </div>
      )}

   
      <h2 className="text-sm mt-3 text-center font-medium">{product.name}</h2>
      {product.discount && (
        <p className="text-[#839c62] text-xs mt-1">{product.discount}</p>
      )}

      <div className="mt-2 text-center flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <p className="text-black font-semibold">
            {currency === "INR" ? "₹" : "$"} {convertPrice(product.price)}
          </p>
          {product.oldPrice && (
            <p className="line-through text-xs text-gray-400">
              {currency === "INR" ? "₹" : "$"} {convertPrice(product.oldPrice)}
            </p>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-2 px-3 py-1 text-sm hover:text-white hover:bg-[#39731d]  text-black transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
