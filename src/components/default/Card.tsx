import { Link } from "react-router-dom"
import imgStar from '../../../public/assets/icons/star.png'
import { useState } from "react"

function Action(props:any) {
  // HANDLE ACTION
  const [_, setStatus] = useState(props.status)
  // TODO : simpan status setelah di set

  return (
    <div className="bg-white w-[327.67px] shadow-md">
      <div className="p-2 flex gap-2 flex-col items-center">
        <img src={props.img} alt="Img" />
        <p className="text-gray-900">{props.text}</p>
      </div>
      
      <div className="flex flex-col gap-1">
        {
          props.btn ? (
            <Link to={props.link} className="bg-brand-1 py-1 w-full text-center">{props.btn}</Link>
          ) : ''
        }
        
        {/* TODO : Action Hapus Ketika di Tolak */}
        <button onClick={() => setStatus("accepted")} className="bg-[#20B038] py-1 w-full text-center">Terima Pengajuan</button>
        <button onClick={() => setStatus("denied")} className="bg-[#DF1407] py-1 w-full text-center">Tolak Pengajuan</button>
      </div>
    </div>
  )
}

function Review(props:any) {

  const star = props.star

  return (
    <div className="bg-white w-[327.67px] shadow-md">
      <div>
        <img src={props.img} alt="Img" />
      </div>
      
      <div className="text-gray-900 px-10 py-5 space-y-5 text-center h-52">
        <p className="flex justify-center">
          {
            Array.from({length:star}, (_, index) => index).map((_, index) => (
              <img key={index} src={imgStar} alt="Star" className="h-6"/>
            ))
          }
        </p>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

const Card = {
  Action,
  Review,
}

export default Card