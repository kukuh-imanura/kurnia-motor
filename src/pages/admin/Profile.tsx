import Navbar from "@/components/default/Navbar";
import Sidebar from "@/components/default/Sidebar";
import { FaEdit } from "react-icons/fa";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
// import { MdLockOutline } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import Input from "@/components/default/Input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/autContext";
import axios from "axios";

type FormValue = {
  name: string;
  email: string;
  username: string;
  password: string;
};

function Profile() {
  const [pictUrl, setPictUrl] = useState("" || "/assets/images/admin/default.jpg");
  // HANDLE POPUP
  const [display, setDisplay] = useState("hidden");
  const handleOverlayClick = (event: any) => {
    // Menutup popup hanya jika event terjadi pada elemen overlay (filter-overlay)
    if (event.target.classList.contains("filter-overlay")) {
      setDisplay("hidden");
    }
  };

  // HANDLE INPUT
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [password, setPassword] = useState("");

  // HANDLE FORM
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  // HANDLE UPDATE
  // const updateProfile = () => {
  //   alert("Data di Update");
  //   setDisplay("hidden");
  // };

  const { currentUser, getUserById } = useAuth();

  useEffect(() => {
    getUserById()
      .then((res) => {
        if (res) {
          setName(res.name);
          setEmail(res.email);
          setUsername(res.username);
          // console.log({ data: res });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const updateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`https://bengkel-api-ruby.vercel.app/api/admin/${currentUser?.id_admin}`, {
        name,
        email,
        username,
      });
      alert("Data di Update");
      setDisplay("hidden");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6 flex flex-col justify-between">
        <Navbar.Default2 text="Profile Admin" />

        <div className="h-full px-10 pb-10  gap-5 flex flex-col">
          <div className="relative w-full h-[216px] bg-surface-invers rounded-t-xl">
            <div className="absolute left-10 inset-y-1/2 transform -translate-y-1/2 z-10 rounded-full border-2 border-brand-1 w-fit h-fit p-3">
              <img src={pictUrl} alt="Foto Admin" className="rounded-full w-[100px] h-[100px]" />
            </div>

            <div className="absolute bottom-0 left-0 bg-surface-1 w-full h-[108px] py-10 flex justify-end">
              <button onClick={() => setDisplay("block")} className="p-5 w-fit text-gray-100 bg-brand-1 flex items-center rounded">
                <FaEdit className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>

          <div className="w-full px-10">
            <p className="text-2xl font-bold mb-5">{name}</p>
            <table className="space-y-3 w-1/2 h-full">
              <tbody>
                <tr>
                  <td className="flex items-center pt-7">
                    <FaRegEnvelope className="mr-3 text-brand-1" />
                    Email
                  </td>
                  <td>:</td>
                  <td className="font-bold ">{email}</td>
                </tr>
                <tr>
                  <td className="flex items-center pt-7 ">
                    <FaRegUser className="mr-3 text-brand-1" />
                    Username
                  </td>
                  <td>:</td>
                  <td className="font-bold ">{username}</td>
                </tr>
                {/* <tr>
                  <td className="flex items-center">
                    <MdLockOutline className="mr-3 text-brand-1" />
                    Password
                  </td>
                  <td>:</td>
                  <td className="font-bold">{password}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* POPUP */}
      <div onClick={handleOverlayClick} className={` ${display} filter-overlay bg-black/50 z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center`}>
        {/* CARD */}
        <div className="bg-white shadow-md rounded-xl h-fit w-fit space-y-5">
          <div className="px-10 py-7 flex items-center justify-between text-brand-1 text-2xl font-bold border-b-2">
            <p>Edit Profile</p>
            <FaXmark onClick={() => setDisplay("hidden")} className="cursor-pointer" />
          </div>

          <form onSubmit={updateUser} className="px-10 pb-7">
            <div className="flex">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2">
                    Nama :
                  </label>
                  <input id="name" type="text" {...register("name", { required: "Masukkan Nama" })} value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-900 rounded-md py-2 px-5 focus:outline-none" />
                  <p className="text-sm text-[#FF0000]">{errors.name?.message}</p>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2">
                    Email :
                  </label>
                  <input id="email" type="email" {...register("email", { required: "Masukkan Email" })} value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-900 rounded-md py-2 px-5 focus:outline-none" />
                  <p className="text-sm text-[#FF0000]">{errors.email?.message}</p>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username" className="mb-2">
                    Username :
                  </label>
                  <input id="username" type="text" {...register("username", { required: "Masukkan Username" })} value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-900 rounded-md py-2 px-5 focus:outline-none" />
                  <p className="text-sm text-[#FF0000]">{errors.username?.message}</p>
                </div>
                {/* <div className="flex flex-col">
                  <label htmlFor="pass" className="mb-2">
                    Password :
                  </label>
                  <input id="pass" type="password" {...register("password", { required: "Masukkan Password" })} value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-900 rounded-md py-2 px-5 focus:outline-none" />
                  <p className="text-sm text-[#FF0000]">{errors.password?.message}</p>
                </div> */}
              </div>
              <div className="pl-10 flex flex-col items-center">
                <p className="mb-2">Foto Profile</p>
                <img id="pict" src={pictUrl} alt="Foto Admin" className="rounded-full border-2 border-brand-1 w-[100px] h-[100px]" />
              </div>
            </div>

            <div className="flex items-center justify-center pb-7 mt-5">
              {/* <Button.Default text="Simpan" className="w-fit"/> */}
              <Input.Login value="Simpan" type="submit" className="cursor-pointer px-10 h-11 w-fit text-[#20B038] font-bold border-2 border-[#20B038] hover:bg-[#20B038] hover:text-gray-100" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
