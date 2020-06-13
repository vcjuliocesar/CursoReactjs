import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;
