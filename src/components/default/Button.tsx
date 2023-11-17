import { Link } from "react-router-dom"


function Navbar() {
  return (
    <button className='px-10 h-11 text-gray-100 rounded font-bold bg-brand-1'>Keluar</button>
  )
}

function Card(props:any) {
  return (
    <Link to={props.link} className="bg-brand-1 w-full h-full rounded-md shadow-md px-5 flex flex-col justify-center">
      <p className="text-xl">{props.text}</p>
      <p className="text-xs italic">Lihat Selengkapnya</p>
    </Link>
  )
}

const Button = {
  Navbar,
  Card,
}

export default Button