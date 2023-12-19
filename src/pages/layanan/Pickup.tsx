import Button from "@/components/default/Button";
import Navbar from "@/components/default/Navbar";
import Pagination from "@/components/default/Pagination";
import Sidebar from "@/components/default/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function Pickup() {
  const [dataPickup, setDataPickup] = useState<any[]>([]);
  const row = 5;
  const [thisPage, setThisPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://bengkel-api-ruby.vercel.app/api/pickup`)
      .then((response) => {
        setDataPickup(response.data.result);
        // console.log(response.data.result);
      })
      .catch((error) => {
        return "Error : " + error;
      });
  }, []);

  // FILTER DATA PENDING
  const dataPending = dataPickup?.filter((value: any) => value.status === "Pending" || value.status === "pending");
  const totalPage = Math.ceil(dataPending.length / row);

  // MEMBUAT ID (PENOMORAN)
  const numDataBooking = dataPending?.map((value: any, index: any) => {
    return {
      no: index + 1,
      ...value,
    };
  });

  // MEMBAGI HALAMAN
  const getDataForPage = (pageNumber: any) => {
    const startIndex = (pageNumber - 1) * row;
    const endIndex = startIndex + row;
    return numDataBooking.slice(startIndex, endIndex);
  };

  // HANDLE TERIMA/TOLAK
  const handleTerima = async (id: any, name: any) => {
    await axios
      .patch(`https://bengkel-api-ruby.vercel.app/api/pickup/${id}?status=proceed`)
      .then((response) => {
        alert(`Terima ${name}`);

        // REFRESH DATA
        axios.get(`https://bengkel-api-ruby.vercel.app/api/pickup`).then((response) => {
          setDataPickup(response.data.result);
        });

        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const handleTolak = async (id: any, name: any) => {
    await axios
      .patch(`https://bengkel-api-ruby.vercel.app/api/pickup/${id}?status=denied`)
      .then((response) => {
        alert(`Terima ${name}`);

        // REFRESH DATA
        axios.get(`https://bengkel-api-ruby.vercel.app/api/pickup`).then((response) => {
          setDataPickup(response.data.result);
        });

        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6">
        <Navbar.Default2 text="Permintaan Antar Jemput" />

        <div className="h-[523px] px-10 flex flex-col justify-between">
          <div className="overflow-auto">
            <p className="text-center text-xl text-brand-1">Pastikan Customer menerima pelayanan terbaik anda!</p>
            <p className="text-center text-xl text-brand-1 mb-5">Lihat detail untuk memperkirakan kinerja yang kamu berikan</p>

            <table className="w-full">
              <tbody>
                {getDataForPage(thisPage)?.map((value: any, index: any) => {
                  return (
                    <tr key={index} className={`flex items-center justify-between p-3 ${index % 2 === 0 ? "" : "border-y-2"}`}>
                      <td className="flex items-center gap-5">
                        <p>{value.no}.</p>
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
                          <Button.Default text="Detail" link={`/pickup/detail/${value.id_pickup}`} />
                          <Button.Default text="Terima" onClick={() => handleTerima(value.id_pickup, value.name)} />
                          <Button.Default text="Tolak" onClick={() => handleTolak(value.id_pickup, value.name)} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination totalPage={totalPage} halamanIni={(data: any) => setThisPage(data + 1)} />
        </div>
      </div>
    </div>
  );
}

export default Pickup;
