import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// iportar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

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
      <header className="App-header">
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
        <section>
          <MiComponente/>
          <Peliculas></Peliculas>
        </section>
      </header>
    </div>
  );
}

export default App;
