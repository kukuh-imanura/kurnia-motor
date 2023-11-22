import Footer from "@/components/default/Footer"
import Input from "@/components/default/Input"
import Navbar from "@/components/default/Navbar"
import Table from "@/components/default/Table"

function Update() {

  const header = ["", "Layanan", "Satuan", "Harga", "Total"]

  return (
    <div>
      <Navbar />
      <section className="p-20 bg-surface-1">
        <p className="text-2xl text-gray-900">UPDATE</p>
        <div className="drop-shadow-md">
          <div className="h-32 bg-gray-100 mt-2 flex justify-end items-end p-8">
            <Input.Default className="bg-brand-1 rounded-md text-gray-100 placeholder:text-gray-100 placeholder:text-center pt-3 w-32 focus:outline-none" placeholder=".../.../..."/>
          </div>
          <Table.Form header={header}/>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Update