import apiBackend from "../../component/apis/apiBackend";

export const fetchMenu = async () => {
  try {
    const response = await apiBackend.get("/getMenu");
    return response.data;
  } catch (err) {
    return {
      message: "Fetch Menu Data Failed",
    };
  }
};

export const fetchCart = async () => {
  try {
    const response = await apiBackend.get("/checkoutDetail");
    return response.data;
  } catch (err) {
    return {
      message: "FETCH cart FAILED",
    };
  }
};
