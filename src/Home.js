import React from "react";
import "./App.css";
import Nav from "./Nav";
import Sideone from "../src/img/side1.jpg";

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
        <h1 className="homeHeading">Home page displays here </h1>
        <p className="homeAbout"> login and sign up options </p>
        <br />
        <ol>
          once logged in
          <li> use the online catalog to create a shopping list</li>
          <li> save recipes to your profile for easy future access</li>
        </ol>
      </div>
    </section>
  );
}
export default Home;
