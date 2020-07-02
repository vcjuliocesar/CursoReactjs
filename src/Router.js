import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                {/** Configurar rutas y paginas */}
                <Switch>
                    <Route exact path = "/" component = {Peliculas}/>
                    <Route exact path = "/ruta-prueba" component = {SeccionPruebas}/>
                    <Route exact path = "/segunda-ruta" component = {MiComponente}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;