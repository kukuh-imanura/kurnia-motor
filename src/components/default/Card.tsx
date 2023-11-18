import { Link } from "react-router-dom"

function Card(props:any) {
  return (
    <div className="bg-gray-100 w-[327.67px] shadow-md">
      <div className="p-5 relative flex flex-col items-center">
        <img src={props.img} alt="Img" />
        <p className="text-gray-900 absolute bottom-0">{props.text}</p>
      </div>
      
      <div className="flex flex-col gap-1 mt-3">
        {
          props.btn ? (
            <Link to={props.link} className="bg-brand-1 py-1 w-full text-center">{props.btn}</Link>
          ) : ''
        }
        <Link to="" className="bg-[#20B038] py-1 w-full text-center">Terima Pengajuan</Link>
        <Link to="" className="bg-[#DF1407] py-1 w-full text-center">Tolak Pengajuan</Link>
      </div>
    </div>
  )
}

export default Card