import { Link } from "react-router-dom"

function Default(props:any) {
  return (
    <Link to={props.link} className={`${props.className} px-10 h-11 text-gray-100 rounded font-bold bg-brand-1 flex items-center`}>{props.text}</Link>
  )
}

function Navbar(props:any) {
  return (
    <Link to="/login" className={`${props.className} px-10 h-11 text-gray-100 rounded font-bold bg-brand-1 flex items-center`}>Keluar</Link>
  )
}

function Card(props:any) {
  return (
    <Link to={props.link} className="bg-brand-1 w-full h-full rounded-md shadow-md px-5 flex flex-col justify-center">
      <p className="text-xl text-gray-100">{props.text}</p>
      <p className="text-xs italic text-gray-100">Lihat Selengkapnya</p>
    </Link>
  )
}

const Button = {
  Default,
  Navbar,
  Card,
}

export default Button