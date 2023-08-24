import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FreeToPlayProvider } from "./context/FreeToPlayProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FreeToPlayProvider>
      <App />
    </FreeToPlayProvider>
  </BrowserRouter>
);
