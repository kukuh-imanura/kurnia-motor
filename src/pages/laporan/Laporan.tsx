import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/default/Button";
import { useState } from "react";
import Input from "@/components/default/Input";

function Laporan() {
  let [laporan, setLaporan] = useState([
    { id:1, tanggal: "01/10/2023", layanan: "Ganti oli MPX", satuan: 10, harga: 35000, total: 350000 },
    { id:2, tanggal: "02/10/2023", layanan: "Service Honda Beat", satuan: 1, harga: 35000, total: 35000 },
    { id:3, tanggal: "01/10/2023", layanan: "Shock Breaker Ohlins", satuan: 1, harga: 35000, total: 35000 },
    { id:4, tanggal: "02/10/2023", layanan: "Knalpot RCB", satuan: 1, harga: 35000, total: 35000 },
    { id:5, tanggal: "03/10/2023", layanan: "Ganti Kampas rem beat", satuan: 1, harga: 35000, total: 35000 },
    { id:6, tanggal: "03/10/2023", layanan: "Ganti oli Castroll", satuan: 1, harga: 35000, total: 35000 },
    { id:7, tanggal: "04/10/2023", layanan: "Ganti Ban Corsa", satuan: 1, harga: 35000, total: 35000 },
    { id:8, tanggal: "04/10/2023", layanan: "Ganti oli MPX", satuan: 1, harga: 35000, total: 35000 },
    { id:9, tanggal: "05/10/2023", layanan: "Spakbor depan Nmax", satuan: 1, harga: 35000, total: 35000 },
    { id:10, tanggal: "01/12/2023", layanan: "Master rem brembo", satuan: 1, harga: 35000, total: 35000 },
    { id:11, tanggal: "02/12/2023", layanan: "Kaliper Brembo", satuan: 1, harga: 35000, total: 35000 },
    { id:12, tanggal: "03/12/2023", layanan: "Shock Breaker Ohlins", satuan: 1, harga: 35000, total: 35000 },
    { id:13, tanggal: "04/12/2023", layanan: "Knalpot RCB", satuan: 1, harga: 35000, total: 35000 },
    { id:14, tanggal: "01/11/2023", layanan: "Ganti oli Castroll", satuan: 1, harga: 35000, total: 35000 },
    { id:15, tanggal: "02/11/2023", layanan: "Ganti oli MPX", satuan: 1, harga: 35000, total: 35000 },
    { id:16, tanggal: "03/11/2023", layanan: "Ganti oli MPX", satuan: 5, harga: 35000, total: 350000 },
    { id:17, tanggal: "04/11/2023", layanan: "Service Honda Beat", satuan: 1, harga: 35000, total: 35000 },
    { id:18, tanggal: "05/11/2023", layanan: "Ganti Kampas rem beat", satuan: 1, harga: 35000, total: 35000 },
    { id:19, tanggal: "01/11/2023", layanan: "Ganti Ban Corsa", satuan: 1, harga: 35000, total: 35000 },
    { id:20, tanggal: "02/11/2023", layanan: "Spakbor depan Nmax", satuan: 1, harga: 35000, total: 35000 },
    { id:21, tanggal: "03/11/2023", layanan: "Master rem brembo", satuan: 1, harga: 35000, total: 35000 },
    { id:22, tanggal: "04/11/2023", layanan: "Kaliper Brembo", satuan: 1, harga: 35000, total: 35000 },
  ]);

  // Menyimpan data setelah dikonversi menjadi string
  localStorage.setItem("laporan", JSON.stringify(laporan));

  // Membaca data dan mengonversi kembali menjadi array objek
  let storedData = JSON.parse(localStorage.getItem("laporan") || "[]");

  // HANDLE DELETE
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    const result = laporan.filter((item:any) => !selectedItems.includes(item.id));

    setLaporan(result)
    setSelectedItems([])
    localStorage.setItem("laporan", JSON.stringify(result));
  };

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
  const [thisMonth, setThisMonth] = useState(12);
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

  // // Membuat Tanggal Unik
  // const uniqueDates = new Set();
  // const result = finalFilteredDate.map((item: any) => {
  //   if (uniqueDates.has(item.tanggal)) {
  //     item.tanggal = "";
  //   } else {
  //     uniqueDates.add(item.tanggal);
  //   }
  //   return item;
  // });

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

            <form onSubmit={handleDelete}>
              <div className="space-x-3 mt-10 flex justify-end">
                <Button.Default text="Tambahkan" link="/update" />
                <Input.Login value="Hapus" type="submit" className="cursor-pointer px-10 h-11 w-fit text-[#DF1407] font-bold border-2 border-[#DF1407] hover:bg-[#DF1407] hover:text-gray-100"/>
              </div>

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

                  {finalFilteredDate.map((value: any, index: any) => (
                    <tr key={index} className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                      <td>
                        {/* <Input.Checkbox className="border-brand-1"/> */}
                        <input id={value.id} name={value.id} type="checkbox" checked={selectedItems.includes(value.id)} onChange={() => handleCheckboxChange(value.id)} />
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
                        finalFilteredDate.reduce((accumulator:any, value:any) => {
                          const subtotal = accumulator + value.total;
                          return subtotal;
                        }, 0)                     
                      }
                    </th>
                  </tr>
                </tbody>
              </table>
            </form>

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
