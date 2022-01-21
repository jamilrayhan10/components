import React from "react";
import Accordion from "../Accordion/Accordion";
import Gallery from "../Gallery/Gallery";
import SwiperCoreSlider from "../SwiperCoreSlider/SwiperCoreSlider";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

const Home = () => {
  return (
    <>
      <Gallery />
      <Accordion />
      <SwiperSlider />
      <SwiperCoreSlider />
    </>
  );
};

export default Home;
