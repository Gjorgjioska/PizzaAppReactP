import React from "react";
import Logo from "../assets/pizza-logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide"> </div>
      <img src={Logo} />
      <div className="rightSide"> </div>
    </div>
  );
}

export default Navbar;
