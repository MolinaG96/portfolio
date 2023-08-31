import React, { useEffect, useState } from "react";
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

  const imageData = [
    {
      link: "https://mobile-gear-front.onrender.com/",
      src: "https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463035/portfolio/more-img/mobile-gear_z2ckvy.png",
      alt: "MG",
    },
    {
      link: "https://github.com/MolinaG96/proyecto-inmobiliaria-front",
      src: "https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463052/portfolio/more-img/inmobiliaria_g8tvig.png",
      alt: "inmobiliaria",
    },
    {
      link: "https://github.com/sheinken88/Fast-Delivery-Front",
      src: "https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463082/portfolio/more-img/delivery_qcttdu.png",
      alt: "delivery",
    },
  ];

  const [reloadKey, setReloadKey] = useState(1);

  const handleReload = () => {
    setReloadKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    handleReload();
    setTimeout(() => {
      handleReload();
    }, 200);
  }, [reloadKey == 0]);

  return (
    <div className="projects-div-father">
      <Sign />
      <div className="projects-div">Projects</div>
      <Slider className="slider" key={reloadKey} {...sliderSettings}>
        {imageData.map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.src} alt={image.alt} className="slider-image" />
          </a>
        ))}
      </Slider>
    </div>
  );
};
