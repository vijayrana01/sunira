
import React, { createContext, useState, useContext } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR"); 

 
  const rates = {
    INR: 1,
    USD: 0.011, 
  };

  const convertPrice = (price) => {
    return (price * rates[currency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
