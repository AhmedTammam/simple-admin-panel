import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  auth: !!localStorage.getItem("isAuthenticated"),
  role: (localStorage.getItem("role") as Roles) || Roles.GUEST,
  isLoading: true,
};

async function checkAuth(): Promise<{ auth: boolean; role: Roles }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const authState = {
        auth: !!localStorage.getItem("isAuthenticated"),
        role: (localStorage.getItem("role") as Roles) || Roles.GUEST,
      };
      resolve(authState);
    }, 1000);
  });
}

export const checkAuthStatus = createAsyncThunk<{ auth: boolean; role: Roles }>(
  "auth/checkAuthStatus",
  checkAuth
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Roles>) => {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", action.payload);
      state.auth = true;
      state.role = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("role");
      state.auth = false;
      state.role = Roles.GUEST;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = action.payload.auth;
      state.role = action.payload.role;
    });
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuthenticated = (state: RootState) => state.auth.auth;
export const selectUserRole = (state: RootState) => state.auth.role;

export default authSlice.reducer;
