import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Pagination() {
  const page = 2

  return (
    <div className="my-10 flex justify-center items-center">
      <div className="gap-3 flex">

        <div className="flex items-center gap-1 border border-gray-900 p-2 rounded-lg">
          <HiOutlineChevronLeft />
          <p>Sebelumnya</p>
        </div>

        {/* PAGE */}
        {
          Array.from({length:page}).map((_, index) => (
            <div key={index} className={`${index === 0 ? "bg-brand-1 text-gray-100 font-bold" : "border"} flex items-center justify-center border-gray-900 p-2 rounded-lg w-[42px]`}>
              <p>{index + 1}</p>
            </div>
          ))
        }

        <div className="flex items-center gap-1 border border-gray-900 p-2 rounded-lg">
          <p>Berikutnya</p>
          <HiOutlineChevronRight />
        </div>

      </div>
    </div>
  );
}

export default Pagination;
