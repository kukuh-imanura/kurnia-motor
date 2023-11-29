import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

// Login Area
import Login from "./pages/login/Login.tsx";
import Recovery from "./pages/login/Recovery.tsx";
import Reset from "./pages/login/Reset.tsx";

// Layanan Area
import Detail from "./pages/layanan/Detail.tsx";
import Chat from "./pages/Chat.tsx";
import Review from "./pages/layanan/Review.tsx";
import Booking from "./pages/layanan/Booking.tsx";

// Admin Area
import Admin from "./pages/Admin.tsx";
import Profile from "./pages/admin/Profile.tsx";
import AddUserAdmin from "./components/default/AddUserAdmin.tsx";

// Customer Area
import Customer from "./pages/Customer.tsx";
import AddUserCustomer from "./components/default/AddUserCustomer.tsx";

// Laporan Area
import Laporan from "./pages/laporan/Laporan.tsx";
import Update from "./pages/laporan/Update.tsx";
import Pickup from "./pages/layanan/Pickup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />

        {/* LOGIN AREA */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/recovery" element={<Recovery />} />
        <Route path="/login/reset" element={<Reset />} />
        
        {/* LAYANAN AREA */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/review" element={<Review />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/detail" element={<Detail />} />

        {/* ADMIN AREA */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/addAdmin" element={<AddUserAdmin />} />
        {/* <Route path="/editAdmin/:adminId" element={<EditUserAdmin />} /> */}

        {/* CUSTOMER AREA */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/addCustomer" element={<AddUserCustomer />} />

        {/* LAPORAN AREA */}
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/laporan/update" element={<Update />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
