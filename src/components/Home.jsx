import "../App.css";
import "../styles/home.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Container } from "./Container";

function Home() {
  const [selectedButton, setSelectedButton] = useState("Home");
  const [isVisible, setIsVisible] = useState(false);

  function changeComponent(changedComponent) {
    let time = 700;
    if (selectedButton == "Home") time = 0;
    setIsVisible(false);
    setTimeout(() => {
      setSelectedButton(changedComponent);
      setIsVisible(true);
    }, time);
  }

  return (
    <div>
      <Navbar setSelectedButton={changeComponent} setIsVisible={setIsVisible} />
      <h1 className="nombre">
        <span>Gonzalo</span>
        <span>Molina</span>
        <span className="profession">Full Stack Developer</span>
      </h1>
      <Container visible={isVisible}>
        {selectedButton === "About" && <About />}
        {selectedButton === "Skills" && <Skills />}
        {selectedButton === "Projects" && <Projects />}
        {selectedButton === "Contact" && <Contact />}
      </Container>
    </div>
  );
}

export default Home;
