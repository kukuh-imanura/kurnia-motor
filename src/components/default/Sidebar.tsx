import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { VscFeedback } from "react-icons/vsc";

function Sidebar() {
  return (
    <div className="h-full w-1/6 bg-brand-1 flex flex-col justify-between">
      <div className="w-full bg-surface-invers py-5 text-brand-1 flex flex-col items-center">
        <img src="/assets/images/admin/adelia.png" alt="Foto Admin" className="rounded-full" />
        <p className="text-2xl font-bold mt-3">Halo Adel</p>
        <Link to="/admin/profile" className="text-sm font-light flex items-center gap-1">
          View Profile
          <HiArrowRight />
        </Link>
      </div>

      <div className="h-full p-5 text-gray-100 space-y-3">
        <Link to="/" className="text-lg font-medium flex gap-3 items-center">
          <HiHome size="1.5em" />
          Dashboard
        </Link>

        {/* NOT FINISHED */}
        <Link to="/" className="text-lg font-medium flex gap-3 items-center">
          <HiHome size="1.5em" />
          Dashboard
        </Link>
        <Link to="/" className="text-lg font-medium flex gap-3 items-center">
          <HiHome size="1.5em" />
          Dashboard
        </Link>

        <Link to="/review" className="text-lg font-medium flex gap-3 items-center">
          <VscFeedback size="1.5em" />
          Ulasan
        </Link>
        <Link to="/about" className="text-lg font-medium flex gap-3 items-center">
          <HiOutlineInformationCircle size="1.5em" />
          Tentang Kami
        </Link>
      </div>

      <img src="/assets/images/logo-white.png" alt="Logo" />
    </div>
  );
}

export default Sidebar;
