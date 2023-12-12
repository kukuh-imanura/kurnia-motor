import Button from "@/components/default/Button";
import Sidebar from "@/components/default/Sidebar";
// import Footer from "@/components/default/Footer"
import Input from "@/components/default/Input";
import Navbar from "@/components/default/Navbar";
import Table from "@/components/default/Table";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function Update() {
  const header = ["", "Layanan", "Satuan", "Harga", "Total"];

  return (
    <div className="bg-surface-1 text-gray-900 flex h-screen">
      <Sidebar />

      <div className="w-5/6">
        <Navbar.Default2
          text={
            <div className="text-center h-[60px] text-2xl font-bold text-gray-900">
              <Link to="/laporan" className="flex items-center gap-5">
                <FaArrowLeft />
                <p className="text-3xl">Tambahkan Data Laporan</p>
              </Link>
            </div>
          }
        />

        <section className="px-20 bg-surface-1">
          <div className="drop-shadow-md">
            <div className="h-32 bg-gray-100 flex-space-around p-8">
              <Input.Default className="bg-dark-100 h-11 rounded-full border-2 text-light-1 rounded-md border-2 placeholder:text-dark-100 placeholder:text-center pt-3 w-32 focus:outline-none" placeholder=".../.../..." />
              <td className="space-x-3 flex justify-end">
                <Button.Default text="Simpan" />
                <Button.Default text="Hapus" />
              </td>
            </div>
            <Table.Form header={header} className="bg-dark-6 text-light-1 h-10" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Update;
