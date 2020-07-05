import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
    
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    recibirFormulario = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        console.log(this.nombreRef.current.value);
        console.log(this.apellidosRef.current.value);
        console.log(this.bioRef.current.value);
        console.log(this.generoHombreRef.current.value);
        console.log(this.generoMujerRef.current.value);
        console.log(this.generoOtroRef.current.value);
    }

  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
            <form className="mid-form" onSubmit={this.recibirFormulario}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef}/>
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef}/>
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radibuttons">
                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre
                <input type="radio" name="genero" value="mujer" ref={this.generoMukerRef}/> Mujer
                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef}/> Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Formulario;
