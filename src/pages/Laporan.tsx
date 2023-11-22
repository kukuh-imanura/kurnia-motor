import Footer from "@/components/default/Footer"
import Input from "@/components/default/Input"
import Navbar from "@/components/default/Navbar"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

  // TODO : Backend, FILTER BULAN
  // const bulanIni = laporan.filter((value) => {
  //   const bulan = value.tanggal.split('/')[1];
  //   return bulan === '03';
  // })
  // console.log(bulanIni)

  // FILTER TANGGAL MENJADI SATU
  const uniqueDates = new Set();
  
  const transformedLaporan = laporan.map((value, _) => {
    if (!uniqueDates.has(value.tanggal)) {
      uniqueDates.add(value.tanggal);
      return value;
    } else {
      return { ...value, tanggal: '' };
    }
  });


  return (
    <div>
      <Navbar />
      <div className="bg-surface-1 text-center py-10 px-28">
        <div className="text-2xl font-bold text-gray-900">
          <p>LAPORAN PEMBUKUAN</p>
          <p>BENGKEL MOTOR KUNIA</p>
        </div>

        <div className="font-bold space-x-3 mt-10 flex justify-end">
          <Link to="laporan/update" className="bg-[#20B038] px-10 py-3 rounded">Update</Link>
          <button className="bg-[#DF1407] px-10 py-3 rounded">Hapus</button>
        </div>

        <table className="w-full mt-5">
          <tr className="bg-brand-1 h-10">
            <td></td>
            <th>Tanggal</th>
            <th>Layanan</th>
            <th>Satuan</th>
            <th>Harga</th>
            <th>Total</th>
          </tr>

          {
            transformedLaporan.map((value, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-surface-2" : ""} text-gray-900 h-10`}>
                <td><Input.Checkbox /></td>
                <td>{value.tanggal}</td>
                <td className="text-left">{value.layanan}</td>
                <td>{value.satuan}</td>
                <td>{value.harga}</td>
                <td>{value.total}</td>
              </tr>
            ))
          }
          
          <tr className="bg-brand-1 text-gray-100 h-10">
            <th colSpan={5} className="text-left pl-20">SUBTOTAL PENDAPATAN BULAN INI</th>
            <th>12.000.000</th>
          </tr>

        </table>

        <div className="text-gray-900 flex items-center justify-center space-x-10 mt-10 ">
          <FaChevronLeft />
          <p>January 2023</p>
          <FaChevronRight />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Laporan