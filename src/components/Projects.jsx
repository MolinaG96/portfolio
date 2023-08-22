import React from "react";
import Sign from "../commons/sign";
import "../styles/projects.css";
import "../styles/container.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MG from "../assets/mobile-gear.png";
import inmobiliaria from "../assets/inmobiliaria.png";
import delivery from "../assets/delivery.png";

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
          <img src={MG} alt="MG" className="slider-image" />
        </a>
        <a
          href="https://github.com/MolinaG96/proyecto-inmobiliaria-front"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={inmobiliaria} alt="inmobiliaria" className="slider-image" />
        </a>
        <a
          href="https://github.com/sheinken88/Fast-Delivery-Front"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={delivery} alt="delivery" className="slider-image" />
        </a>
      </Slider>
    </div>
  );
};
