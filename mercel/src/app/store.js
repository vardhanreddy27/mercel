import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from '../features/wishlist/WishlistSlice';
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    user: userReducer,
  },
});