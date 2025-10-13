import React from "react";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Category from "./components/Category";
import Collection from "./components/Collection";
import Sale from "./components/Sale";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CurrencyProvider } from "./context/CurrencyContext";
import Searching from "./components/Searching";
import { CartProvider } from "./contextCart/CartContext";
import Cart from "./components/Cart";
import { FavoriteProvider } from "./favourateContext/favorate";
import Favorate from "./components/Favorate";
import Login from "./components/Login";
import AuthPopup from "./components/AuthPopup";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const SearchLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const AuthLayout = () => {
  return(
  <>
    <Header />
    <Outlet />
  </>
  )
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/category", element: <Category /> },
        { path: "/collection", element: <Collection /> },
        { path: "/sale", element: <Sale /> },
        { path: "/contact", element: <Contact /> },
        { path: "/cart", element: <Cart /> },
        { path: "/favorate", element: <Favorate /> },
      ],
    },
    {
      path: "/searching",
      element: <SearchLayout />,
      children: [{ path: "/searching", element: <Searching /> }],
    },

    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: (
            <AuthPopup open={true} onClose={() => window.history.back()} />
          ),
        },
      ],
    },
  ]);

  return (
    <CurrencyProvider>
      <CartProvider>
        <FavoriteProvider>
          <RouterProvider router={router} />
        </FavoriteProvider>
      </CartProvider>
    </CurrencyProvider>
  );
};

export default App;
