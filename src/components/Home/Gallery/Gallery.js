import React, { useState } from "react";
import Images from "../../Data/ImageGelary/ImageGelary";
const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(Images[0]);
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Image Gallery</h2>
        </div>
        <div className="single_img">
          <img src={selectedImg} alt="" />
        </div>
        <div className="row gallery_img">
          {Images.map((img, index) => (
            <div className="col-lg-1 col-md-3 col-sm-4" key={index}>
              <img
                src={img}
                onClick={() => setSelectedImg(img)}
                alt="gallery"
                style={{ border: selectedImg === img ? "3px solid black" : "" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
