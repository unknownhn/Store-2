import { configureStore } from "@reduxjs/toolkit";
import home from "../reducers/home/home";
import cotegory from "../reducers/cotegory/cotegory";


export const store = configureStore({
  reducer: {
    home,
    cotegory,
  },
});