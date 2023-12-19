import { Routes, Route, useNavigate } from "react-router-dom";

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
// import Chat from "./pages/layanan/Chat.tsx";
import Review from "./pages/layanan/Review.tsx";
import Booking from "./pages/layanan/Booking.tsx";
import Pickup from "./pages/layanan/Pickup.tsx";

// Admin Area
import Admin from "./pages/admin/Admin.tsx";
import Profile from "./pages/admin/Profile.tsx";
import AddUserAdmin from "./components/default/AddUserAdmin.tsx";

// Customer Area
import Customer from "./pages/customer/Customer.tsx";
import AddUserCustomer from "./components/default/AddUserCustomer.tsx";

// Laporan Area
import Laporan from "./pages/laporan/Laporan.tsx";
import Update from "./pages/laporan/Update.tsx";

// Routes
import PublicRoutes from "./pages/routes/PublicRoutes.tsx";
import AuthRoutes from "./pages/routes/AuthRoutes.tsx";
import { useAuth } from "./pages/context/autContext.tsx";

function Auth() {
  const { currentUser } = useAuth();

  // const token = localStorage.getItem("user");
  const isLogin = currentUser ? true : false;

  useNavigate();

  return (
    // <AuthContextProvider>
    <Routes>
      {/* Authentikasi */}
      <Route element={<PublicRoutes isLogin={isLogin} />}>
        {/* LOGIN AREA */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/recovery" element={<Recovery />} />
        <Route path="/login/reset" element={<Reset />} />
      </Route>

      <Route element={<AuthRoutes isLogin={isLogin} />}>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* LAYANAN AREA */}
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/review" element={<Review />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/pickup/detail/:id" element={<Detail />} />

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
        <Route path="/update" element={<Update />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    // </AuthContextProvider>
  );
}

export default Auth;
