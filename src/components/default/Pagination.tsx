import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Pagination(props:any) {
  const page = props.totalPage
  const [thisPage, setThisPage] = useState(0)
  // console.log(thisPage)

  const next = () => {
    const halamanIni = thisPage === page - 1 ? page - 1 : thisPage + 1
    setThisPage(halamanIni)
    props.halamanIni(halamanIni)
  }

  const prev = () => {
    const halamanIni = thisPage === 0 ? 0 : thisPage - 1
    setThisPage(halamanIni)
    props.halamanIni(halamanIni)
  }

  return (
    <div className="my-10 flex justify-center items-center">
      <div className="gap-3 flex">

        <div onClick={prev} className="flex items-center gap-1 border border-gray-900 p-2 rounded-lg cursor-pointer">
          <HiOutlineChevronLeft />
          <p>Sebelumnya</p>
        </div>

        {/* PAGE */}
        {
          Array.from({length:page}).map((_, index) => (
            <div key={index} onClick={() => {setThisPage(index); props.halamanIni(index)}} className={`${index === thisPage ? "bg-brand-1 text-gray-100 font-bold" : "border"} flex items-center justify-center border-gray-900 p-2 rounded-lg w-[42px] cursor-pointer`}>
              <p>{index + 1}</p>
            </div>
          ))
        }

        <div onClick={next} className="flex items-center gap-1 border border-gray-900 p-2 rounded-lg cursor-pointer">
          <p>Berikutnya</p>
          <HiOutlineChevronRight />
        </div>

      </div>
    </div>
  );
}

export default Pagination;
