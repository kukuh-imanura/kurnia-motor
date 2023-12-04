import Navbar from "@/components/default/Navbar"
import Sidebar from "@/components/default/Sidebar"
import { FaEdit } from "react-icons/fa";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import Input from "@/components/default/Input";
import Button from "@/components/default/Button";
import { useState } from "react";

function Profile() {

  const [display, setDisplay] = useState("hidden")
  const handleOverlayClick = (event:any) => {
    // Menutup popup hanya jika event terjadi pada elemen overlay (filter-overlay)
    if (event.target.classList.contains('filter-overlay')) {
      setDisplay("hidden")
    }
  };

  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6 flex flex-col justify-between">
        <Navbar.Default2 text="Profile Admin" />

        <div className="h-full px-10 pb-10 flex gap-5 flex flex-col">
          <div className="relative w-full h-[216px] bg-surface-invers rounded-t-xl">
            <div className="absolute left-10 inset-y-1/2 transform -translate-y-1/2 z-10 rounded-full border-2 border-brand-1 w-fit h-fit p-3">
              <img src="/assets/images/admin/adelia.png" alt="Foto Admin" className="rounded-full" />
            </div>

            <div className="absolute bottom-0 left-0 bg-surface-1 w-full h-[108px] py-10 flex justify-end">
              <button onClick={() => setDisplay("block")} className="p-5 w-fit text-gray-100 bg-brand-1 flex items-center rounded">
                <FaEdit className="mr-2"/> 
                Edit Profile             
              </button> 
            </div>
          </div>

          <div className="w-full px-10">
            <p className="text-2xl font-bold mb-5">Adel Mali</p>
            <table className="space-y-3 w-1/2 h-full">
              <tr>
                <td className="flex items-center">
                  <FaRegEnvelope className="mr-3 text-brand-1"/>
                  Email
                </td>
                <td>:</td>
                <td className="font-bold">adel@gmail.com</td>
              </tr>
              <tr>
                <td className="flex items-center">
                  <FaRegUser className="mr-3 text-brand-1"/>
                  Username
                </td>
                <td>:</td>
                <td className="font-bold">adelamali</td>
              </tr>
              <tr>
                <td className="flex items-center">
                  <MdLockOutline className="mr-3 text-brand-1"/>
                  Password
                </td>
                <td>:</td>
                <td className="font-bold">733uutvne7</td>
              </tr>
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
            <FaXmark onClick={() => setDisplay("hidden")} className="cursor-pointer"/>
          </div>

          <div className="flex px-10 pb-7">
            <div className="flex flex-col gap-5">
              <Input.Default type="text" value="Adel Mali" label="Nama" className="border border-gray-900 rounded-md py-2 px-5"/>
              <Input.Default type="email" value="adel@gmail.com" label="Email" className="border border-gray-900 rounded-md py-2 px-5"/>
              <Input.Default type="text" value="adelmali" label="Username" className="border border-gray-900 rounded-md py-2 px-5"/>
              <Input.Default type="password" value="733uutvne7" label="Password" className="border border-gray-900 rounded-md py-2 px-5"/>
            </div>
            <div className="pl-10 flex flex-col items-center">
              <label htmlFor="#" className="mb-2">Foto Profile</label>
              <img src="/assets/images/admin/adelia.png" alt="Foto Admin" className="rounded-full border-2 border-brand-1" />
            </div>
          </div>

          <div className="flex items-center justify-center pb-7">
            <Button.Default text="Submit" className="w-fit" onClick={() => setDisplay("hidden")}/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile