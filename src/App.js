import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienSoy from "./components/QuienSoy";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <QuienSoy />
      <Servicios />
      <Contacto />
    </div>
  );
}

export default App;
