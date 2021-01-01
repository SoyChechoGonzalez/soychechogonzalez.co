import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./reset.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienSoy from "./components/QuienSoy";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <QuienSoy />
      <Servicios />
      <Contacto />
    </Router>
  );
}

export default App;
