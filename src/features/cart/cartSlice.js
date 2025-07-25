import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",

  initialState: {
    cartItem: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodoCart: (state, action) => {
      const newItem = { ...action.payload, count: 1 };
      state.cartItem.push(newItem);
    },
    increaseItemCount: (state, action) => {
      const itemId = action.payload;

      const existingItem = state.cartItem.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.count += 1;
      }
    },
    decreseItemCount: (state, action) => {
      const itemId = action.payload;

      const existingItem = state.cartItem.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.count -= 1;
      }
    },

    removeFromCart: (state, action) => {
      // const itemId = action.payload;
      // const itemZeroCount = state.cartItem.find(item => item.id === itemId)
      // if(itemZeroCount)

      state.cartItem = state.cartItem.filter((item) => item.count !== 0);
    },
  },
});

export default cartSlice.reducer;
export const {
  addTodoCart,
  removeFromCart,
  increaseItemCount,
  decreseItemCount,
} = cartSlice.actions;
