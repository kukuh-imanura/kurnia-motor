import Input from "@/components/default/Input"
import Navbar from "@/components/default/Navbar"
import Sidebar from "@/components/default/Sidebar"
import { HiPaperAirplane } from "react-icons/hi";

function Chat() {
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6 flex flex-col justify-between">
        <Navbar.Default2 text="Chat Customer" />

        <div className="h-full px-10 flex gap-5">
          <div className="w-2/5 flex flex-col gap-3">
            <div className="bg-surface-invers p-5 rounded-t-md h-[80px] flex items-center">
              <p className="font-bold text-gray-100">Chat</p>
            </div>

            <Input.Search placeholder="Search" icon="left" className="border-0 outline-0 shadow-md py-5 rounded-md bg-white" />

            <div className="h-[322px] bg-white rounded-md overflow-auto">
              <div className="p-5 rounded-t-md flex gap-5 items-center">
                <img src="/assets/images/admin/adelia.png" alt="Foto Profil" className="h-10 rounded-full" />

                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-bold text-gray-900">Mughni Abdillah</p>
                    <p className="text-brand-1">10:00</p>
                  </div>
                  <p className="text-gray-900">Baik Kak, Terimakasih</p>
                </div>
              </div>
              <div className="p-5 rounded-t-md flex gap-5 items-center border-y border-surface-1">
                <img src="/assets/images/admin/adelia.png" alt="Foto Profil" className="h-10 rounded-full" />

                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-bold text-gray-900">Mughni Abdillah</p>
                    <p className="text-brand-1">10:00</p>
                  </div>
                  <p className="text-gray-900">Baik Kak, Terimakasih</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/5 flex flex-col">
            <div className="bg-surface-invers p-5 rounded-t-md flex gap-5 items-center">
              <img src="/assets/images/admin/adelia.png" alt="Foto Profil" className="h-10 rounded-full" />
              <p className="font-bold text-gray-100">Mughni Abdillah</p>
            </div>

            <div className="bg-white rounded-b-md h-full px-5 pb-5 flex flex-col justify-between">
              <div className="h-[335px] flex flex-col gap-3 overflow-auto py-3">
                
                <div className="bg-surface-1 mr-10 px-5 py-2 rounded-t-3xl rounded-br-3xl">
                  <p>Halo kak, saya ingin memesan layanan perawatan rutin untuk motor saya. Bagaimana cara melakukannya?</p>
                  <p className="text-sm text-brand-1 text-right">10:00</p>
                </div>
                <div className="bg-brand-1 text-gray-100 ml-10 px-5 py-2 rounded-t-3xl rounded-bl-3xl">
                  <p>Hai! Anda bisa memesan layanan perawatan melalui aplikasi kami. Mohon berikan informasi tentang jenis layanan yang Anda butuhkan dan kapan Anda ingin membuat janji.</p>
                  <p className="text-sm text-gray-100 text-right">10:00</p>
                </div>
                <div className="bg-surface-1 mr-10 px-5 py-2 rounded-t-3xl rounded-br-3xl">
                  <p>Apakah saya bisa mendapatkan estimasi biaya untuk penggantian rem motor saya?</p>
                  <p className="text-sm text-brand-1 text-right">10:00</p>
                </div>
                <div className="bg-brand-1 text-gray-100 ml-10 px-5 py-2 rounded-t-3xl rounded-bl-3xl">
                  <p>Tentu kak, kami dapat membantu Anda dengan itu. Mohon berikan beberapa detail tambahan, seperti merk dan model mobil Anda, sehingga kami dapat memberikan estimasi yang lebih akurat.</p>
                  <p className="text-sm text-gray-100 text-right">10:00</p>
                </div>
                <div className="bg-surface-1 mr-10 px-5 py-2 rounded-t-3xl rounded-br-3xl">
                  <p>Baik kak, terimakasih!</p>
                  <p className="text-sm text-brand-1 text-right">10:00</p>
                </div>

              </div>

              <div className="flex gap-5 justify-between pt-5">
                <Input.Default placeholder="ketik pesan" className="shadow-md rounded-md w-[472px] px-5 py-3" />
                <div className="h-full w-[48px] bg-brand-1 rounded-full flex justify-center items-center">
                  <HiPaperAirplane className="text-gray-100 rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat