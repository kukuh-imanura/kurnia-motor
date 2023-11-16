
import { Link, useLocation } from "react-router-dom"
import logo from '/assets/images/logo-orange.png?url'
import Dropdown from "./Dropdown"


function Navbar() {

  const location = useLocation()
  const classActive = "font-bold text-orange-500"

  return (
    <div className="sticky top-0 w-full text-gray-900 py-3 px-10 flex justify-between items-center" style={{backgroundColor : '#FFEDD3'}}>
      <img src={logo} alt="" className='w-44'/>

      <div>
        <Link to="/" className={`text-center inline-block w-32 hover:font-bold hover:text-orange-500 ${location.pathname === "/" ? classActive : ''}`}>Beranda</Link>
        {/* DROPDOWN */}
        <Dropdown/>
        <Link to="/about" className={`text-center inline-block w-32 hover:font-bold hover:text-orange-500 ${location.pathname === "/about" ? classActive : ''}`}>Tentang Kami</Link>
      </div>

      <button className='px-10 h-11 text-gray-100 rounded font-bold' style={{backgroundColor : '#F18805'}}>Keluar</button>
    </div>
  )
}

export default Navbar