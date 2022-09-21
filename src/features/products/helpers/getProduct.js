import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProduct = createAsyncThunk(
  "products/getProduct",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      if (status === 200) {
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { getProduct };
