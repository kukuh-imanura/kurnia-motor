
import { Link, useLocation } from "react-router-dom"
import logo from '/assets/images/logo-orange.png?url'
import Dropdown from "./Dropdown"
import Button from "./Button"
import { MdLogout } from "react-icons/md";


function Default1() {

  const classActive = "font-bold text-brand-1"

  return (
    <div className="sticky top-0 w-full text-gray-900 py-3 px-10 flex justify-between items-center bg-surface-2 z-10">
      <img src={logo} alt="" className='w-44'/>

      <div>
        <Link to="/" className={`w-[65.13px] text-center inline-block hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/" ? classActive : ''}`}>Beranda</Link>
        {/* DROPDOWN */}
        <Dropdown/>
        <Link to="/about" className={`w-[107.48px] text center inline-block hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/about" ? classActive : ''}`}>Tentang Kami</Link>

      </div>

      <Button.Navbar />
    </div>
  )
}

function Default2(props:any) {
  return (
    <div className="flex p-10 items-center justify-between w-full">
      <p className="text-3xl font-bold">{props.text}</p>
      <Link to="/login">
        <MdLogout size="2em"/>
      </Link>
    </div>
  )
}

const Navbar = {
  Default1,
  Default2,
}

export default Navbar