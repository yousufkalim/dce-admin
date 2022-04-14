// Init
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./StoreContext";
import { useTranslation } from "react-i18next";
import "./utils/i18n";
// Rendering DOM
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
