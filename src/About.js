import React from "react";
import "./App.css";
import Nav from "./Nav";

function About() {
  return (
    <section className="aboutHolder">
      <Nav />
      <h1 className="aboutHeading">About Lorenzos</h1>
      <p className="left">
        The Lorenzo brothers--John, Jeff, and Dave--own and operate Lorenzo's
        Town and Country Market in the town of Winters, California. Over the
        last 70 years, the Lorenzo Family has succeeded in providing top-quality
        products, low prices and excellent service to the people of Winters and
        its outlying areas. Treat yourself to a truly great shopping experience
        at Lorenzo's Town and Country Market!
      </p>
      <p className="right">
        <b>1939</b>John Lorenzo opens the California Market on First Street in
        Winters. It was Winters' first modern supermarket complete with fresh
        meat, fish, and vegetables all under one roof.
      </p>
      <p className="left">
        <b>1964</b>Al Lorenzo (John's son), opens the New California Market at
        111 Main Street. It is 3 times larger than the old store and features
        state of the art refrigeration units.
      </p>
      <p className="right">
        <b>1989</b>In March of 1989 Al and his sons--John, Jeff, and David
        Lorenzo purchase the existing Town & Country Market They then relocate
        the old California Market to the larger, modern location at 121 E Grant
        Avenue (The Gateway to Winters). The new name is Lorenzo's Town &
        Country Market.
      </p>
      <p className="left">
        <b>2004</b>In 2004 the Lorenzo brothers complete a major remodel with
        the purchase of energy efficient cases, new shelving, and a new décor.
      </p>
    </section>
  );
}
export default About;
