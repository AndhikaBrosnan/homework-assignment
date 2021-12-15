import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui secondary menu">
      <div className="right menu">
        <Link to="/" className="ui item">
          Hi, Brosnan 😁
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
