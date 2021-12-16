import React from "react";
import "../../style/Menu.css";

const Menu = ({ menu }) => {
  return (
    <div className="card">
      <div className="image">
        <img
          src="https://semantic-ui.com/images/avatar2/large/elyse.png"
          alt=""
        />
      </div>
      <div className="content">
        <div className="header">{menu.title}</div>
        <div className="meta">
          <p>{menu.description}</p>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <button className="ui tiny secondary button">Order</button>
        </span>
        <span>
          <i className="money bill alternate icon"></i>
          Rp. {menu.price},-
        </span>
      </div>
    </div>
  );
};

export default Menu;
