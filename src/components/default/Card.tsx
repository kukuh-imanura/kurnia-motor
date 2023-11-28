import { Link } from "react-router-dom";
import { useState } from "react";

function Action(props: any) {
  // HANDLE ACTION
  const [_, setStatus] = useState(props.status);
  // TODO : BackEnd, simpan status setelah di set

  return (
    <div className="bg-white w-[327.67px] shadow-md">
      <div className="p-2 flex gap-2 flex-col items-center">
        <img src={props.img} alt="Img" />
        <p className="text-gray-900">{props.text}</p>
      </div>

      <div className="flex flex-col gap-1">
        {props.btn ? (
          <Link to={props.link} className="bg-brand-1 py-1 w-full text-center">
            {props.btn}
          </Link>
        ) : (
          ""
        )}

        <button onClick={() => setStatus("accepted")} className="bg-[#20B038] py-1 w-full text-center">
          Terima Pengajuan
        </button>
        <button onClick={() => setStatus("denied")} className="bg-[#DF1407] py-1 w-full text-center">
          Tolak Pengajuan
        </button>
      </div>
    </div>
  );
}

function Review(props: any) {
  const star = 5;

  return (
    <div className="bg-white shadow-md rounded-xl p-10 h-fit space-y-5">
      <img src="/assets/images/review/1.png" alt="" />

      <div className="flex justify-center">
        {
          Array.from({length:star}).map((_, index) => (
            <img key={index} src="/assets/icons/star.png" alt="⭐" />
          ))
        }
      </div>

      <div>
        <p className="font-bold text-center text-lg">Nama</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam possimus vero architecto commodi, obcaecati temporibus ut maxime delectus quasi quam sapiente provident veritatis soluta eaque illum animi quibusdam saepe?</p>
      </div>

    </div>
  );
}

const Card = {
  Action,
  Review,
};

export default Card;
