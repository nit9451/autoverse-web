import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";

export const store = configureStore({
    reducer: {
      ui: uiReducer,
    },
  },
  applyMiddleware(thunkMiddleware)
);
export const appDispatch = () => store.dispatch;