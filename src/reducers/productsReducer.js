export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRPDUCT_LIST_REQUEST":
      return {
        loading: true,
        products: [],
      };
    case "PRODUCT_LIST_SUCCES":
      return {
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};
