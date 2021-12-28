import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export enum Roles {
  GUEST = "GUEST",
  MANAGER = "MANGER",
  EDITOR = "EDITOR",
}

export interface AuthState {
  auth: boolean;
  role: Roles;
  isLoading: boolean;
}

const initialState: AuthState = {
  auth: false,
  role: Roles.GUEST,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Roles>) => {
      state.auth = true;
      state.role = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.auth = false;
      state.role = Roles.GUEST;
      state.isLoading = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuthenticated = (state: RootState) => state.auth.auth;
export const selectUserRole = (state: RootState) => state.auth.role;

export default authSlice.reducer;
