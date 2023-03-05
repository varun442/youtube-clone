import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: sessionStorage.getItem("yt-access-token")? sessionStorage.getItem("yt-access-token"):null,
  user: sessionStorage.getItem("yt-user")? sessionStorage.getItem("yt-user"):null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LOGIN_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(LOGIN_SUCCESS, (state, action) => {
        state.accessToken = action.payload;
        state.loading = false;
      })
      .addCase(LOGIN_FAIL, (state, action) => {
        state.accessToken = null;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LOAD_PROFILE, (state, action) => {
        state.user = action.payload;
      })
      .addCase(LOG_OUT, (state) => {
        state.accessToken = null;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
