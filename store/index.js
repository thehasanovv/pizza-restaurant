import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import modalReducer from "./slices/modalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    modal: modalReducer,
  },
});
