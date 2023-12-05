import Navbar from "@/components/default/Navbar";
import Sidebar from "@/components/default/Sidebar";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Input from "@/components/default/Input";

function Detail() {
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6 flex flex-col justify-between">
        <Navbar.Default2 text="Detail" />

        <div className="h-full px-10 pb-10">
          <div className="flex flex-col justify-between shadow-md rounded-md h-full bg-white">
            <Link to="/pickup" className="flex items-center gap-3 p-5 text-xl text-brand-1 font-bold border-b">
              <FaArrowLeft />
              Informasi Customer
            </Link>

            <div className="flex justify-between px-5 pt-5 h-full">
              <div className="w-3/5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2019872.6304964416!2d116.6340022203005!3d-8.589871315279899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dca4d68d22b8d27%3A0x82a1915875a8c41c!2sSumbawa!5e0!3m2!1sen!2sid!4v1701266531972!5m2!1sen!2sid" className="border-0 h-full w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="w-2/5 h-[240px] space-y-3 px-5 overflow-auto">
                <div>
                  <p className="font-bold text-gray-500 text-sm">Nama Customer :</p>
                  <p>Anisa Rahma</p>
                </div>
                <div>
                  <p className="font-bold text-gray-500 text-sm">Nomor Telepon :</p>
                  <p>088712345678</p>
                </div>
                <div>
                  <p className="font-bold text-gray-500 text-sm">Alamat Pemilik :</p>
                  <p>Kel. Batu No.123</p>
                </div>
                <div>
                  <p className="font-bold text-gray-500 text-sm">Jenis layanan yang dibutuhkan :</p>
                  <p>Full pengecekan</p>
                </div>
                <div>
                  <p className="font-bold text-gray-500 text-sm">Informasi terkait kendaraan :</p>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-gray-500 text-sm">Merek / Tipe :</p>
                    <p>Honda / Beat</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-gray-500 text-sm">No. Plat / jenis BBM :</p>
                    <p>A1234 YME / Bensin</p>
                  </div>
                </div>
              </div>
            </div>

            <Input.Textarea className="w-full" placeholder="( Opsional )" readOnly="true" header/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
