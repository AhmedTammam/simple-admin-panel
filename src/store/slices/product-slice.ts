import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { Product } from "types/product";

const initialState: { product: Product[] } = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      state.product = state.product.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product
      );
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.productReducer.product;

export default productSlice.reducer;
