import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export type ProductProps = {
  id: string;
  englishName: string;
  arabicName: string;
  weight: number;
  category: string;
  thumbnail: string;
};

const initialState: ProductProps[] =
  JSON.parse(localStorage.getItem("products") || "[]") || [];

const updateCachedState = (state: ProductProps[]) => {
  localStorage.setItem("products", JSON.stringify(state));
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      updateCachedState(state);
    },
    removeProduct: (state, action) => {
      state = state.filter((product) => product.id !== action.payload);
      updateCachedState(state);
    },
    updateProduct: (state, action) => {
      state = state.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product
      );
      updateCachedState(state);
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;
