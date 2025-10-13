import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import image01 from "../assets/image01.png";
import { useNavigate } from "react-router-dom";

const AuthPopup = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.email === formData.email &&
        savedUser.password === formData.password
      ) {
        alert("Login successful!");
        onClose();
        navigate("/");
      } else {
        alert("Invalid credentials!");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Signup successful! Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30">
      <div className="w-[90%] max-w-[500px] bg-white shadow-2xl  p-8 relative">
        <HiX
          className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600 hover:text-black"
          onClick={onClose}
        />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <img
              src={image01}
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {!isLogin && (
            <>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="w-full mb-4 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#39731d]"
              />
            </>
          )}

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#39731d]"
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className="w-full mb-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#39731d]"
          />

          <button className="w-full py-2 border rounded-md text-black hover:text-white hover:bg-[#39731d] transition">
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>

          <p className="text-sm mt-2 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthPopup;
