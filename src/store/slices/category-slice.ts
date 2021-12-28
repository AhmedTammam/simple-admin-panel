import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { Category } from "types/category";

const initialState: { category: Category[] } = {
  category: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.category = state.category.filter(
        (category) => category.id !== action.payload
      );
    },
    updateCategory: (state, action) => {
      state.category = state.category.map((category) =>
        category.id === action.payload.id
          ? { ...category, ...action.payload }
          : category
      );
    },
  },
});

export const { addCategory, removeCategory, updateCategory } =
  categorySlice.actions;

export const selectCategories = (state: RootState) =>
  state.categoryReducer.category;

export default categorySlice.reducer;
