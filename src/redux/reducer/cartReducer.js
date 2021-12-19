import { FETCH_CART } from "../type/cart";

const INITIAL_CART = [];

const cartReducer = (cart = INITIAL_CART, action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;
    default:
      return cart;
  }
};

export default cartReducer;
