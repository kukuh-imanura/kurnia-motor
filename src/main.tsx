import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";
import Index from "./Index";

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>
);
