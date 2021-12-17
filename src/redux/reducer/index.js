import { combineReducers } from "redux";
import formReducer from "./formReducer";

import menuReducer from "./menuReducer";

export default combineReducers({
  menu: menuReducer,
  form: formReducer,
});
