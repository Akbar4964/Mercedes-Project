import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { store } from "./redux/store";
export const BASE_URL = "http://localhost:1000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Provider store={store}>
          <App />
        </Provider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
