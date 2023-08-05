import React, { useState } from "react";
import "../styles/navbar.css";
import mano from "../assets/mano.png";
import soga from "../assets/soga-nada-sinF.png";
import madera from "../assets/boton-madera.png";

const Navbar = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarHidden(!isNavbarHidden);
    console.log("soy la mano", isNavbarHidden);
  };
  return (
    <div className={`navbar-container ${isNavbarHidden ? "hidden" : ""}`}>
      <img src={mano} alt="Mano" className="mano" onClick={toggleNavbar} />
      <img src={soga} alt="Soga" className="soga-top" />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "100px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "300px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "500px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "700px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "900px" }}
      />
      <img src={soga} alt="Soga" className="soga-bottom" />
    </div>
  );
};

export default Navbar;
