import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Customer from "./pages/Customer.tsx";
import Admin from "./pages/Admin.tsx";
import Laporan from "./pages/laporan/Laporan.tsx";
import Detail from "./pages/Detail.tsx";
import Login from "./pages/Login.tsx";
import Recovery from "./pages/Recovery.tsx";
import Chat from "./pages/Chat.tsx";
import Update from "./pages/laporan/Update.tsx";
import AddUserAdmin from "./components/default/AddUserAdmin.tsx";
import AddUserCustomer from "./components/default/AddUserCustomer.tsx";
import Profile from "./pages/admin/Profile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/customer" element={<Customer />} />

        {/* ADMIN AREA */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/profile" element={<Profile />} />

        {/* LAPORAN AREA */}
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/laporan/update" element={<Update />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/addAdmin" element={<AddUserAdmin />} />
        <Route path="/addCustomer" element={<AddUserCustomer />} />
        {/* <Route path="/editAdmin/:adminId" element={<EditUserAdmin />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
