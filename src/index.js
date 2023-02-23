import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import catSaga from "./catSaga";
import { catSlice } from "./catSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
const saga = createSagaMiddleware()
const store = configureStore({
  reducer : {
    cats : catSlice.reducer
  },
  middleware: [saga]
})
saga.run(catSaga)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
