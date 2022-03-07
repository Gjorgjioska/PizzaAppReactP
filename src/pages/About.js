import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          The promise of pure, or as Nonna would say, puro, is the foundation of
          everything we do. From farmer to your doorstep, we think you deserve
          only the best. It’s why we pledge to source only the best ingredients
          from farmers and producers who share our commitment to quality, and
          that’s why we use recipes and preparation methods that ensure our food
          is as fresh as possible. It’s a promise that’s easy to keep, and we
          think you’ll taste the difference.
        </p>
      </div>
    </div>
  );
};

export default About;
