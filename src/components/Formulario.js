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

    state = {
        user:{}
    }

    recibirFormulario = (e) => {
        e.preventDefault();
        let genero = "Hombre";
        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value; 
        }else if(this.generoMujerRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else{
            genero = this.generoOtroRef.current.value;
        }

        let user = {
            nombre:this.nombreRef.current.value,
            apellidos:this.apellidosRef.current.value,
            bio:this.bioRef.current.value,
            genero:genero
        };

        this.setState({
            user:user
        });
        console.log("Formulario enviado");
        console.log(user);
    }

  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
            
            {Object.keys(this.state.user).length !== 0  &&
                <div>
                    <p>Nombre: {this.state.user.nombre}</p>
                    <p>Apellidos: {this.state.user.apellidos}</p>
                    <p>Bio: {this.state.user.bio}</p>
                    <p>Genero: {this.state.user.genero}</p>
                </div>
            }
            
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
                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer
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
