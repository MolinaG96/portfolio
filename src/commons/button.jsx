import React, { useState } from "react";
import "../styles/button.css";
import madera from "../assets/boton-madera.png";

const Button = ({ length, title, lengthText, setSelectedButton }) => {
  return (
    <div onClick={() => setSelectedButton(title)}>
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
  );
};

export default Button;
