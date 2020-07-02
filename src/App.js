import React from "react";
import "./assets/css/App.css";

// iportar componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Router from "./Router";

function App() {
  let strButton = " Ir al blog";
  return (
    <div className="App">
      <Header/>
      <Slider 
      title="Bienvenido al Curso de React"
      btn={strButton}
      />
      <div className="center">
        <Router/>
        <Sidebar/>
      </div>{/* end div center */}
      <div className="clearfix"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
