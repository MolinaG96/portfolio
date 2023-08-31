import React from "react";
import "../styles/about.css";
import "../styles/container.css";
import Sign from "../commons/sign";
import "../assets/fonts/wood/woodys/Woodys.ttf";

export const About = () => {
  return (
    <div className="about-div-father">
      <Sign />
      <div className="about-div">About</div>
      <div className="about-text">
        <p>
          Hi!, welcome to my portfolio I am a full stack developer, I like to
          learn new technologies all the time. Teamwork is something that
          motivates me to improve, and I believe that organization and good
          communication allow us to achieve our goals. Thank you for your visit,
          here you will find my projects and skills, and if you wish, you may
          contact me.
        </p>
      </div>
    </div>
  );
};
