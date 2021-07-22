import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productsReducer";
import { productItemReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducers = combineReducers({
  productList: productListReducer,
  productItem: productItemReducer,
  cart: cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
