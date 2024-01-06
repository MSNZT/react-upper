import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, actions: PayloadAction<string>) {
      state.username = actions.payload
    },
    setPassword(state, actions: PayloadAction<string>) {
      state.password = actions.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice
