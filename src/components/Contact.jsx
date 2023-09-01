import React from "react";
import "../styles/contact.css";
import "../styles/container.css";
import Sign from "../commons/sign";
import Swal from "sweetalert2";

export const Contact = () => {
  const handleAlert = () => {
    const email = "molinagomezgonzalo@gmail.com";

    Swal.fire({
      title: "Contact via Gmail",
      html: `
        Copy and use this email address:
        <strong id="email">${email}</strong>
        <button id="copyBtn" style="margin-left: 10px;">Copy</button>
      `,
      icon: "info",
      showCloseButton: false,
      focusConfirm: false,
      confirmButtonText: "Got it",
      didOpen: () => {
        const copyBtn = Swal.getPopup().querySelector("#copyBtn");
        const emailElement = Swal.getPopup().querySelector("#email");

        copyBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(email);
            Swal.update({
              title: "Email Copied!",
              icon: "success",
              html: "Email address has been copied to the clipboard.",
              showCloseButton: true,
              confirmButtonText: "Got it",
              didOpen: () => {
                copyBtn.style.display = "none";
              },
            });
          } catch (error) {
            console.error("Error copying to clipboard:", error);
            Swal.update({
              title: "Error",
              icon: "error",
              text: "An error occurred while copying the email.",
              showCloseButton: true,
              confirmButtonText: "Got it",
            });
          }
        });
      },
    });
  };

  return (
    <div className="contact-div-father">
      <Sign />
      <div className="contact-div">Contact</div>
      <div className="contact-img-container">
        <a
          href="https://www.canva.com/design/DAFtP6x7ciU/o4Ef53-rVZtFvJvNpzOEfA/view?website#1:"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-img"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463097/portfolio/contact-img/CV_ngyata.png"
              alt="cv"
              className="image-c"
            />
            <span className="text-cv">Resume</span>
          </div>
        </a>
        <div className="contact-img" onClick={handleAlert}>
          <img
            src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463098/portfolio/contact-img/gmail_xncsgl.png"
            alt="gmail"
            className="image-c"
          />
          <span className="text-gm">Gmail</span>
        </div>
        <a
          href="https://www.linkedin.com/in/gonza-molina/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-img"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463098/portfolio/contact-img/linkedin_fzgecd.png"
              alt="linkedin"
              className="image-c"
            />
            <span className="text-lin">LinkedIn</span>
          </div>
        </a>
        <a
          href="https://wa.me/5491130333905"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-img"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463098/portfolio/contact-img/whatsapp_ql2nru.png"
              alt="whatsapp"
              className="image-c"
            />
            <span className="text-sap">whatsapp</span>
          </div>
        </a>
        <a
          href="https://github.com/MolinaG96"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-img"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dqf9xgsfp/image/upload/v1693463146/portfolio/tecnologies/github_lmigux.png"
              alt="github"
              className="image-c"
            />
            <span className="text-git">GitHub</span>
          </div>
        </a>
      </div>
    </div>
  );
};
