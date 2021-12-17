import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const form = useSelector((state) => state.form);

  const namaCust = form.length !== 0 ? form.name : "Customer";

  return (
    <div className="ui secondary menu">
      <div className="right menu">
        <Link to="/" className="ui item">
          <b>Hi, {namaCust}!</b>😁
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
