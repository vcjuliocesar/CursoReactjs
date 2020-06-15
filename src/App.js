import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// iportar componentes
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
function HolaMundo(nombre) {
  let presentacion = (
    <div>
      <h1>Hola, soy {nombre}</h1>
    </div>
  );
  return presentacion;
}

function App() {
  let nombre = "Julio Cesar";
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {HolaMundo(nombre)}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <section className="componentes">
            <MiComponente />
            <Peliculas></Peliculas>
          </section>
        </section>
        <Sidebar></Sidebar>
      </div>{/* end div center */}
      <div className="clearfix"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
