import React from "react";
import Sign from "../commons/sign";
import "../styles/skills.css";

export const Skills = ({ visible }) => {
  let isVisible = visible;
  return (
    <div className={isVisible ? "skills-father" : "skills-father-exit"}>
      <Sign />
      <div className="skills-div">Skills</div>
    </div>
  );
};
