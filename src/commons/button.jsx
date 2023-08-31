import React, { useState } from "react";
import "../styles/button.css";

const Button = ({ length, title, lengthText, setSelectedButton }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <div
      className={`button-container ${isClicked ? "clicked" : ""}`}
      onClick={() => {
        setSelectedButton(title);
        handleButtonClick();
      }}
    >
      <img
        src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463087/portfolio/more-img/boton-madera_ifwihk.png"
        alt="Madera"
        className="madera"
        style={{ left: length }}
      />
      <p
        className="texto"
        style={{
          left: lengthText,
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Button;
