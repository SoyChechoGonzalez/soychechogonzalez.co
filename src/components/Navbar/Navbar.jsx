import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Navbar = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#hero">Inicio</a>
            </li>
            <li>
              <a href="#quien_soy">Quién Soy</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        {/*<div className="social">
            <a
              href="https://www.instagram.com/soychechogonzalez/"
              target="blank"
            >
              <FaInstagram size="2rem" className="FaInstagram" />
            </a>

            <a
              href="https://wa.me/+573008341223?text=Hola!%20tengo%20interes%20en%20que%20me%20hagas%20una%20página%20web"
              target="blank"
            >
              <ImWhatsapp size="2rem" className="ImWhatsapp" />
            </a>
          </div>*/}
        </nav>
      </header>
    </Router>
  );
};

export default Navbar;
