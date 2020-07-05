import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {};

  cambiarNombre = () => {
    var { peliculas } = this.state;
    var random = Math.floor(Math.random() * 3);
    peliculas[random].titulo = "ejemplo";

    this.setState({
      peliculas,
    });
  };

  favorita = (pelicula) => {
    console.log("Favorita marcada");
    console.log(pelicula);
    this.setState({
      favorita: pelicula,
    });
  };
  //cuando se carga un componente
  /*componentDidMount(){
        alert("Cuando se carga un componente");
    }*/
  //antes de cargar la pantalla se ejecuta esto
  componentWillMount() {
    this.setState({
      peliculas: [
        {
          titulo: "Broly",
          image:
            "https://vignette.wikia.nocookie.net/dragonball/images/f/f9/Dragon_Ball_Super_Broly_p%C3%B3ster_ES.png/revision/latest?cb=20181126164119&path-prefix=es",
        },
        {
          titulo: "Battle of gods",
          image:
            "https://i.pinimg.com/originals/70/51/79/7051796a08f51b44928efc2ec5e442d0.jpg",
        },
        {
          titulo: "Fukkatsu no F",
          image:
            "https://razisensei.com/blogprueba/wp-content/uploads/2015/04/dragon-ball-razi-1024x576.jpg",
        },
      ],
      nombre: "Julio Cesar",
      favorita: {},
    });
  }
  //cuando ya se a montado el componente
  /*componentDidMount(){
        alert("se a montado el componente");
    }*/

  render() {
    let pStyles = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    let favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <p className="favorita" style={pStyles}>
          <strong>La pelicula favorita es: </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = <p>No hay pelicula favorita</p>;
    }

    return (
      <React.Fragment>
        <Slider title="Formulario" size="slider-small"/>
        <div className="center">
          <div id="content" className="peliculas">
            <h2>peliculas</h2>
            <p>Seccion de peliculas favoritas de {this.state.nombre}</p>
            <p>
              <button onClick={this.cambiarNombre}>Cambiar nombre</button>
            </p>
            {/** esta es una forma de hacer condicionales */}
            {/*this.state.favorita.titulo ? (
          <p className="favorita" style={pStyles}>
            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
          </p>
        ) : (
          <p>No hay pelicula favorita</p>
        )*/}
            {/**esta es otra forma de hacer condicionales */}
            {favorita}

            {/** Crear un componente peliculas */}
            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    marcarFavorita={this.favorita}
                  />
                );
              })}
            </div>
          </div>
          <Sidebar blog="true"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;
