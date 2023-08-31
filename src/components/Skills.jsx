import React from "react";
import Sign from "../commons/sign";
import "../styles/skills.css";
import "../styles/container.css";

export const Skills = () => {
  return (
    <div className="skills-div-father">
      <Sign />
      <div className="skills-div">Skills</div>
      {/* aca empieza las del back */}
      <div className="back-images">
        <div className="back-subtitle">Back</div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463131/portfolio/back/express_jspmgv.png"
            alt="Express"
            className="back-image"
          />
          <span className="image-text">Express</span>
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463131/portfolio/back/JWT_x1xhhc.png"
            alt="JWT"
            className="back-image-jwt"
          />
          <span className="image-text">JWT</span>
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463131/portfolio/back/mongo_dlnri4.png"
            alt="MongoDB"
            className="back-image"
          />
          <span className="image-text">MongoDB</span>
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463131/portfolio/back/node_vrq4yz.png"
            alt="Node.js"
            className="back-image"
          />
          <span className="image-text">Node.js</span>
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463131/portfolio/back/postgresql_rwhrcl.png"
            alt="PostgreSQL"
            className="back-image"
          />
          <span className="image-text">PostgreSQL</span>
        </div>
      </div>
      {/* aca termina las del back */}
      {/* aca empieza las del front */}
      <div className="front-images">
        <div className="front-subtitle">Front</div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463116/portfolio/front/axios_fqk8ze.png"
            alt="axios"
            className="front-image"
          />
          <span className="image-text-front-axios">Axios</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463116/portfolio/front/bootstrap_iudlzj.png"
            alt="bootstrap"
            className="front-image"
          />
          <span className="image-text-front">Bootstrap</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463116/portfolio/front/chakraui_bnxb8v.png"
            alt="chakraui"
            className="front-image"
          />
          <span className="image-text-front-chakraui">ChakraUI</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463116/portfolio/front/nextjs_poi0ch.png"
            alt="nextjs"
            className="front-image"
          />
          <span className="image-text-front">NextJs</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463116/portfolio/front/react_xuy742.png"
            alt="react"
            className="front-image"
          />
          <span className="image-text-front-react">ReactJs</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463116/portfolio/front/redux_f4kwzp.png"
            alt="redux"
            className="front-image"
          />
          <span className="image-text-front">Redux</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463117/portfolio/front/tailwind_syjo5n.png"
            alt="tailwind"
            className="front-image"
          />
          <span className="image-text-front-tailwind">TailwindCSS</span>
        </div>
        <div className="image-wrapper-front">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463117/portfolio/front/vuejs_kqvcm8.png"
            alt="vuejs"
            className="front-image"
          />
          <span className="image-text-front">VueJs</span>
        </div>
      </div>
      {/* aca termina las del front */}
      {/* aca empieza tools */}
      <div className="tools-images">
        <div className="tools-subtitle">Tools</div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463145/portfolio/tecnologies/javascript_xxntkj.png"
            alt="javascript"
            className="tools-image"
          />
          <span className="image-text-tool-javascript">Javascript</span>
        </div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463146/portfolio/tecnologies/typescript_fnhjkd.png"
            alt="typescript"
            className="tools-image"
          />
          <span className="image-text-tool-typescript">Typescript</span>
        </div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463146/portfolio/tecnologies/aws_tq6tml.png"
            alt="aws"
            className="tools-image"
          />
          <span className="image-text-tool-aws">AWS</span>
        </div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463146/portfolio/tecnologies/docker_ej6uzi.png"
            alt="docker"
            className="tools-image"
          />
          <span className="image-text-tool-docker">Docker</span>
        </div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463146/portfolio/tecnologies/github_lmigux.png"
            alt="github"
            className="tools-image"
          />
          <span className="image-text-tool-github">GitHub</span>
        </div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463146/portfolio/tecnologies/postman_r6eh0p.png"
            alt="postman"
            className="tools-image"
          />
          <span className="image-text-tool-postman">Postman</span>
        </div>
        <div className="image-wrapper-tool">
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463145/portfolio/tecnologies/scrum_nwnbtu.png"
            alt="Scrum"
            className="tools-image"
          />
          <span className="image-text-tool-scrum">Scrum</span>
        </div>
      </div>
      {/* aca termina tools */}
    </div>
  );
};
