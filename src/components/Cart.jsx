import React from "react";
import { useCart } from "../contextCart/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import { MdOutlineDeleteForever } from "react-icons/md";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const { convertPrice, currency } = useCurrency();

  if (cart.length === 0) {
    return (
      <p className="p-4 text-center text-lg md:text-3xl text-[#39731d]">
        Your cart is empty.
      </p>
    );
  }

  const orderValue = cart.reduce((total, item) => total + item.price, 0);

  const shipping = orderValue > 0 ? 100 : 0;
  const total = orderValue + shipping;

  return (
    <div className=" md:px-30 ">
      <h2 className="text-xl font-semibold text-center mb-4">Shopping Bag</h2>
      <div className="flex flex-col md:flex md:flex-row gap-2 md:justify-evenly">
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center  md:border "
            >
              <div className="flex gap-4 items-center ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:h-70 md:w-70  object-contain"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p>
                    {currency === "INR" ? "₹" : "$"} {convertPrice(item.price)}
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <button
                  onClick={() => removeFromCart(index)}
                  className="px-2 py-1 text-[#7f827f]  text-2xl md:rounded "
                >
                  <MdOutlineDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 border-t-1 md:border p-6 md:p-10 border-[#7f827f]  w-full md:w-[500px] h-auto md:h-[700px]">
          <p className="text-sm text-[#7f827f]">Add a discount code</p>
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
            <input
              className="flex-1 px-3 py-2 border border-black outline-none"
              placeholder="Coupon Code"
              type="text"
            />
            <button className="px-6 py-2 border border-black hover:bg-[#7f827f] hover:text-white transition-all">
              ADD
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <p>
              ORDER VALUE: {currency === "INR" ? "₹" : "$"}
              {convertPrice(orderValue)}/-
            </p>

            <p className="text-lg">
              Total: {currency === "INR" ? "₹" : "$"} {convertPrice(total)}/-
            </p>
          </div>

          <button className="w-full mt-4 px-6 py-3 border border-black text-black hover:bg-[#7f827f] hover:text-white transition-all rounded">
            CONTINUE TO CHECKOUT
          </button>
          <p>
            Prices and delivery costs are not confirmed until you've reached the
            checkout.
          </p>
          <p>
            30 days withdrawal and free returns. Read more about return and
            refund policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
