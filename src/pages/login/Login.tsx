import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/autContext";
import { FaEye, FaEyeSlash, FaLock, FaLockOpen } from "react-icons/fa";

function Login() {
  const { login } = useAuth();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(inputs.username, inputs.password);
      // console.log("Login response:", res);
      // SET TOKEN
      // localStorage.setItem("token", res.data.uuid);
      navigate("/");
    } catch (err: any) {
      setErr(err.response.data);
    }
  };
  const [isPass, setIsPass] = useState(true);

  return (
    <>
      <div className="h-screen flex bg-[url('/assets/images/bg-login.png')] bg-cover">
        <div className="w-3/5 h-screen flex justify-center items-center">
          <img src="/assets/images/logo-orange.png" alt="Logo" className="scale-75" />
        </div>

        <div className="w-2/5 h-screen bg-white/80 flex justify-center items-center">
          <div className="text-gray-900 w-1/2">
            <p className="text-2xl font-bold">Login.</p>
            <p className="mb-2 text-sm">Masuk ke akun anda</p>

            <form className="space-y-2" onSubmit={handleLogin}>
              <div className="relative rounded-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaUser />
                </div>
                <input type="text" placeholder="Username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
              </div>

              <div className="relative rounded-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">{isPass ? <FaLock /> : <FaLockOpen />}</div>
                <input type={isPass ? "password" : "text"} placeholder="Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setIsPass(!isPass)}>
                  {isPass ? <FaEyeSlash /> : <FaEye />}
                </div>

                <p className="text-red-500">{err && err}</p>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"></div>
              </div>

              <Link to="/login/recovery" className="italic text-sm text-right block pb-2">
                Lupa password
              </Link>

              <Button className="cursor-pointer w-full bg-brand-1 text-gray-100 font-bold block  py-1 pl-10 pr-10  text-sm placeholder:text-gray-900 border rounded-full focus:outline-none">Masuk</Button>
            </form>
          </div>
        </div>
      </div>

      {/* FILTER ORANGE */}
      <div className="filter-overlay bg-brand-1/[14%] fixed top-0 left-0 w-full h-full pointer-events-none "></div>
    </>
  );
}

export default Login;

// import Input from "@/components/default/Input";
// import axios from "axios";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaUser, FaEye, FaEyeSlash, FaLock, FaLockOpen } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";

// type FormValue = {
//   username: string;
//   password: string;
// };

// function Login() {
//   // HANDLE INPUT
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isPass, setIsPass] = useState(true);

//   // HANDLE FORM
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValue>();
//   const navigate = useNavigate();

//   const handleLogin = async (e: any) => {
//     e.preventDefault;

//     try {
//       const res = await axios.post("https://bengkel-api-ruby.vercel.app/api/auth/loginAdmin", {
//         username,
//         password,
//       });

//       // SET TOKEN
//       localStorage.setItem("token", res.data.uuid);
//       navigate("/");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         alert(error.response?.data);
//       } else {
//         alert(error);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="h-screen flex bg-[url('/assets/images/bg-login.png')] bg-cover">
//         <div className="w-3/5 h-screen flex justify-center items-center">
//           <img src="/assets/images/logo-orange.png" alt="Logo" className="scale-75" />
//         </div>

//         <div className="w-2/5 h-screen bg-white/80 flex justify-center items-center">
//           <div className="text-gray-900 w-1/2">
//             <p className="text-2xl font-bold">Login.</p>
//             <p className="mb-2 text-sm">Masuk ke akun anda</p>

//             <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
//               <div className="relative rounded-full">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                   <FaUser />
//                 </div>
//                 <input type="text" {...register("username", { required: "Masukkan Username" })} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
//               </div>
//               <p className="text-sm text-[#FF0000]">{errors.username?.message}</p>
//               <div className="relative rounded-full">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">{isPass ? <FaLock /> : <FaLockOpen />}</div>
//                 <input type={isPass ? "password" : "text"} {...register("password", { required: "Masukkan Password" })} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={` block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full border-gray-900 focus:outline-none`} />
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setIsPass(!isPass)}>
//                   {isPass ? <FaEyeSlash /> : <FaEye />}
//                 </div>
//               </div>
//               <p className="text-sm text-[#FF0000]">{errors.password?.message}</p>

//               <Link to="/login/recovery" className="italic text-sm text-right block pb-2">
//                 Lupa password
//               </Link>
//               <Input.Login value="Masuk" type="submit" className="cursor-pointer w-full bg-brand-1 text-gray-100 font-bold" />
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* FILTER ORANGE */}
//       <div className="filter-overlay bg-brand-1/[14%] fixed top-0 left-0 w-full h-full pointer-events-none"></div>
//     </>
//     // Buat sebuah filter dengan warna oren transparan untuk menutupi layar
//   );
// }

// export default Login;
