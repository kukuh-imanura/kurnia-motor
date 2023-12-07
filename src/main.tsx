import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";
import Auth from "./Auth";

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  </React.StrictMode>
);
