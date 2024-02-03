import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enfortixpng from "../assets/Enfortixpng.png";
import knit from "../assets/knit.png";
import Logo from "../assets/Logo.png";
import TextBook from "../assets/TextBookLogo.png";

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className=" items-center ">
      <Slider {...settings}>
        <img
          src={Enfortixpng}
          alt=""
          className="w-[21px] h-12 object-contain "
        />
        <img
          src={knit}
          alt=""
          className="w-[21px] h-12 object-contain"
        />
        <img
          src={Logo}
          alt=""
          className="w-[21px] h-12 object-contain"
        />
            <img
              src={TextBook}
              alt=""
              className="w-[21px] h-12 object-contain  gap-[1px]"
            />
      </Slider>
    </div>
  );
};

export default Carousel;
