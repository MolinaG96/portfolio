import React from "react";
import Sign from "../commons/sign";
import "../styles/projects.css";

export const Projects = ({ visible }) => {
  let isVisible = visible;
  return (
    <div className={isVisible ? "projects-father" : "projects-father-exit"}>
      <Sign />
      <div className="projects-div">Projects</div>
    </div>
  );
};
