import React from "react";
import Sign from "../commons/sign";
import "../styles/about.css";

export const About = ({ visible }) => {
  let isVisible = visible;
  return (
    <div className={isVisible ? "about-father" : "about-father-exit"}>
      <Sign />
      <div className="about-div">About</div>
    </div>
  );
};
