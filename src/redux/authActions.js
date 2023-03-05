import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "./actionType";

import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../fireBase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const login = createAsyncThunk("auth/login", async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch({
      type: LOGIN_REQUEST,
    });
    const res = await signInWithPopup(auth, googleProvider);
    const accessToken = res.user.accessToken;

    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    sessionStorage.setItem("yt-access-token", accessToken);
    sessionStorage.setItem("yt-user", JSON.stringify(profile));

    thunkAPI.dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    thunkAPI.dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    thunkAPI.dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
});


export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await auth.signOut();
    sessionStorage.removeItem("yt-access-token");
    sessionStorage.removeItem("yt-user");
    thunkAPI.dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    console.log(error.message);
  }
});
