import React,{Component} from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component{
    state = {
        peliculas:[
            {titulo:'Broly', image:'https://vignette.wikia.nocookie.net/dragonball/images/f/f9/Dragon_Ball_Super_Broly_p%C3%B3ster_ES.png/revision/latest?cb=20181126164119&path-prefix=es'},
            {titulo:'Battle of gods', image:'https://i.pinimg.com/originals/70/51/79/7051796a08f51b44928efc2ec5e442d0.jpg'},
            {titulo:'Fukkatsu no F', image:'https://razisensei.com/blogprueba/wp-content/uploads/2015/04/dragon-ball-razi-1024x576.jpg'},
        ],
        nombre : 'Julio Cesar'
    }
    render(){
        return (
            <div id='content' className="peliculas">
                <h2>peliculas</h2>
                <p>Seccion de peliculas favoritas de {this.state.nombre}</p>
                {/** Crear un componente peliculas */}
                <div id="articles" className="peliculas">
                {
                    this.state.peliculas.map((pelicula,i) =>{
                        return (
                         <Pelicula key = {i} pelicula = {pelicula}/>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Peliculas;