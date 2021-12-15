import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Form from "../form/Form";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";

const Routes = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <div>
            <Route path="/" exact component={Form}></Route>
            <Route path="/menu" exact component={Menu}></Route>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routes;
