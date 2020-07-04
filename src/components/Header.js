import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import {NavLink} from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*LOGO*/}
          <div id="logo">
            <img
              src={logo}
              className="app-logo"
              alt="Logotipo"
            />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>

          {/* MENU */}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
              <NavLink to="/ruta-prueba">Blog</NavLink>
              </li>
              <li>
              <NavLink to="/segunda-ruta">Formulario</NavLink>
              </li>
              <li>
              <NavLink to="/pagina-1">Pagina 1</NavLink>
              </li>
              <li>
              <NavLink to="/rutapruebas/julio">Pagina 2</NavLink>
              </li>
            </ul>
          </nav>

          {/* LIMPIAR FLOTADOS */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
