import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import { AuthContextProvider } from "./pages/context/autContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Auth />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
