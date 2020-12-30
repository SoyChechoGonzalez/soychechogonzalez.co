import React from "react";
import "./Hero.css";
// import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero" id="hero">
        <article className="description">
          <strong>¡Hola!</strong>
          <br />
          <h1>Soy Sergio González</h1>
          <p>
    Diseñador de Páginas web y Futuro ingeniero en Sistemas, me apasiona la programación en todos sus sentidos y cualquier tipo de conocimiento en esta área es muy valioso para mi. <br /> <br />
    Tengo la capacidad de adaptarme a nuevos retos, aunque tengo poca experiencia se puede evidenciar mis habilidades y motivación para ser mejor.
          </p>
        </article>
        <article className="foto">
          <div className="circulo"></div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Hero;
