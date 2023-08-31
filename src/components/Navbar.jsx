import React, { useState } from "react";
import "../styles/navbar.css";
import Button from "../commons/button";

const Navbar = ({ setSelectedButton, setIsVisible }) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarHidden(!isNavbarHidden);
    setIsVisible(false);
    setSelectedButton("Home");
  };

  return (
    <div className={`navbar-container ${isNavbarHidden ? "hidden" : ""}`}>
      <img
        src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463048/portfolio/more-img/mano_j11bnb.png"
        alt="Mano"
        className="mano"
        onClick={toggleNavbar}
      />
      <img
        src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693462996/portfolio/more-img/soga-nada-sinF_azxb8m.png"
        alt="Soga"
        className="soga-top"
      />
      <Button
        length={"10%"}
        title={"Home"}
        lengthText={"13.5%"}
        setSelectedButton={setSelectedButton}
      />
      <Button
        length={"27%"}
        title={"About"}
        lengthText={"30.3%"}
        setSelectedButton={setSelectedButton}
      />
      <Button
        length={"44%"}
        title={"Projects"}
        lengthText={"46.2%"}
        setSelectedButton={setSelectedButton}
      />
      <Button
        length={"61%"}
        title={"Skills"}
        lengthText={"64.8%"}
        setSelectedButton={setSelectedButton}
      />
      <Button
        length={"78%"}
        title={"Contact"}
        lengthText={"80.2%"}
        setSelectedButton={setSelectedButton}
      />
      <img
        src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693462996/portfolio/more-img/soga-nada-sinF_azxb8m.png"
        alt="Soga"
        className="soga-bottom"
      />
    </div>
  );
};

export default Navbar;
