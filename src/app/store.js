import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../app/features/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

