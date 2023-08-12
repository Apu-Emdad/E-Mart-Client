import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalOrders: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.totalOrders += 1;
      state.products.push(action.payload);
      state.total += action.payload.subtotal;
    },
    resetCart: (state) => {
      state.products = [];
      state.totalOrders = 0;
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, resetCart } = cartSlice.actions;
