import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {
  contador = 0;

  state = {
    contador:0
  };
  
  HolaMundo(nombre) {
    let presentacion = (
      <div>
        <h1>Hola, soy {nombre}</h1>
      </div>
    );
    return presentacion;
  }

  sumar = (e) => {
    this.setState({
      contador:(this.state.contador + 1)
    });
  }

  restar = (e) => {
    this.setState({
      contador:(this.state.contador - 1)
    });
  }
  
  render() {
    let nombre = "Julio Cesar";
    return (
      <section id="content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {this.HolaMundo(nombre)}
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
          <h2 className="subheader">Estado</h2>
          <p>
            Contado: {this.state.contador}
          </p>
          <p>
            <input type="button" value="Sumar" onClick={this.sumar}/>
            <input type="button" value="Restar" onClick={this.restar}/>
          </p>
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
