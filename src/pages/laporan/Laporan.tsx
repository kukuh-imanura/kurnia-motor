import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar"
import Table from "@/components/default/Table";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from "@/components/default/Button";
// import { Link } from "react-router-dom";

function Laporan() {
  const laporan = [
    { tanggal: '01/01/2023', layanan: 'Ganti oli MPX', satuan: 5, harga: 35000, total: 350000},
    { tanggal: '01/01/2023', layanan: 'Service Honda Beat', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '01/01/2023', layanan: 'Ganti Kampas rem beat', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '01/01/2023', layanan: 'Ganti Ban Corsa', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Spakbor depan Nmax', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Master rem brembo', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Kaliper Brembo', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Shock Breaker Ohlins', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Knalpot RCB', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Ganti oli Castroll', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '02/01/2023', layanan: 'Ganti oli MPX', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '03/01/2023', layanan: 'Ganti oli MPX', satuan: 5, harga: 35000, total: 350000},
    { tanggal: '03/01/2023', layanan: 'Service Honda Beat', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '03/01/2023', layanan: 'Ganti Kampas rem beat', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '03/01/2023', layanan: 'Ganti Ban Corsa', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Spakbor depan Nmax', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Master rem brembo', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Kaliper Brembo', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Shock Breaker Ohlins', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Knalpot RCB', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Ganti oli Castroll', satuan: 1, harga: 35000, total: 35000},
    { tanggal: '04/01/2023', layanan: 'Ganti oli MPX', satuan: 1, harga: 35000, total: 35000},
  ]

  const header = ["", "Tanggal", "Layanan", "Satuan", "Harga", "Total"]
  const footer = (
    <>
      <th colSpan={5} className="text-left pl-20">
        SUBTOTAL PENDAPATAN BULAN INI
      </th>
      <th>12.000.000</th>
    </>
  );

  // TODO : Backend, FILTER BULAN
  // const bulanIni = laporan.filter((value) => {
  //   const bulan = value.tanggal.split('/')[1];
  //   return bulan === '03';
  // })
  // console.log(bulanIni)

  return (
    
    <div className="bg-surface-1 text-gray-900 flex">
      <Sidebar/>

      <div className="w-full">
        {/* <Link to ="/update"></Link> */}
        <Navbar.Default2 text="Laporan Pembukuan" input/>
        <div className="text-center h-[523px] px-10 flex flex-col justify-between">
        <div className="overflow-auto">
          <div className="text-2xl font-bold text-gray-900">
                  <p>LAPORAN PEMBUKUAN</p>
                  <p>BENGKEL MOTOR KUNIA</p>
                </div>

                <td className='space-x-3 mt-10 flex justify-end'>
                <Button.Default text="Tambahkan" link="/update"/>
                <Button.Default text="Hapus"/>
              </td>
                {/* <div className="font-bold space-x-3 mt-10 flex justify-end">
                  <Link to="update" className="bg-[#20B038] px-10 py-3 rounded">Update</Link>
                  <button className="bg-[#DF1407] px-10 py-3 rounded">Hapus</button>
                </div> */}

                <Table.Laporan header={header} content={laporan} footer={footer} className="mt-5 rounded-md"/>

                <div className="text-gray-900 flex items-center justify-center space-x-10 mt-10 ">
                  <FaChevronLeft />
                  <p className="text-brand-1">January 2023</p>
                  <FaChevronRight />
                </div>
                <div></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Laporan