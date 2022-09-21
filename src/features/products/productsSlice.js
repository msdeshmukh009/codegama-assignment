import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./helpers/getAllProducts";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
  appliedFilters: [],
  minRating: 1,
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
    updateMinRating: (state, { payload }) => {
      state.minRating = payload;
    },
    clearFilter: state => {
      state.appliedFilters = [];
      state.minRating = 1;
    },
  },

  extraReducers,
});

export const { updateFilters, updateMinRating, clearFilter } = productsSlice.actions;

export default productsSlice.reducer;
