import { POST_FORM } from "../type/form";

const INITIAL_FORM = [];

export const formReducer = (form = INITIAL_FORM, action) => {
  switch (action.type) {
    case POST_FORM:
      form = action.payload;
      return form;
    default:
      return form;
  }
};

export default formReducer;
