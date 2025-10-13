import React from "react";
import image04 from "../assets/image04.png";
import image05 from "../assets/image06.jpg";

const Hero2 = () => {
  return (
    <div className="w-full h-full flex sm:flex-col  flex-col-reverse lg:flex-row mt-20">
     
      <div
        className="w-full flex justify-center items-center flex-col 
        px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 
        py-10 md:py-16 lg:py-20 
        gap-6 text-sm sm:text-base md:text-lg leading-relaxed"
      >
        <img
          className="w-full h-auto object-contain"
          src={image04}
          alt="nitya.logo"
        />

        <p>
          The Nitya collection is our annual ode to reimagining everyday wear
          through the timeless values of Sunira — authenticity, craft, comfort,
          and quiet elegance.
        </p>
        <p>
          This season we return to our soft, breathable mul cotton, hand
          block-printed in traditional Ajrakh using indigenous vegetable dyes. A
          fresh, consciously developed colour palette and new block designs have
          been created in close collaboration with master artisan Aurangzeb.
        </p>
        <p>
          Garments are delicately embellished with thread embroidery and mirror
          accents inspired by Kutch’s traditional Abhala embroidery—a technique
          known for its luminous beauty and cultural depth. Subtle SUNIRA patent
          stitch detailing and contrast threadwork further elevate each piece
          with quiet refinement.
        </p>
        <p>
          Signature Sunira stoles add playful detail through handcrafted
          tassels, katran patchwork, and reflective mirror work—bringing texture
          and whimsy to everyday styling.
        </p>
        <p>
          Silhouettes remain breezy, graceful, and versatile—perfect for travel,
          work, or intimate festive gatherings. Thoughtfully designed to
          transition from a Rakhi or Teej celebration to a regular day at work,
          Nitya 2025 is where craft-led elegance meets everyday ease.
        </p>
        <p>
          Every print, every stitch, every detail honours our lasting
          relationship with artisans and the beauty of the handmade — a quiet
          reminder that celebration lives in the everyday.
        </p>

        <button className="px-5 py-2 border-2 border-black  hover:bg-[#839c62] hover:text-white transition-all duration-300 rounded-md">
          Shop Now
        </button>
      </div>

      
      <div className="w-full">
        <img
          className="w-full h-full object-cover md:object-contain"
          src={image05}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero2;
