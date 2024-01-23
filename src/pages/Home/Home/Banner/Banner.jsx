import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../../../src/assets/Banner/banner-1.png";
import img2 from "../../../../../src/assets/Banner/banner-2.png";
import img3 from "../../../../../src/assets/Banner/banner-3.png";
const Banner = () => {
  return (
    <div>
      <Carousel autoPlay interval={3000} infiniteLoop>
        <div>
          <img src={img1} />
        </div>

        <div>
          <img src={img2} />
        </div>

        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
