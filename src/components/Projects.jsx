import React from "react";
import Sign from "../commons/sign";
import "../styles/projects.css";
import "../styles/container.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projects-div-father">
      <Sign />
      <div className="projects-div">Projects</div>
      <Slider className="slider" {...sliderSettings}>
        <a
          href="https://mobile-gear-front.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463035/portfolio/more-img/mobile-gear_z2ckvy.png"
            alt="MG"
            className="slider-image"
          />
        </a>
        <a
          href="https://github.com/MolinaG96/proyecto-inmobiliaria-front"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463052/portfolio/more-img/inmobiliaria_g8tvig.png"
            alt="inmobiliaria"
            className="slider-image"
          />
        </a>
        <a
          href="https://github.com/sheinken88/Fast-Delivery-Front"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463082/portfolio/more-img/delivery_qcttdu.png"
            alt="delivery"
            className="slider-image"
          />
        </a>
      </Slider>
    </div>
  );
};
