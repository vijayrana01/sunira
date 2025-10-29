import React, { useEffect, useRef, useState } from "react";
import sunira from "../assets/sunira.png";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../contextCart/CartContext";
import { IoCartOutline, IoSearch, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
import { HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import image01 from "../assets/image01.png";
import Category from "./Category";
import Collection from "./Collection";
import DropDown from "./DropDown";
import ISCategory from "./Iscategory";
import IScollection from "./IScollection";
import gsap from "gsap";

const Nav = () => {
  const { cart } = useCart();
  const [isOpen, setIsopen] = useState(false);
  const [isCategory, SetIsCategory] = useState(false);
  const [iscollection, SetIsCollection] = useState(false);
  const sidebarRef = useRef(null);

  const handleClose = () => {
    SetIsCategory(false);
    setIsopen(true);
  };

  const handleCollectionclose = () => {
    SetIsCollection(false);
    setIsopen(true);
  };

  // ✅ Animate sidebar using GSAP
  useEffect(() => {
    if (!sidebarRef.current) return;

    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  return (
    <div className="w-full md:h-[90px] md:px-[30px] xl:px-[60px] md:flex md:justify-between items-center md:items-baseline gap-5 text-xl relative lg:text-sm lg:px-[20px] lg:justify-between lg:gap-2 xl:text-xl ">
      {/* ---------- Logo ---------- */}
      <div className="w-full h-[90px] flex justify-center items-center md:w-[250px] md:h-[85px]">
        <img
          className="md:w-[150px] md:h-[40px] lg:w-[200px]"
          src={sunira}
          alt="logo"
        />
      </div>

      {/* ---------- Desktop Menu ---------- */}
      <div className="hidden md:hidden lg:flex lg:justify-center md:items-center md:gap-10 relative">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <Category />
        <Collection />
        <NavLink to="/sale">SALE</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>

      {/* ---------- Icons & Menu Button ---------- */}
      <div className="flex justify-between md:flex md:justify-between md:items-center md:gap-6 md:text-2xl">
        <div className="flex justify-center items-center p-3 md:flex md:justify-between gap-6">
          <DropDown />

          <NavLink to="/favorate">
            <FaRegHeart />
          </NavLink>

          <NavLink to="/searching">
            <CiSearch />
          </NavLink>

          <NavLink to="/login">
            <CgProfile />
          </NavLink>

          <div className="relative">
            <NavLink to="/cart">
              <IoCartOutline className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* ---------- Mobile Menu Button ---------- */}
        <div className="lg:hidden xl:hidden text-xl p-3">
          <button
            onClick={() => setIsopen(!isOpen)}
            className="text-2xl lg:hidden"
          >
            {isOpen ? <HiX /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile Sidebar Menu (Always Mounted) ---------- */}
      <div
        ref={sidebarRef}
        className="lg:hidden xl:hidden fixed top-0 right-0 w-full h-full bg-white flex flex-col justify-center items-center z-50 translate-x-full opacity-0"
      >
        <button
          onClick={() => setIsopen(false)}
          className="absolute top-5 right-5 text-4xl hover:text-red-500"
        >
          <HiX />
        </button>

        <img src={image01} alt="flower.logo" className="mb-5" />

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block text-yellow-400 font-semibold"
              : "block hover:text-yellow-400"
          }
          onClick={() => setIsopen(false)}
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "block text-yellow-400" : "block hover:text-yellow-400"
          }
          onClick={() => setIsopen(false)}
        >
          ABOUT
        </NavLink>

        <button
          className="lg:hidden"
          onClick={() => {
            SetIsCategory(true);
            setIsopen(false);
          }}
        >
          SHOP BY CATEGORY
        </button>

        <button
          onClick={() => {
            SetIsCollection(true);
            setIsopen(false);
          }}
        >
          SHOP BY COLLECTION
        </button>

        <NavLink
          to="/sale"
          className={({ isActive }) =>
            isActive
              ? "block text-yellow-400 font-semibold"
              : "block hover:text-yellow-400"
          }
          onClick={() => setIsopen(false)}
        >
          SALE
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "block text-yellow-400 font-semibold"
              : "block hover:text-yellow-400"
          }
          onClick={() => setIsopen(false)}
        >
          CONTACT
        </NavLink>
      </div>

      {/* ---------- Conditional Modals ---------- */}
      {isCategory && <ISCategory handleClose={handleClose} />}
      {iscollection && (
        <IScollection handleCollectionclose={handleCollectionclose} />
      )}
    </div>
  );
};

export default Nav;
