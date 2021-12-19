import { combineReducers } from "redux";
import formReducer from "./formReducer";
import menuReducer from "./menuReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  menu: menuReducer,
  form: formReducer,
  cart: cartReducer,
});
