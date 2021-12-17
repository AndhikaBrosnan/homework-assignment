import { POST_FORM } from "../type/form";

export const postFormData = async (dispatch, name, table, email) => {
  const response = {
    name,
    table,
    email,
  };

  dispatch({ type: POST_FORM, payload: response });
};
