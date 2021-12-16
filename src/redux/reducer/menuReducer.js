import { FETCH_MENU } from "../type/menu";

const INITIAL_MENU = [];

const menuReducer = (menu = INITIAL_MENU, action) => {
  switch (action.type) {
    case FETCH_MENU:
      menu = [...menu, ...action.payload];
      return menu;
    default:
      return menu;
  }
};

export default menuReducer;
