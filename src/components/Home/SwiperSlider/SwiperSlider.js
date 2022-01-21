import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Images from "../../Data/ImageGelary/ImageGelary";
const SwiperSlider = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="title">
          <h2>Swiper Slider</h2>
        </div>
        <div className="row">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {Images.map((img, index) => (
              <div className="col-md-4" key={index}>
                <SwiperSlide>
                  <img src={img} className="w-100 h-100" alt="" />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;
