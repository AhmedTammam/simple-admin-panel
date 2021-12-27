import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export type CategoryProps = {
  id: string;
  englishName: string;
  arabicName: string;
};

const initialState: CategoryProps[] =
  JSON.parse(localStorage.getItem("categories") || "[]") || [];

const updateCachedState = (state: CategoryProps[]) => {
  localStorage.setItem("categories", JSON.stringify(state));
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
      updateCachedState(state);
    },
    removeCategory: (state, action) => {
      state = state.filter((category) => category.id !== action.payload);
      updateCachedState(state);
    },
    updateCategory: (state, action) => {
      state = state.map((category) =>
        category.id === action.payload.id
          ? { ...category, ...action.payload }
          : category
      );
      updateCachedState(state);
    },
  },
});

export const { addCategory, removeCategory, updateCategory } =
  categorySlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export default categorySlice.reducer;
