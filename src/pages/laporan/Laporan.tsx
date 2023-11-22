import Footer from "@/components/default/Footer"
import Navbar from "@/components/default/Navbar"
import Table from "@/components/default/Table";
import { Link } from "react-router-dom";

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
    // { tanggal: '01/02/2023', layanan: 'Ganti oli MPX', satuan: 5, harga: 35000, total: 350000},
    // { tanggal: '01/02/2023', layanan: 'Service Honda Beat', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '01/02/2023', layanan: 'Ganti Kampas rem beat', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '01/02/2023', layanan: 'Ganti Ban Corsa', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Spakbor depan Nmax', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Master rem brembo', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Kaliper Brembo', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Shock Breaker Ohlins', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Knalpot RCB', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Ganti oli Castroll', satuan: 1, harga: 35000, total: 35000},
    // { tanggal: '02/03/2023', layanan: 'Ganti oli MPX', satuan: 1, harga: 35000, total: 35000},
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
    <div>
      <Navbar />
      <div className="bg-surface-1 text-center py-10 px-28">
        <div className="text-2xl font-bold text-gray-900">
          <p>LAPORAN PEMBUKUAN</p>
          <p>BENGKEL MOTOR KUNIA</p>
        </div>

        <div className="font-bold space-x-3 mt-10 flex justify-end">
          <Link to="update" className="bg-[#20B038] px-10 py-3 rounded">Update</Link>
          <button className="bg-[#DF1407] px-10 py-3 rounded">Hapus</button>
        </div>

        <Table.Laporan header={header} content={laporan} footer={footer} className="mt-5"/>

      </div>
      <Footer />
    </div>
  )
}

export default Laporan