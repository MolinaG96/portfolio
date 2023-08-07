import "../App.css";
import "../styles/home.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import Sign from "../commons/sign";

function Home() {
  const [selectedButton, setSelectedButton] = useState("Home");

  useEffect(() => {
    console.log("soy el boton que buscas, oh si", selectedButton);
  }, [selectedButton]);

  return (
    <div>
      <Navbar setSelectedButton={setSelectedButton} />
      <h1 className="nombre">
        <span>Gonzalo</span>
        <span>Molina</span>
        <span className="profession">Full Stack Developer</span>
      </h1>
      <div className="sign-content">
        {selectedButton === "About" && <About />}
        {selectedButton === "Skills" && <Skills />}
        {selectedButton === "Projects" && <Projects />}
        {selectedButton === "Contact" && <Contact />}
      </div>
      <Sign selectedButton={selectedButton} />
    </div>
  );
}

export default Home;
