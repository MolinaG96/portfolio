import React, { useState } from "react";
import "../styles/button.css";
import madera from "../assets/boton-madera.png";

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
        src={madera}
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
    // <div onClick={() => setSelectedButton(title)}>
    //   <img
    //     src={madera}
    //     alt="Madera"
    //     className="madera"
    //     style={{ left: length }}
    //   />
    //   <p
    //     className="texto"
    //     style={{
    //       left: lengthText,
    //     }}
    //   >
    //     {title}
    //   </p>
    // </div>
  );
};

export default Button;
