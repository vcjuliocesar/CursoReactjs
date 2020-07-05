import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small"/>
        <div className="center">
          <div id="content">
            
          </div>
          <Sidebar blog="true"/>
        </div>
      </div>
    );
  }
}

export default Blog;
