import Footer from "@/components/default/Footer"
import Input from "@/components/default/Input"
import Navbar from "@/components/default/Navbar"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function Detail() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="bg-surface-1">
      <Navbar />
      <div id="form" className="mx-20 my-10 bg-brand-1 p-10 rounded-md">
        <Link to="/#pickup" className="font-bold">KEMBALI</Link>

        {/* TODO : BackEnd, mengambil data dari card */}
        <form action="" method="post" className="mt-10 px-20 pb-10 space-y-5">
          <Input.Disabled label="Nama Customer" placeholder="Mr. X"/>
          <Input.Disabled label="Nomor Telepon" placeholder="0887-222-123-3212"/>
          <Input.Disabled label="Alamat Pemilik" placeholder="Kel. Batu no. 123"/>
          <Input.Disabled label="Jenis Layanan yang Dibutuhkan" placeholder="Full Pengecekan"/>
          <div className="grid grid-cols-2 gap-5">
            <Input.Disabled label="Merk Motor" placeholder="Honda"/>
            <Input.Disabled label="Tipe Motor" placeholder="Beat"/>
            <Input.Disabled label="No. Plat" placeholder="A 1234 YME"/>
            <Input.Disabled label="Jenis BBM" placeholder="Bensin"/>
            <Input.Disabled label="Tanggal Pemesanan" placeholder="01 - 01 - 2023"/>
            <Input.Disabled label="Waktu Pemesanan" placeholder="10.15"/>
          </div>
          <Input.Disabled type="text" label="Catatan (Opsional)" className="h-20"/>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Detail