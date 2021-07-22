export const productItemReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRPDUCT_ITEM_REQUEST":
      return {
        loading: true,
        product: {},
      };
    case "PRODUCT_ITEM_SUCCES":
      return {
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};
