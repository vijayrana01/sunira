import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const DropDown = () => {
  const { currency, setCurrency } = useCurrency();
  return (
    <div className="outline-none">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="text-xl"
        
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default DropDown;
