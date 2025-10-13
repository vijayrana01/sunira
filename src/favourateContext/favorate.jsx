import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addFavorite = (item) => {
    if (!fav.find((f) => f.id === item.id)) {
      setFav((prev) => [...prev, item]);
    }
  };

  const removeFavorite = (itemId) => {
    setFav((prev) => prev.filter((item) => item.id !== itemId));
  };
  return (
    <FavoriteContext.Provider value={{ fav, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFav = () => useContext(FavoriteContext);
