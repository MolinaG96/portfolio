import React from "react";
import Sign from "../commons/sign";
import "../styles/skills.css";
import "../styles/container.css";
// back
import express from "../assets/back/express.png";
import JWT from "../assets/back/JWT.png";
import mongo from "../assets/back/mongo.png";
import node from "../assets/back/node.png";
import postgresql from "../assets/back/postgresql.png";
// front
import axios from "../assets/front/axios.png";
import bootstrap from "../assets/front/bootstrap.png";
import chakraui from "../assets/front/chakraui.png";
import nextjs from "../assets/front/nextjs.png";
import react from "../assets/front/react.png";
import redux from "../assets/front/redux.png";
import tailwind from "../assets/front/tailwind.png";
import vuejs from "../assets/front/vuejs.png";
// tools
import aws from "../assets/technologies/aws.png";
import docker from "../assets/technologies/docker.png";
import github from "../assets/technologies/github.png";
import javascript from "../assets/technologies/javascript.png";
import postman from "../assets/technologies/postman.png";
import scrum from "../assets/technologies/scrum.png";
import typescript from "../assets/technologies/typescript.png";

export const Skills = () => {
  return (
    <div className="skills-div-father">
      <Sign />
      <div className="skills-div">Skills</div>
      {/* aca empieza las del back */}
      <div className="back-images">
        <div className="back-subtitle">Back</div>
        <div className="image-wrapper">
          <img src={express} alt="Express" className="back-image" />
          <span className="image-text">Express</span>
        </div>
        <div className="image-wrapper">
          <img src={JWT} alt="JWT" className="back-image-jwt" />
          <span className="image-text">JWT</span>
        </div>
        <div className="image-wrapper">
          <img src={mongo} alt="MongoDB" className="back-image" />
          <span className="image-text">MongoDB</span>
        </div>
        <div className="image-wrapper">
          <img src={node} alt="Node.js" className="back-image" />
          <span className="image-text">Node.js</span>
        </div>
        <div className="image-wrapper">
          <img src={postgresql} alt="PostgreSQL" className="back-image" />
          <span className="image-text">PostgreSQL</span>
        </div>
      </div>
      {/* aca termina las del back */}
      {/* aca empieza las del front */}
      <div className="front-images">
        <div className="front-subtitle">Front</div>
        <div className="image-wrapper-front">
          <img src={axios} alt="axios" className="front-image" />
          <span className="image-text-front-axios">Axios</span>
        </div>
        <div className="image-wrapper-front">
          <img src={bootstrap} alt="bootstrap" className="front-image" />
          <span className="image-text-front">Bootstrap</span>
        </div>
        <div className="image-wrapper-front">
          <img src={chakraui} alt="chakraui" className="front-image" />
          <span className="image-text-front-chakraui">ChakraUI</span>
        </div>
        <div className="image-wrapper-front">
          <img src={nextjs} alt="nextjs" className="front-image" />
          <span className="image-text-front">NextJs</span>
        </div>
        <div className="image-wrapper-front">
          <img src={react} alt="react" className="front-image" />
          <span className="image-text-front-react">ReactJs</span>
        </div>
        <div className="image-wrapper-front">
          <img src={redux} alt="redux" className="front-image" />
          <span className="image-text-front">Redux</span>
        </div>
        <div className="image-wrapper-front">
          <img src={tailwind} alt="tailwind" className="front-image" />
          <span className="image-text-front-tailwind">TailwindCSS</span>
        </div>
        <div className="image-wrapper-front">
          <img src={vuejs} alt="vuejs" className="front-image" />
          <span className="image-text-front">VueJs</span>
        </div>
      </div>
      {/* aca termina las del front */}
      {/* aca empieza tools */}
      <div className="tools-images">
        <div className="tools-subtitle">Tools</div>
        <div className="image-wrapper-tool">
          <img src={javascript} alt="javascript" className="tools-image" />
          <span className="image-text-tool-javascript">Javascript</span>
        </div>
        <div className="image-wrapper-tool">
          <img src={typescript} alt="typescript" className="tools-image" />
          <span className="image-text-tool-typescript">Typescript</span>
        </div>
        <div className="image-wrapper-tool">
          <img src={aws} alt="aws" className="tools-image" />
          <span className="image-text-tool-aws">AWS</span>
        </div>
        <div className="image-wrapper-tool">
          <img src={docker} alt="docker" className="tools-image" />
          <span className="image-text-tool-docker">Docker</span>
        </div>
        <div className="image-wrapper-tool">
          <img src={github} alt="github" className="tools-image" />
          <span className="image-text-tool-github">GitHub</span>
        </div>
        <div className="image-wrapper-tool">
          <img src={postman} alt="postman" className="tools-image" />
          <span className="image-text-tool-postman">Postman</span>
        </div>
        <div className="image-wrapper-tool">
          <img src={scrum} alt="Scrum" className="tools-image" />
          <span className="image-text-tool-scrum">Scrum</span>
        </div>
      </div>
      {/* aca termina tools */}
    </div>
  );
};
