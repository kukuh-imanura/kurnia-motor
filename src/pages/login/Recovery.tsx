import Input from "@/components/default/Input"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username:string,
  email:string,
}

function Login() {
  
  // HANDLE INPUT
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // HANDLE FORM
  const {register, handleSubmit, formState:{errors}} = useForm<FormValues>()

  // HANDLE RECOVERY
  const navigate = useNavigate()
  const  sendMail = () => {
    // HANDLE BACKEND
    // alert(`Username : ${username}, Email : ${email}`)
    navigate("/login")
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

            <form onSubmit={handleSubmit(sendMail)} className="space-y-2">

              <div className="relative rounded-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><FaUser /></div>
                <input type="text" {...register("username", {required:"Masukkan Username"})} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
              </div>
              <p className="text-sm text-[#FF0000]">{errors.username?.message}</p>
              <div className="relative rounded-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><FaEnvelope /></div>
                <input type="email" {...register("email", {required:"Masukkan Email"})} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
              </div>
              <p className="text-sm text-[#FF0000]">{errors.email?.message}</p>

              <Input.Login value="Kirim" type="submit" className="cursor-pointer mt-2 w-full bg-brand-1 text-gray-100 font-bold" />
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