// Init
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./StoreContext";
import "./utils/i18n";
import "./css/index.css";
// Rendering DOM
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
