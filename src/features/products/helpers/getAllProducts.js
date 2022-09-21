import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get("https://fakestoreapi.com/products");
      if (status === 200) {
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { getAllProducts };
