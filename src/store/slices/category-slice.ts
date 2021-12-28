import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { CategoryProps } from "types/category";

const initialState: CategoryProps[] = [];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    removeCategory: (state, action) => {
      state = state.filter((category) => category.id !== action.payload);
    },
    updateCategory: (state, action) => {
      state = state.map((category) =>
        category.id === action.payload.id
          ? { ...category, ...action.payload }
          : category
      );
    },
  },
});

export const { addCategory, removeCategory, updateCategory } =
  categorySlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export default categorySlice.reducer;
