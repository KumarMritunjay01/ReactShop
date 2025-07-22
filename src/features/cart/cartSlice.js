import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",

  initialState: {
    cartItem: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodoCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { addTodoCart , removeFromCart} = cartSlice.actions;
