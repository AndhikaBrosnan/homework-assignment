import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui secondary menu">
      <div className="right menu">
        <Link to="/" className="ui item">
          <b>Hi, Customer </b>😁
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
