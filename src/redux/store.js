// import { applyMiddleware } from "redux";
// import { createDevTools } from "@redux-devtools/core";
// import thunk from "redux-thunk";

import authReducer from "./slices/authSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
