import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./helpers/getAllProducts";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
  appliedFilters: [],
};

const extraReducers = {
  [getAllProducts.pending]: state => {
    state.error = "";
    state.isLoading = true;
  },

  [getAllProducts.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.products = payload;
  },

  [getAllProducts.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateFilters: (state, { payload }) => {
      const isPresent = state.appliedFilters.indexOf(payload) !== -1;

      if (isPresent) {
        state.appliedFilters = state.appliedFilters.filter(filter => filter !== payload);
      } else {
        state.appliedFilters.push(payload);
      }
    },
  },
  extraReducers,
});

export const { updateFilters } = productsSlice.actions;

export default productsSlice.reducer;
