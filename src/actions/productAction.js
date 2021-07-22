import axios from "axios";

export const productItemAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "PRPDUCT_ITEM_REQUEST",
    });

    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );

    dispatch({ type: "PRODUCT_ITEM_SUCCES", payload: data });
  } catch (err) {
    console.log(err);
  }
};
