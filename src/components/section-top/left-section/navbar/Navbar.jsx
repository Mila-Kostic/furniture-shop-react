import React from "react";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";

function Navbar() {
  return (
    <div className="navbar">
      <Home />
      <Shop />
      <About />
      <Contact />
    </div>
  );
}

export default Navbar;
