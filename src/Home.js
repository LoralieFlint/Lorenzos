import React from "react";
import "./App.css";
import Nav from "./Nav";
import Sideone from "../src/img/side1.jpg";
import Contact from "./Contact";
import image1 from "../src/img/storefront.jpg";
import image2 from "../src/img/side1.jpg";
import image3 from "../src/img/side2.jpg";
import image4 from "../src/img/produce.jpg";
import image5 from "../src/img/meat2.jpg";
import image6 from "../src/img/meat1.jpg";
import image7 from "../src/img/deli2.jpg";
import image8 from "../src/img/deli.jpg";
import image9 from "../src/img/dairy.jpg";
import image10 from "../src/img/bakery.jpg";
import image11 from "../src/img/alcohol.jpg";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Home() {
  return (
    <section className="">
      <Nav />
      <div className="imgholder">
        <img
          src={Sideone}
          alt="side one of a wall mural"
          className="storefront"
        ></img>
      </div>
      <div className="homeHolder">
        <AwesomeSlider className="slider">
          <div className="wrapper" data-src={image1} />
          <div className="wrapper" data-src={image2} />
          <div className="wrapper" data-src={image3} />
          <div className="wrapper" data-src={image4} />
          <div className="wrapper" data-src={image5} />
          <div className="wrapper" data-src={image6} />
          <div className="wrapper" data-src={image7} />
          <div className="wrapper" data-src={image8} />
          <div className="wrapper" data-src={image9} />
          <div className="wrapper" data-src={image10} />
          <div className="wrapper" data-src={image11} />
        </AwesomeSlider>
      </div>
      <Contact />
    </section>
  );
}
export default Home;
