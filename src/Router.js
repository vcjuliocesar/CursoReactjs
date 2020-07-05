import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Peliculas from "./components/Peliculas";
import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Error from "./components/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class Router extends Component {
  render() {
    let strButton = " Ir al blog";
    return (
      <BrowserRouter>
        {/** Configurar rutas y paginas */}
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/ruta-prueba" component={SeccionPruebas} />
            <Route exact path="/segunda-ruta" component={MiComponente} />
            <Route
              exact
              path="/pagina-1"
              render={() => (
                <React.Fragment>
                  <h1>Hola desde la pagina-1</h1>
                  <MiComponente saludo="Hola amigo" />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/rutapruebas/:nombre/:apellidos?"
              render={(props) => {
                let nombre = props.match.params.nombre;
                let apellidos = props.match.params.apellidos;
                return (
                  <div id="content">
                    <h1 className="subheader">Pagina de pruebas</h1>
                    <h2>
                      {nombre && !apellidos && (
                        <React.Fragment>{nombre}</React.Fragment>
                      )}
                      {nombre && apellidos && (
                        <React.Fragment>
                          {nombre} {apellidos}
                        </React.Fragment>
                      )}
                    </h2>
                  </div>
                );
              }}
            />
            <Route component={Error} />
          </Switch>
        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
