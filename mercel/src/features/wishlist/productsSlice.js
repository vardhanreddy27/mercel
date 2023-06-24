// productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [], // Initial empty array
  reducers: {
    setProducts: (state, action) => {
      return action.payload; // Update the state with the products data
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;