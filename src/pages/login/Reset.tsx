import Input from "@/components/default/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock, FaLockOpen } from "react-icons/fa6";

type FormValue = {
  password: string,
  confPass: string,
}

function Login() {
  // HANDLE INPUT
  const [password, setPassword] = useState("")
  const [confPass, setConfPass] = useState("")
  const [isPass, setIsPass] = useState(true)
  const [isConfPass, setIsConfPass] = useState(true)

  // HANDLE FORM
  const { register, handleSubmit, formState:{errors} } = useForm<FormValue>();
  const navigate = useNavigate()
  const handleReset = () => {
    if(password !== confPass){
      alert("Password Berbeda")
    } else {
      // alert(`${password}, ${confPass}`)
      navigate("/login")
    }
  }

  return (
    <>
      <div className="h-screen flex bg-[url('/assets/images/bg-login.png')] bg-cover">
        <div className="w-3/5 h-screen flex justify-center items-center">
          <img src="/assets/images/logo-orange.png" alt="Logo" className="scale-75" />
        </div>

        <div className="w-2/5 h-screen bg-white/80 flex justify-center items-center">
          <div className="text-gray-900 w-1/2">
            <p className="text-2xl font-bold">Reset Kata Sandi.</p>
            <p className="mb-2 text-sm">Masukkan kata sandi baru</p>

            <form onSubmit={handleSubmit(handleReset)} className="space-y-2" noValidate>

              <div className="relative rounded-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">{isPass ? <FaLock /> : <FaLockOpen />}</div>
                <input type={isPass ? "password" : "text"} {...register("password", {required:"Masukkan Password"})} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setIsPass(!isPass)}>
                  { isPass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <p className="text-sm text-[#FF0000]">{errors.password?.message}</p>

              <div className="relative rounded-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">{isConfPass ? <FaLock /> : <FaLockOpen />}</div>
                <input type={isConfPass ? "password" : "text"} {...register("confPass", {required:"Masukkan Konfirmasi Password"})} placeholder="Confirm Password" value={confPass} onChange={(e) => setConfPass(e.target.value)} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setIsConfPass(!isConfPass)}>
                  { isConfPass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <p className="text-sm text-[#FF0000]">{errors.confPass?.message}</p>

              <Input.Login value="Reset Password" type="submit" className="cursor-pointer mt-2 w-full bg-brand-1 text-gray-100 font-bold" />
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

export default Login;
