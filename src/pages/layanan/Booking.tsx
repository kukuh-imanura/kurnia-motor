import Navbar from "@/components/default/Navbar"
import Pagination from "@/components/default/Pagination"
import Sidebar from "@/components/default/Sidebar"
import Table from "@/components/default/Table"

function Booking() {
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar/>

      <div className="w-5/6">
        <Navbar.Default2 text="Booking Online"/>

        <div className="h-[523px] px-10 flex flex-col justify-between">
          <div className="overflow-auto">
            <p className="text-center text-xl text-brand-1">Pastikan Customer menerima pelayanan terbaik anda!</p>
            <p className="text-center text-xl text-brand-1 mb-5">Booking online untuk memperkirakan kinerja yang kamu berikan</p>

            <Table.Default className="h-full"/>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Booking