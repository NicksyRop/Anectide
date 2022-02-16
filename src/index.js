import React from "react";
import ReactDOM from "react-dom";
import anecdoteReducer from "./reducers/anecdoteReducer";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import App from "./App";

const store = configureStore({
  reducer: {
    anectodes: anecdoteReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
