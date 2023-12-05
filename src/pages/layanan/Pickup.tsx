import Navbar from "@/components/default/Navbar"
import Pagination from "@/components/default/Pagination"
import Sidebar from "@/components/default/Sidebar"
import Table from "@/components/default/Table"

function Pickup() {
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar/>

      <div className="w-5/6">
        <Navbar.Default2 text="Permintaan Antar Jemput"/>

        <div className="h-[523px] px-10 flex flex-col justify-between">
          <div className="overflow-auto">
            <p className="text-center text-xl text-brand-1">Pastikan Customer menerima pelayanan terbaik anda!</p>
            <p className="text-center text-xl text-brand-1 mb-5">Lihat detail untuk memperkirakan kinerja yang kamu berikan</p>

            <Table.Default className="h-full" detail/>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Pickup