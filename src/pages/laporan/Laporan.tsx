import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/default/Button";
import { useEffect, useState } from "react";
import Input from "@/components/default/Input";
import axios from "axios";

function Laporan() {
  const [dataLaporan, setDataLaporan] = useState<any[]>([]);
  // filter berdasarkan bulan
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const [thisMonth, setThisMonth] = useState(month);
  const [thisYear, setThisYear] = useState(year);

  // HANDLE CHECKBOX CHANGE
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  // HANDLE DELETE
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios
      .delete(`https://bengkel-api-ruby.vercel.app/api/laporan/${selectedItems}`)
      .then((response) => {
        console.log(response.data);

        // Refresh the user list after deletion
        axios.get(`https://bengkel-api-ruby.vercel.app/api/laporan/?month=${thisMonth}&year=${thisYear}`).then((response: any) => {
          setDataLaporan(response.data);
        });

        setSelectedItems([])
      })
      .catch((error) => {
        return "Error : " + error;
      });
  };

  // HANDLE PAGINATION
  if (thisMonth < 1) {
    setThisYear(thisYear - 1);
    setThisMonth(12);
  } else if (thisMonth > 12) {
    setThisYear(thisYear + 1);
    setThisMonth(1);
  }

  useEffect(() => {
    axios
      .get(`https://bengkel-api-ruby.vercel.app/api/laporan/?month=${thisMonth}&year=${thisYear}`)
      .then((response) => {
        setDataLaporan(response.data);
      })
      .catch((error) => {
        return "Error : " + error;
      });
  }, [thisMonth]);

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
                <Input.Login value="Hapus" type="submit" className="cursor-pointer px-10 h-11 w-fit text-[#DF1407] font-bold border-2 border-[#DF1407] hover:bg-[#DF1407] hover:text-gray-100" />
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
                  {dataLaporan?.map((value: any, index: any) => {
                    // Konversi string tanggal menjadi objek Date
                    const dateObject = new Date(value.date);
                    dateObject.setDate(dateObject.getDate() + 1);

                    // Membuat objek Intl.DateTimeFormat dengan opsi zona waktu
                    const dateTimeFormat = new Intl.DateTimeFormat("id-ID", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      timeZone: "Asia/Jakarta",
                    });

                    // Menggunakan objek Intl.DateTimeFormat untuk memformat tanggal
                    const formattedDate = dateTimeFormat.format(dateObject);
                    return (
                      <tr key={index} className={`even:bg-gray-200 bg-gray text-dark-1 h-10`}>
                        <td>
                          <input id={value.id_report} name={value.id_report} type="checkbox" checked={selectedItems.includes(value.id_report)} onChange={() => handleCheckboxChange(value.id_report)} />
                        </td>
                        <td>{formattedDate}</td>
                        <td className="text-left">{value.service}</td>
                        <td>{value.unit}</td>
                        <td>{value.price}</td>
                        <td>{value.total}</td>
                      </tr>
                    );
                  })}

                  <tr className="bg-dark-6 text-light-1 h-10">
                    <th colSpan={5} className="text-left pl-20">
                      SUBTOTAL PENDAPATAN BULAN INI
                    </th>
                    <th>
                      {dataLaporan?.reduce((accumulator: any, value: any) => {
                        const subtotal = accumulator + Number(value.total);
                        return subtotal;
                      }, 0)}
                    </th>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="text-gray-900 flex items-center justify-center space-x-10 my-10">
              <FaChevronLeft onClick={() => setThisMonth(thisMonth - 1)} className="cursor-pointer" />
              <p className="text-brand-1 cursor-default">
                {thisMonth === 1 ? "January" : thisMonth === 2 ? "February" : thisMonth === 3 ? "Maret" : thisMonth === 4 ? "April" : thisMonth === 5 ? "Mei" : thisMonth === 6 ? "Juni" : thisMonth === 7 ? "Juli" : thisMonth === 8 ? "Agustus" : thisMonth === 9 ? "September" : thisMonth === 10 ? "Oktober" : thisMonth === 11 ? "November" : thisMonth === 12 ? "Desember" : ""}
                {` ${thisYear}`}
              </p>
              <FaChevronRight onClick={() => setThisMonth(thisMonth + 1)} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laporan;
