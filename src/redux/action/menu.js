import { fetchMenu } from ".";
import { FETCH_MENU } from "../type/menu";

export const fetchMenuData = async (dispatch) => {
  const response = await fetchMenu();
  dispatch({ type: FETCH_MENU, payload: response });
};
