import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'
import Customer from './pages/Customer.tsx'
import Admin from './pages/Admin.tsx'
import Laporan from './pages/Laporan.tsx'
import Detail from './pages/Detail.tsx'

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
        <Route path="/detail" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/review" element={<Review />} />

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
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
