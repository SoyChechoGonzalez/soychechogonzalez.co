import React from "react";
import "./Hero.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="GitHub">
        <a href="https://github.com/SoyChechoGonzalez" target="blank">
          <AiFillGithub size="2rem" className="AiFillGithub" />
        </a>
      </div>
      <div className="Linkedin">
        <a href="https://www.linkedin.com/in/soychechogonzalez/" target="blank">
          <AiFillLinkedin size="2rem" className="AiFillLinkedin" />
        </a>
      </div>
      <section className="hero" id="inicio">
        <h1>Diseñador Web</h1>
      </section>
    </React.Fragment>
  );
};

export default Hero;
