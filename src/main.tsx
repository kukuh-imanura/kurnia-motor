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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
