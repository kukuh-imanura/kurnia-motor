import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar";
import Table from "@/components/default/Table";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function Update() {

  return (
    <div className="bg-surface-1 text-gray-900 flex h-screen">
      <Sidebar />

      <div className="w-5/6">
        <Navbar.Default2
          text={
            <div className="text-center h-[60px] text-2xl font-bold text-gray-900">
              <Link to="/laporan" className="text-3xl flex items-center gap-5">
                <FaArrowLeft />
                Tambahkan Data Laporan
              </Link>
            </div>
          }
        />

        <section className="px-20 bg-surface-1">
          <div className="drop-shadow-md">

            <Table.Form className="bg-dark-6 text-light-1 h-10" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Update;
