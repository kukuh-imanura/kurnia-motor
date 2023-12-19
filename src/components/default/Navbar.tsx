import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/images/logo-orange.png?url";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { MdLogout } from "react-icons/md";
import Input from "./Input";
import { useAuth } from "@/pages/context/autContext";
// import { Input2 } from "@/components/ui/input";

// import { useState } from "react";

function Default1() {
  const classActive = "font-bold text-brand-1";

  return (
    <div className="sticky top-0 w-full text-gray-900 py-3 px-10 flex justify-between items-center bg-surface-2 z-10">
      <img src={logo} alt="" className="w-44" />

      <div>
        <Link to="/" className={`w-[65.13px] text-center inline-block hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/" ? classActive : ""}`}>
          Beranda
        </Link>
        {/* DROPDOWN */}
        <Dropdown />
        <Link to="/about" className={`w-[107.48px] text center inline-block hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/about" ? classActive : ""}`}>
          Tentang Kami
        </Link>
      </div>

      <Button.Navbar />
    </div>
  );
}

function Default2(props: any) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const Logout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className={`${props.className} flex p-10 items-center justify-between w-full`}>
      <div className="text-3xl font-bold">{props.text}</div>
      <div className="flex gap-5">
        {props.input ? <Input.Search placeholder="Masukkan kata kunci" icon="right" className="bg-white/0" /> : ""}
        <MdLogout size="2em" onClick={Logout} className="cursor-pointer" />
      </div>
    </div>
  );
}
function Default3(props: any) {
  // const { text, input } = props;

  return (
    <div className={`${props.className} flex p-10 items-center justify-between w-full`}>
      <p className="text-3xl font-bold">{props.text}</p>
      <div className="flex gap-5">
        {props.input ? (
          <form onSubmit={props.input.onSubmit}>
            <Input.Search placeholder="Masukkan kata kunci" icon="right" className="bg-white/0 py-2" value={props.input.value} onChange={props.input.onChange} onSubmit={props.input.onSubmit} />{" "}
          </form>
        ) : (
          ""
        )}
        <Link to="/login">
          <MdLogout size="2em" />
        </Link>
      </div>
    </div>
  );
}

const Navbar = {
  Default1,
  Default2,
  Default3,
};

export default Navbar;
