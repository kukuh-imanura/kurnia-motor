import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/default/Button";
import { useState } from "react";
// import Input from "@/components/default/Input";
// import { Link } from "react-router-dom";

function Laporan() {
  const laporan = [
    { tanggal: "01/01/2023", layanan: "Ganti oli MPX", satuan: 10, harga: 35000, total: 350000 },
    { tanggal: "01/01/2023", layanan: "Shock Breaker Ohlins", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "02/01/2023", layanan: "Service Honda Beat", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "02/01/2023", layanan: "Knalpot RCB", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "03/01/2023", layanan: "Ganti Kampas rem beat", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "03/01/2023", layanan: "Ganti oli Castroll", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "04/01/2023", layanan: "Ganti Ban Corsa", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "04/01/2023", layanan: "Ganti oli MPX", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "05/01/2023", layanan: "Spakbor depan Nmax", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "01/12/2022", layanan: "Master rem brembo", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "02/12/2022", layanan: "Kaliper Brembo", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "03/12/2022", layanan: "Shock Breaker Ohlins", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "04/12/2022", layanan: "Knalpot RCB", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "01/02/2023", layanan: "Ganti oli Castroll", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "02/02/2023", layanan: "Ganti oli MPX", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "03/02/2023", layanan: "Ganti oli MPX", satuan: 5, harga: 35000, total: 350000 },
    { tanggal: "04/02/2023", layanan: "Service Honda Beat", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "05/02/2023", layanan: "Ganti Kampas rem beat", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "01/01/2023", layanan: "Ganti Ban Corsa", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "02/01/2023", layanan: "Spakbor depan Nmax", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "03/01/2023", layanan: "Master rem brembo", satuan: 1, harga: 35000, total: 35000 },
    { tanggal: "04/01/2023", layanan: "Kaliper Brembo", satuan: 1, harga: 35000, total: 35000 },
  ];

  // Menyimpan data setelah dikonversi menjadi string
  localStorage.setItem("laporan", JSON.stringify(laporan));

  // Membaca data dan mengonversi kembali menjadi array objek
  const storedData = JSON.parse(localStorage.getItem("laporan") || "[]");

  // Sorting
  // Mengubah format tanggal menjadi objek Date
  const laporanFormatted = storedData.map((item: any) => ({
    ...item,
    tanggal: new Date(item.tanggal),
  }));
  // Mengurutkan array berdasarkan tanggal
  laporanFormatted.sort((a: any, b: any) => a.tanggal - b.tanggal);
  // Mengubah kembali format tanggal menjadi string
  const sortedLaporan = laporanFormatted.map((item: any) => ({
    ...item,
    tanggal: item.tanggal.toLocaleDateString("en-US"),
  }));

  // filter berdasarkan bulan
  const [thisMonth, setThisMonth] = useState(1);
  const [thisYear, setThisYear] = useState(2023);
  if(thisMonth < 1){
    setThisYear(thisYear - 1)
    setThisMonth(12)
  }else if(thisMonth > 12){
    setThisYear(thisYear + 1)
    setThisMonth(1)
  }
  const filteredDate = sortedLaporan.map((item: any) => {
    const [day, month, year] = item.tanggal.split("/");

    if (month == thisMonth && year == thisYear) {
      const dateObject = `${day}/${month}/${year}`;
      return {
        ...item,
        tanggal: dateObject,
      };
    }
  });
  const finalFilteredDate = filteredDate.filter((item: any) => item !== undefined);

  // Membuat Tanggal Unik
  const uniqueDates = new Set();
  const result = finalFilteredDate.map((item: any) => {
    if (uniqueDates.has(item.tanggal)) {
      item.tanggal = "";
    } else {
      uniqueDates.add(item.tanggal);
    }
    return item;
  });

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

                {result.map((value: any, index: any) => (
                  <tr key={index} className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                    <td>
                      {/* <Input.Checkbox className="border-brand-1"/> */}
                      <input type="checkbox" name={index} id={index} />
                    </td>
                    <td>{value.tanggal}</td>
                    <td className="text-left">{value.layanan}</td>
                    <td>{value.satuan}</td>
                    <td>{value.harga}</td>
                    <td>{value.total}</td>
                  </tr>
                ))}

                <tr className="bg-dark-6 text-light-1 h-10">
                  <th colSpan={5} className="text-left pl-20">
                    SUBTOTAL PENDAPATAN BULAN INI
                  </th>
                  <th>
                    {
                      result.reduce((accumulator:any, value:any) => {
                        const subtotal = accumulator + value.total;
                        return subtotal;
                      }, 0)                     
                    }
                  </th>
                </tr>
              </tbody>
            </table>

            <div className="text-gray-900 flex items-center justify-center space-x-10 my-10">
              <FaChevronLeft onClick={() => setThisMonth(thisMonth - 1)} className="cursor-pointer"/>
              <p className="text-brand-1 cursor-default">
                {
                  thisMonth === 1 ? "January" : 
                  thisMonth === 2 ? "February" : 
                  thisMonth === 3 ? "Maret" : 
                  thisMonth === 4 ? "April" : 
                  thisMonth === 5 ? "Mei" : 
                  thisMonth === 6 ? "Juni" : 
                  thisMonth === 7 ? "Juli" : 
                  thisMonth === 8 ? "Agustus" : 
                  thisMonth === 9 ? "September" : 
                  thisMonth === 10 ? "Oktober" : 
                  thisMonth === 11 ? "November" : 
                  thisMonth === 12 ? "Desember" : ""
                }
                {` ${thisYear}`}
              </p>
              <FaChevronRight onClick={() => setThisMonth(thisMonth + 1)} className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laporan;
