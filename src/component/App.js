import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "../redux/reducer";
import Routes from "./routes";
import thunk from "redux-thunk";

const App = () => {
  return (
    <div>
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;
