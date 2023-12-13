import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/default/Button";
import Input from "@/components/default/Input";
// import { Link } from "react-router-dom";

function Laporan() {
  // const laporan = [
  //   { tanggal: "01/01/2023", layanan: "Ganti oli MPX", satuan: 5, harga: 35000, total: 350000 },
  //   { tanggal: "01/01/2023", layanan: "Service Honda Beat", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "01/01/2023", layanan: "Ganti Kampas rem beat", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "01/01/2023", layanan: "Ganti Ban Corsa", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Spakbor depan Nmax", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Master rem brembo", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Kaliper Brembo", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Shock Breaker Ohlins", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Knalpot RCB", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Ganti oli Castroll", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "02/01/2023", layanan: "Ganti oli MPX", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "03/01/2023", layanan: "Ganti oli MPX", satuan: 5, harga: 35000, total: 350000 },
  //   { tanggal: "03/01/2023", layanan: "Service Honda Beat", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "03/01/2023", layanan: "Ganti Kampas rem beat", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "03/01/2023", layanan: "Ganti Ban Corsa", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Spakbor depan Nmax", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Master rem brembo", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Kaliper Brembo", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Shock Breaker Ohlins", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Knalpot RCB", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Ganti oli Castroll", satuan: 1, harga: 35000, total: 35000 },
  //   { tanggal: "04/01/2023", layanan: "Ganti oli MPX", satuan: 1, harga: 35000, total: 35000 },
  // ];

  return (
    <div className="bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6">
        <Navbar.Default2 text="Laporan Pembukuan" />

        <div className="text-center h-[523px] px-10 flex flex-col justify-between">
          <div className="overflow-auto">
            <div className="text-2xl font-bold text-gray-900">
              <p>LAPORAN PEMBUKUAN</p>
              <p>BENGKEL MOTOR KUNIA</p>
            </div>

            <div className="space-x-3 mt-10 flex justify-end">
              <Button.Default text="Tambahkan" link="/update" />
              <Button.Default text="Hapus" />
            </div>

            {/* <Table.Laporan content={laporan} className="mt-5 rounded-md" /> */}

            {/* NEW */}
            <table className={`mt-5 w-full rounded-lg overflow-hidden`}>
              <thead>
                <tr className="bg-dark-6 text-light-1 h-10">
                  <th></th>
                  <th>Tanggal</th>
                  <th>Layanan</th>
                  <th>Satuan</th>
                  <th>Harga</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {/* PERULANGAN */}
                <tr className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                  <td>
                    <Input.Checkbox className="border-brand-1"/>
                  </td>
                  <td>01/01/2023</td>
                  <td className="text-left">Ganti oli MPX</td>
                  <td>1</td>
                  <td>35000</td>
                  <td>35000</td>
                </tr>
                <tr className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                  <td>
                    <Input.Checkbox className="border-brand-1"/>
                  </td>
                  <td>01/01/2023</td>
                  <td className="text-left">Ganti oli MPX</td>
                  <td>1</td>
                  <td>35000</td>
                  <td>35000</td>
                </tr> 
                <tr className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                  <td>
                    <Input.Checkbox className="border-brand-1"/>
                  </td>
                  <td>01/01/2023</td>
                  <td className="text-left">Ganti oli MPX</td>
                  <td>1</td>
                  <td>35000</td>
                  <td>35000</td>
                </tr> 
                <tr className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                  <td>
                    <Input.Checkbox className="border-brand-1"/>
                  </td>
                  <td>01/01/2023</td>
                  <td className="text-left">Ganti oli MPX</td>
                  <td>1</td>
                  <td>35000</td>
                  <td>35000</td>
                </tr> 
                  
                <tr className="bg-dark-6 text-light-1 h-10">
                  <th colSpan={5} className="text-left pl-20">
                    SUBTOTAL PENDAPATAN BULAN INI
                  </th>
                  <th>12.000.000</th>
                </tr>
              </tbody>

            </table>

            <div className="text-gray-900 flex items-center justify-center space-x-10 my-10 ">
              <FaChevronLeft />
              <p className="text-brand-1">January 2023</p>
              <FaChevronRight />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Laporan;
