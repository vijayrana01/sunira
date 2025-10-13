import React, { useState } from "react";

import Hero from "./Hero";
import Section2 from "./Section2";
import Section from "./Section";
import Hero2 from "./Hero2";
import SectionSale from "./SectionSale";
import VideoSection from "./VideoSection";
import ImageTimer from "./ImageTimer";
import SlideImages from "./SlideImages";

const Home = () => {
  return (
    <div>
      <SlideImages />
      <Hero />
      <Section />
      <Hero2 />
      <Section2 />
      <SectionSale />
      <VideoSection />
      <ImageTimer />
    </div>
  );
};
export default Home;
