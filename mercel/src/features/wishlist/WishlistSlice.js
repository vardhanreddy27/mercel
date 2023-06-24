// ../features/wishlist/WishlistSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const existingIndex = state.findIndex((item) => item._id === product._id);

      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(product);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;