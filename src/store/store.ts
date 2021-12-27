import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth-slice";
import categorySlice from "./slices/category-slice";
import productSlice from "./slices/product-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    categories: categorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
