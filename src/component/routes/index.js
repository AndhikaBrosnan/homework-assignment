import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Form from "../form/Form";
import Navbar from "../navbar/Navbar";
import CartList from "../cart/CartList";
import MenuList from "../menu/MenuList";

const Routes = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <div>
            <Route path="/" exact component={Form} />
            <Route path="/menu" exact component={MenuList} />
            <Route path="/carts" exact component={CartList} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routes;
