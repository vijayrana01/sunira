import React, { useState } from "react";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import footerImg from "../assets/footerImg.png";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 px-4 py-10  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImg})` }}
   
    >
     

      <div className="flex justify-center items-center mt-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-lg border-2 border-black"
        >
          <input
            value={email}
            type="email"
            placeholder="Email"
            className="flex-1 px-3 py-2 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="px-3 py-2 bg-green-500 text-white hover:bg-gray-800 transition">
            <AiOutlineMail className="text-2xl" />
          </button>
        </form>
      </div>

      <div className="flex items-start flex-col md:flex-row md:justify-center md:items-start gap-10 md:gap-40 mt-10 text-center md:text-left">
        <div className="flex flex-col gap-6 items-start ">
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all items-start"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-6 ">
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/"
          >
            Shop
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/about"
          >
            Press
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/contact"
          >
            FAQs
          </Link>
        </div>

        <div className="flex flex-col items-start gap-6">
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/"
          >
            Ready to Ship
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/about"
          >
            Shipping & Payment
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all"
            to="/contact"
          >
            Returns & Exchanges
          </Link>
        </div>

        <div className="flex flex-col  items-center md:items-start gap-6">
          <a
            className="flex items-center gap-2 hover:underline underline-offset-4 transition-all"
            href=""
          >
            <FaInstagram className="text-2xl" /> Instagram
          </a>
          <Link
            className="flex items-center gap-2 hover:underline underline-offset-4 transition-all"
            to=""
          >
            <CiFacebook className="text-2xl" /> Facebook
          </Link>
        </div>
      </div>

      <h1 className="text-center mt-8 text-sm md:text-base">
        All Rights Reserved | © 2025 Sunira{" "}
        <span className="hover:underline underline-offset-4 transition-all cursor-pointer">
          Terms
        </span>{" "}
        <span className="hover:underline underline-offset-4 transition-all cursor-pointer">
          Privacy
        </span>
      </h1>
    </div>
  );
};

export default Footer;
