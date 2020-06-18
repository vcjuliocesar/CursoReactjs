import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  render() {
    let nombre = "Julio Cesar";
    function HolaMundo(nombre) {
      let presentacion = (
        <div>
          <h1>Hola, soy {nombre}</h1>
        </div>
      );
      return presentacion;
    }
    return (
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
    );
  }
}

export default SeccionPruebas;
