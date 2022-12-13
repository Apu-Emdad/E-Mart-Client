import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.error = false;
    },
    registrationStart: (state) => {
      state.isFetching = true;
    },
    registrationSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registrationFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  registrationStart,
  registrationFailure,
  registrationSuccess,
} = userSlice.actions;
export default userSlice.reducer;
