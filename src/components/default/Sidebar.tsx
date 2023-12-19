import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { VscFeedback } from "react-icons/vsc";
import Dropdown from "./Dropdown";
import { FaRegFolderClosed } from "react-icons/fa6";
import { useAuth } from "@/pages/context/autContext";
import { useEffect, useState } from "react";

function Sidebar() {
  const [name, setName] = useState("");
  const [pict, setPict] = useState("");

  const menuLayanan = [
    { text: "Antrian Online", link: "/booking" },
    { text: "Antar Jemput", link: "/pickup" },
    // {text:"Chat Customer", link: "/chat"},
  ];

  const menuInformasi = [
    { text: "Data Customer", link: "/customer" },
    { text: "Data Admin", link: "/admin" },
    { text: "Laporan Pembukuan", link: "/laporan" },
  ];

  const { getUserById } = useAuth();
  useEffect(() => {
    getUserById()
      .then((res) => {
        if (res) {
          setName(res.name);
          setPict(res.pict);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="w-1/6 bg-brand-1 flex flex-col justify-between">
      <div className="w-full bg-surface-invers py-5 text-brand-1 flex flex-col items-center">
        <img src={pict ? pict : "/assets/images/admin/default.jpg"} alt="Foto Admin" className="rounded-full w-[100px] h-[100px]" />
        <p className="text-2xl font-bold mt-3 text-center">Halo {name}</p>
        <Link to="/admin/profile" className="text-sm font-light flex items-center gap-1">
          View Profile
          <HiArrowRight />
        </Link>
      </div>

      <div className="h-full text-gray-100 overflow-auto">
        <Link to="/" className="text-lg font-medium flex gap-3 items-center hover:bg-black/10 px-5 py-3">
          <HiHome size="1.5em" />
          Dashboard
        </Link>

        <Dropdown text="Layanan" icon={<img src="/assets/icons/layanan.png" alt="icon layanan" className="h-[1.5em]" />} menu={menuLayanan} />
        <Dropdown text="Informasi" icon={<FaRegFolderClosed size="1.5em" />} menu={menuInformasi} />

        <Link to="/review" className="text-lg font-medium flex gap-3 items-center hover:bg-black/10 px-5 py-3">
          <VscFeedback size="1.5em" />
          Ulasan
        </Link>
        <Link to="/about" className="text-lg font-medium flex gap-3 items-center hover:bg-black/10 px-5 py-3">
          <HiOutlineInformationCircle size="1.5em" />
          Tentang Kami
        </Link>
      </div>

      <div className="h-fit flex justify-center items-center">
        <img src="/assets/images/logo-white2.png" alt="Logo" className="h-fit" />
      </div>
    </div>
  );
}

export default Sidebar;
