import React from "react";
import "./Hero.css";
import { AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="GitHub">
        <a href="https://github.com/SoyChechoGonzalez">
          <AiFillGithub size="2rem" className="AiFillGithub" />
        </a>
      </div>
      <section className="hero" id="inicio">
        <h1>Diseñador Web</h1>
      </section>
    </React.Fragment>
  );
};

export default Hero;
