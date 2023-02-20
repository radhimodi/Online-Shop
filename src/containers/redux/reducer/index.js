import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import category from "./category";
import product from "./product";
import cart from "./cart";

export default combineReducers({
  user,
  category,
  product,
  cart,
});
