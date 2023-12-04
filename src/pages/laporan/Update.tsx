import Button from "@/components/default/Button"
import Sidebar from "@/components/default/Sidebar"
// import Footer from "@/components/default/Footer"
import Input from "@/components/default/Input"
import Navbar from "@/components/default/Navbar"
import Table from "@/components/default/Table"

function Update() {

  const header = ["", "Layanan", "Satuan", "Harga", "Total"]

  return (
    <div className="bg-surface-1 text-gray-900 flex">
      <Sidebar/>

      <div className="w-full">
        <Navbar.Default2/>
        <section className="p-20 bg-surface-1">
        <div className="text-center h-[60px] text-2xl font-bold text-gray-900">
                  <p>Tambah Data Laporan</p>
                </div>
          {/* <div className="h-10 text-2xl font-bold text-gray-900">
          <p>Tambah Data Laporan</p>
          </div> */}
          <div className="drop-shadow-md">
            <div className="h-32 bg-gray-100 flex-space-around p-8">
              <Input.Default className="bg-dark-100 h-11 rounded-full border-2 text-light-1 rounded-md border-2 placeholder:text-dark-100 placeholder:text-center pt-3 w-32 focus:outline-none" placeholder=".../.../..."/>
              <td className='space-x-3 flex justify-end'>
                  <Button.Default text="Simpan"/>
                  <Button.Default text="Hapus"/>
                </td>
            </div>
          <Table.Form header={header} className="bg-dark-5 text-light-1 h-10"/>

          {/* <div>
          <div className="w-6 h-6 p-1.5 justify-center items-center inline-flex" />
          <div className="w-96 h-14 bg-white" />
          <div className="w-6 h-6 relative" />
          <div className="text-black text-xl">Tambahkan kolom baru</div>
          </div> */}
          
          {/* <div className="mt-10 flex space-x-3 justify-end px-20">
            <Button.Default link="/laporan" text="Simpan" className="w-32"/>
            <Button.Default link="/laporan" text="Batal" className="w-32"/>
          </div> */}
        </div>
      </section>
        {/* <div className="text-center h-[523px] px-10 flex flex-col justify-between">
        <div className="overflow-auto">
          <div className="text-2xl font-bold text-gray-900">
                  <p>LAPORAN PEMBUKUAN</p>
                  <p>BENGKEL MOTOR KUNIA</p>
                </div>

                <td className='space-x-3 mt-10 flex justify-end'>
                <Button.Default text="Tambahkan"/>
                <Button.Default text="Hapus"/>
              </td>
                <div className="font-bold space-x-3 mt-10 flex justify-end">
                  <Link to="update" className="bg-[#20B038] px-10 py-3 rounded">Update</Link>
                  <button className="bg-[#DF1407] px-10 py-3 rounded">Hapus</button>
                </div>

                <Table.Laporan header={header} content={laporan} footer={footer} className="mt-5"/>

                <div className="text-gray-900 flex items-center justify-center space-x-10 mt-10 ">
                  <FaChevronLeft />
                  <p>January 2023</p>
                  <FaChevronRight />
                </div>
          </div>
        </div> */}
      </div>
      
    </div>
  )
  // return (
  //   <div>
  //     <Navbar.Default2 />
  //     <section className="p-20 bg-surface-1">
  //       <p className="text-2xl text-gray-900">UPDATE</p>
  //       <div className="drop-shadow-md">
  //         <div className="h-32 bg-gray-100 mt-2 flex justify-end items-end p-8">
  //           <Input.Default className="bg-brand-1 rounded-md text-gray-100 placeholder:text-gray-100 placeholder:text-center pt-3 w-32 focus:outline-none" placeholder=".../.../..."/>
  //         </div>
  //         <Table.Form header={header}/>
  //         <div className="mt-10 flex space-x-3 justify-end px-20">
  //           <Button.Default link="/laporan" text="Simpan" className="w-32"/>
  //           <Button.Default link="/laporan" text="Batal" className="w-32"/>
  //         </div>
  //       </div>
  //     </section>

  //     <Footer />
  //   </div>
  // )
}

export default Update