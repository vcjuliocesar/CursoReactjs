import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Pepperoni"],
      calorias: 400,
    };
    return (
      <div className="mi-componente">
        <h1>{"Reseta " + receta.nombre}</h1>
        <h2>{"Calorias " + receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
        <hr />
        {this.props.saludo && <h3>{this.props.saludo}</h3>}
      </div>
    );
  }
}

export default MiComponente;
