import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__head">LET'S DISCUSS YOUR NEXT PROJECT</h2>
      <div className="contact__box">
        <div className="contact__text">
          <p className="contact__paragraph">
            I am currently available for new job opportunities and would be more
            than excited to join your team or discuss your next project with
            you. Send an email to
            <strong className="contact__email">
              [ olatohdimeji16@gmail.com ]
            </strong>
            or click the button below to talk to me.
          </p>
        </div>
        <span className="contact__social">
          <a className="cont" href="mailto:olatohdimeji16@gmail.com">
            Talk to Me
          </a>
          <a href="https://www.github.com/oladimeji16">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abdullah-mustapha-699313185">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com/olatohdimeji">
            <i className="fab fa-twitter"></i>
          </a>
        </span>
      </div>
    </section>
  );
}

export default Contact;
