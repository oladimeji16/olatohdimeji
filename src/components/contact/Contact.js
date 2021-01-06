import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__heading">
        LET'S DISCUSS YOUR <br /> NEXT PROJECT
      </h2>
      <div className="contact__card">
        <p className="contact__paragraph">
          I am currently available for new job opportunities and would be more
          than excited to join your team or build your next project with you.
        </p>
        <a
          target="blank"
          className="contact__btn"
          href="mailto:olatohdimeji16@gmail.com"
        >
          Hire Me
        </a>

        <a
          target="blank"
          className="contact__socials"
          href="https://www.github.com/oladimeji16"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="blank"
          className="contact__socials"
          href="https://www.linkedin.com/in/abdullah-mustapha-699313185"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          target="blank"
          className="contact__socials"
          href="https://www.twitter.com/olatohdimeji"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          target="blank"
          className="contact__socials"
          href="https://dribbble.com/dimes68"
        >
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
