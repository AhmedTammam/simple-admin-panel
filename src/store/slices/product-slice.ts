import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { ProductProps } from "types/product";

const initialState: ProductProps[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      state = state.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      state = state.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product
      );
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;
