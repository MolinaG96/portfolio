import React, { useState } from "react";
import "../styles/navbar.css";
import mano from "../assets/mano.png";
import soga from "../assets/soga-nada-sinF.png";
import Button from "../commons/button";

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
      <Button length={"10%"} title={"Home"} lengthText={"13.5%"} />
      <Button length={"27%"} title={"About"} lengthText={"30.3%"} />
      <Button length={"44%"} title={"Projects"} lengthText={"46.2%"} />
      <Button length={"61%"} title={"Skills"} lengthText={"64.8%"} />
      <Button length={"78%"} title={"Contact"} lengthText={"80.2%"} />
      <img src={soga} alt="Soga" className="soga-bottom" />
    </div>
  );
};

export default Navbar;
