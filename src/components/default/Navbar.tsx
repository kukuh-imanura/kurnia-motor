
import { Link, useLocation } from "react-router-dom"
import logo from '/assets/images/logo-orange.png?url'
import Dropdown from "./Dropdown"
import Button from "./Button"


function Navbar() {

  const classActive = "font-bold text-brand-1"

  return (
    <div className="sticky top-0 w-full text-gray-900 py-3 px-10 flex justify-between items-center bg-surface-2">
      <img src={logo} alt="" className='w-44'/>

      <div>
        <Link to="/" className={`text-right inline-block w-32 hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/" ? classActive : ''}`}>Beranda</Link>
        {/* DROPDOWN */}
        <Dropdown/>
        <Link to="/about" className={`text-left inline-block w-32 hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/about" ? classActive : ''}`}>Tentang Kami</Link>
      </div>

      <Button.Navbar />
    </div>
  )
}

export default Navbar