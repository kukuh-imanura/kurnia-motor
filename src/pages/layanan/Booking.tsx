import Navbar from "@/components/default/Navbar";
import Pagination from "@/components/default/Pagination";
import Sidebar from "@/components/default/Sidebar";
import Table from "@/components/default/Table";
import Button from "@/components/default/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function Booking() {
  const [dataBooking, setDataBooking] = useState([])

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
                    
                  }
                  
                  <tr className={`flex items-center justify-between p-3 `}>
                    {/* ${index % 2 === 0 ? "" : "border-y-2"} */}
                    <td className="flex items-center gap-5">
                      <p>.</p>
                      <div>
                        <img src="/assets/images/admin/adelia.png" alt="Foto Profil" className="h-16 rounded-full" />
                      </div>
                      <div>
                        <p className="font-bold">Nama</p>
                        <p className="font-light">10:00</p>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-3">
                        <Button.Default text="Terima" />
                        <Button.Default text="Tolak" />
                      </div>
                    </td>
                  </tr>

                </tbody>

                {/* {Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index} className={`flex items-center justify-between p-3 ${index % 2 === 0 ? "" : "border-y-2"}`}>
                    <div className="flex items-center gap-5">
                      <td>{index + 1}.</td>
                      <td>
                        <img src="/assets/images/admin/adelia.png" alt="Foto Profil" className="h-16 rounded-full" />
                      </td>
                      <td>
                        <p className="font-bold">Nama</p>
                        <p className="font-light">10:00</p>
                      </td>
                    </div>

                    <td className="flex gap-3">
                      {props.detail ? <Button.Default text="Detail" link="/detail" /> : null}
                      <Button.Default text="Terima" />
                      <Button.Default text="Tolak" />
                    </td>
                  </tr>
                ))} */}
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
