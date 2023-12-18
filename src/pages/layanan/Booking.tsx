import Navbar from "@/components/default/Navbar";
import Pagination from "@/components/default/Pagination";
import Sidebar from "@/components/default/Sidebar";
import Table from "@/components/default/Table";
import Button from "@/components/default/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function Booking() {
  const [dataBooking, setDataBooking] = useState<any[]>([])

  useEffect(() => {
    axios
      .get(`https://bengkel-api-ruby.vercel.app/api/booking`)
      .then((response) => {
        setDataBooking(response.data.result);
      })
      .catch((error) => {
        return "Error : " + error;
      });
  }, [])

  console.log(dataBooking)
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6">
        <Navbar.Default2 text="Booking Online" />

        <div className="h-[523px] px-10 flex flex-col justify-between">
          <div className="overflow-auto">
            <p className="text-center text-xl text-brand-1">Pastikan Customer menerima pelayanan terbaik anda!</p>
            <p className="text-center text-xl text-brand-1 mb-5">Booking online untuk memperkirakan kinerja yang kamu berikan</p>

            {/* <Table.Default className="h-full"/> */}

            <div>
              <table className="w-full">
                <tbody>

                  {
                    dataBooking?.map((value:any, index:any) => {
                      return(
                        <tr key={index} className={`flex items-center justify-between p-3 ${index % 2 === 0 ? "" : "border-y-2"}`}>
                          <td className="flex items-center gap-5">
                            <p>{index + 1}.</p>
                            <div>
                              <img src={value.pict || "/assets/images/admin/default.jpg"} alt="Foto Profil" className="h-16 rounded-full" />
                            </div>
                            <div>
                              <p className="font-bold">{value.name}</p>
                              <p className="font-light">{value.time}</p>
                            </div>
                          </td>

                          <td>
                            <div className="flex gap-3">
                              {/* Kalau di terima/Tolek, ambil ID dari dataBooking, dan kemudian ubah status dari data tersebut menjadi (diproses atau ditolak) */}
                              <Button.Default text="Terima" />
                              <Button.Default text="Tolak" />
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>

              </table>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Booking;
