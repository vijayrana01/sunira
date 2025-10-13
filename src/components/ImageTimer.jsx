import React, { useEffect, useState } from "react";
import image02 from "../assets/image02.jpg";
import image05 from "../assets/image05.jpg";
import image06 from "../assets/image06.jpg";
import image07 from "../assets/image07.jpg";
import image08 from "../assets/image08.jpg";
import image09 from "../assets/image09.jpg";
import image10 from "../assets/image10.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.jpg";
import image20 from "../assets/image20.jpg";
import image21 from "../assets/image21.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const ImageTimer = () => {
  const [index, setIndex] = useState(0);

  const images = [
    image02,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image20,
    image21,
  ];

  const Size = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + Size;
        return next >= images.length ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImages = images.slice(index, index + Size);

  const slidePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const slideNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <h1 className="flex justify-center items-center">
        <span className="border-b-2 border-black text-xl md:text-3xl">
          FOLLOW US ON INSTAGRAM
        </span>
      </h1>
      <div className="hidden md:w-[80%] md:flex md:justify-center md:items-center  md:overflow-hidden mt-10">
        {currentImages.map((item, id) => (
          <img
            key={id}
            src={item}
            className="w-70 h-90 object-cover  transition-all duration-700"
          />
        ))}
      </div>

      <div className="md:hidden relative">
        <img className="w-70 h-90 object-cover mt-5" src={images[index]} alt="" />
        <button className="text-xl sm:top-150 h-6 w-6 rounded-full bg-amber-50 absolute left-6 top-55" onClick={() => slidePrev()}>
          <FaChevronLeft />{" "}
        </button>
        <button className="text-xl sm:top-150 h-6 w-6 rounded-full bg-amber-50 absolute right-6 top-55" onClick={() => slideNext()}>
          <FaAngleRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default ImageTimer;
