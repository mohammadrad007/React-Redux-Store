import axios from "axios";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "PRPDUCT_LIST_REQUEST",
    });

    const { data } = await axios.get("http://localhost:8000/api/products");

    dispatch({ type: "PRODUCT_LIST_SUCCES", payload: data });
  } catch (err) {
    console.log(err);
  }
};
