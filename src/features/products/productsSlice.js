import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProduct } from "./helpers";

const initialState = {
  products: [],
  singleProduct: {},
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
  [getProduct.pending]: state => {
    state.error = "";
    state.isLoading = true;
  },

  [getProduct.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.singleProduct = payload;
  },

  [getProduct.rejected]: (state, { payload }) => {
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
    findSingleProduct: (state, { payload }) => {
      state.singleProduct = state.products.find(product => product.id === payload);
    },
  },

  extraReducers,
});

export const { updateFilters, updateMinRating, clearFilter, findSingleProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
