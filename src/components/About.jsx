import React from "react";

const About = () => {
  return (
    <div className="mt-15 w-full h-full flex justify-center items-center flex-col leading-7">
    
      <div className="w-full h-full md:w-[50%] md:h-[40%]">
        <h1 className="text-xl md:text-4xl leading-7 flex justify-center items-center">
          <span>SUNIRA</span>
        </h1>
        <p className="text-center italic text-[#536a82] mb-10">
          It’s Not Just Fashion…
        </p>
        <p className="text-center text-[#536a82] ">
          It’s a cultural resonance of hand-crafted luxury and unassuming
          elegance rooted in heritage crafts. Each exquisitely designed piece is
          handmade and curated with joy, love and honor. The artisanal limited
          ensembles are stories woven with skilled craftsmanship that reflect
          beauty and timeless elegance for the contemporary free-spirited woman.
        </p>
      </div>

      
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-5 pt-10">
      
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
          <h1 className="text-4xl">DESIGN</h1>
          <span className="paragraph text-[#3a721d] text-5xl">Sensibilities</span>
          <p className="text-[#536a82] text-justify text-md md:text-xl">
            SUNIRA blends tradition with modern sensibilities to create haute
            couture in flattering cuts with delicate embroideries and stunning
            details using textiles made from luxurious natural fibers. The
            exquisitely designed classic outfits in vibrant designs, colors and
            styles charm in a fluid language of beauty, grace and culture.
            SUNIRA embraces diversity in its entirety—diversity of form,
            techniques, art and caters to diverse communities. Our silhouettes
            are an amalgamation of contemporary style, grace, and comfort
            resulting in the best look —- Anytime, Anywhere.
          </p>
        </div>

        
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
          <h1 className="text-4xl">CREATIVE</h1>
          <span className="paragraph text-5xl text-[#3a721d]">Journey</span>
          <p className="text-[#536a82] text-justify text-md md:text-xl">
            SUNIRA couture is a classical representation of traditions of
            hand-crafting. From handloom textile, hand-printing techniques,
            hand-embroidery to hand-stitching and hand-made packaging, the
            production life-cycle of a SUNIRA outfit remains rooted in
            traditional design crafts and customs with a strong respect for
            nature. The stunning outfits created by SUNIRA are a soulful blend
            of indigenous culture and finest craftsmanship with designs and
            patterns inspired by numerous forms of Indian art. It is our
            endeavour to take the needs of contemporary fashion to the craftsmen
            and bring the most resplendent version of the numerous crafts to
            people.
          </p>
        </div>

        <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
          <h1 className="text-4xl">EMPOWERING</h1>
          <span className="paragraph text-5xl text-[#3a721d]">Communities</span>
          <p className="text-[#536a82] text-justify text-md md:text-xl">
            SUNIRA strongly believes in socially responsible business practices.
            SUNIRA is committed towards sustaining and reviving traditional
            forms of textile printing and crafts by providing steady and gainful
            livelihood opportunities to skilled artisan and weaver communities.
            SUNIRA also provides skill development training to unskilled women
            and empowers them with sustainable economic independence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
