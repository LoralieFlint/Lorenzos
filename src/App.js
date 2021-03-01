import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
// import MainBoard from "./Main-borad";
import About from "./About";
import Contact from "./Contact";
import Coupons from "./Coupons";
import Recipes from "./Recipes";
import Departments from "./Departments";
import Specials from "./Specials";
import Home from "./Home";

function App() {
  return (
    <div className="mainBoard">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/specials">
        <Specials />
      </Route>
      <Route path="/recipes">
        <Recipes />
      </Route>
      <Route path="/coupons">
        <Coupons />
      </Route>
      <Route path="/departments">
        <Departments />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}
export default App;
