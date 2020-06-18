import React from "react";
import "./assets/css/App.css";

// iportar componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div className="center">
        <SeccionPruebas></SeccionPruebas>
        <Sidebar></Sidebar>
      </div>{/* end div center */}
      <div className="clearfix"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
