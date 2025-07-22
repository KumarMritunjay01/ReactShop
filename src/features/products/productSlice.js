import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  }
);

// create slice

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.loading = false;
        state.products = actions.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch";
      });
  },
});

export default productSlice.reducer;
