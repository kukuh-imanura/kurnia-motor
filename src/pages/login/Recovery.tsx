import Input from "@/components/default/Input"
import { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Login() {
  
  // HANDLE INPUT
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const sendMail = () => {
    // DISESUAIKAN DI BACKEND
    alert(`Username : ${username}, Email : ${email}`)
    navigate('/login');
  }

  return (
    <>
      <div className="h-screen flex bg-[url('/assets/images/bg-login.png')] bg-cover">
        <div className="w-3/5 h-screen flex justify-center items-center">
          <img src="/assets/images/logo-orange.png" alt="Logo" className="scale-75" />
        </div>

        <div className="w-2/5 h-screen bg-white/80 flex justify-center items-center">
          <div className="text-gray-900 w-1/2">
            <p className="text-2xl font-bold">Lupa Kata Sandi.</p>
            <p className="mb-2 text-sm">Masukkan username dan email untuk verifikasi</p>

            <form onSubmit={sendMail} className="space-y-2">
              <Input.Login type="text" name="" placeholder="Username" value={username} onchange={(e:any) => setUsername(e.target.value)} icon={<FaUser />}/>
              <Input.Login type="email" name="" placeholder="Email" value={email} onchange={(e:any) => setEmail(e.target.value)} icon={<FaEnvelope />}/>
              <Input.Login value="Kirim" type="submit" className="cursor-pointer mt-2" />
            </form>

          </div>
        </div>
      </div>

      {/* FILTER ORANGE */}
      <div className="filter-overlay bg-brand-1/[14%] fixed top-0 left-0 w-full h-full pointer-events-none"></div>
    </>
    // Buat sebuah filter dengan warna oren transparan untuk menutupi layar
  );
}

export default Login