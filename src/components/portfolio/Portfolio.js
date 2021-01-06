import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import pactani from "../../images/Pactanipre.png";
import SchoolDesign from "../../images/Schoolredesign.png";
import weather from "../../images/weather.PNG";
import recipfy from "../../images/recipfy.PNG";

import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="portfolio" data-aos="fade-left">
      <h2 className="portfolio__heading">Some Selected Pojects:</h2>
      <div className="portfolio__container">
        <div className="portfolio__pactani">
          <hr />
          <h3 className="portfolio__title">Pactani</h3>
          <img
            className="portfolio__img pactani__img"
            src={pactani}
            alt="Project"
          />

          <div className="portfolio__details pactani__details">
            <p className="portfolio__desc">
              A UX/UI design for Pactani, a customer budget focused travel
              agency located in Lagos, Nigeria. <br /> Designed Using Figma.
            </p>
            <a
              className="portfolio__link"
              target="blank"
              href="https://www.figma.com/file/urraRO1QTwEJEyoDRtybtV/PacTani?node-id=0%3A1"
            >
              <i className="portfolio__link fas fa-external-link-alt"></i>
            </a>
            <hr />
          </div>
        </div>

        <div className="portfolio__school" data-aos="flip-right">
          <hr />
          <h3 className="portfolio__title">Schooling App</h3>
          <img
            className="portfolio__img school__img"
            src={SchoolDesign}
            alt="Project"
          />
          <div className="portfolio__details">
            <p className="portfolio__desc">
              Is a mobile app concept design that helps students stay up-to-date
              with their school activites.
              <br /> Designed Using Figma.
            </p>
            <a
              className="portfolio__link"
              target="blank"
              href="https://www.figma.com/file/RtAiANoekELrfJMOMBTjwu/School?node-id=0%3A1"
            >
              <i className="portfolio__link fas fa-external-link-alt"></i>
            </a>
            <hr />
          </div>
        </div>

        <div className="portfolio__weather" data-aos="fade-right">
          <hr />
          <h3 className="portfolio__title">Weather App</h3>
          <img className="portfolio__img" src={weather} alt="Project" />
          <div className="portfolio__details">
            <p className="portfolio__desc">
              Looking to check the weather condition of a location? Here is a
              simple weather app that helps you do just that, <br /> Callling
              data from openweather.org's Api. <br /> Built with React.js.
            </p>
            <a
              className="portfolio__link"
              target="blank"
              href="https://weather-app-react-omega.vercel.app"
            >
              <i className="portfolio__link fas fa-external-link-alt"></i>
            </a>
            <hr />
          </div>
        </div>
        <div className="portfolio__recipfy" data-aos="flip-left">
          <hr />
          <h3 className="portfolio__title">Recipfy App</h3>
          <img className="portfolio__img" src={recipfy} alt="Project" />
          <div className="portfolio__details">
            <p className="portfolio__desc">
              Cook sophisticated dishes in your kitchen by following recipes
              from Recipfy App. Data from Edamam's Api. <br /> Built with
              React.js
            </p>
            <a
              className="portfolio__link"
              target="blank"
              href="https://recipfy.vercel.app"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
