import Input from "@/components/default/Input"
import { FaUser, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>

      <div className="h-screen flex bg-[url('/assets/images/bg-login.png')] bg-cover">
        <div className="w-3/5 h-screen flex justify-center items-center">
          <img src="/assets/images/logo-orange.png" alt="Logo" className="scale-75"/>
        </div>

        <div className="w-2/5 h-screen bg-white/80 flex justify-center items-center">
          <div className="text-gray-900 w-1/2">
            <p className="text-2xl font-bold">Lupa Kata Sandi.</p>
            <p className="mb-2 text-sm">Masukkan username dan email untuk verifikasi</p>
            <form method="post" className="space-y-2">
              <Input.Login placeholder="Username" icon={<FaUser />}/>
              <Input.Login placeholder="Email" type="email" icon={<FaEnvelope />} />

              {/* Link hanya sementara */}
              <Link to="/login">
                <Input.Login value="Kirim" type="submit" className="cursor-pointer mt-2"/>
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* FILTER ORANGE */}
      <div className="filter-overlay bg-brand-1/[14%] fixed top-0 left-0 w-full h-full pointer-events-none"></div>
    </>
    // Buat sebuah filter dengan warna oren transparan untuk menutupi layar
  )
}

export default Login