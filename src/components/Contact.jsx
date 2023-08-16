import React from "react";
import Sign from "../commons/sign";
import "../styles/contact.css";

export const Contact = ({ visible }) => {
  let isVisible = visible;
  return (
    <div className={isVisible ? "contact-father" : "contact-father-exit"}>
      <Sign />
      <div className="contact-div">Contact</div>
    </div>
  );
};
