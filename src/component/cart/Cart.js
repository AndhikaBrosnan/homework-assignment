import React from "react";

const Cart = () => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="content">
        <img
          alt=""
          className="left floated small ui image"
          src="https://semantic-ui.com/images/avatar2/large/molly.png"
        />
        <div className="header">Elliot Fu</div>
        <div className="meta">Friends of Veronika</div>

        <div className="right floated">
          <div className="ui buttons">
            <button className="ui button">
              <i className="minus icon"></i>
            </button>
            <div className="or" data-text="3"></div>
            <button className="ui positive button">
              <i className="plus icon"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="extra content">
        <h4>Catatan untuk Black Party (Ice)</h4>
        <div className="ui large transparent input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Cart;
