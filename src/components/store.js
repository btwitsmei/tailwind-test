import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlide.js"

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
