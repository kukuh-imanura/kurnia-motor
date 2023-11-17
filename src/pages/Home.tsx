import Navbar from "@/components/default/Navbar"
import imgMechanic from "../../public/assets/images/mechanic.png"
import Button from "@/components/default/Button"

function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero" className="grid-cols-2 h-hero flex justify-between bg-surface-1 px-20 space-x-20">
        <div className="w-3/5 flex justify-center">
          <img src={imgMechanic} alt="Mechanic.png" className="h-full"/>
        </div>

        <div className="py-10 w-2/5 h-full flex flex-col justify-between space-y-5">
          <Button.Card text="ANTRIAN ONLINE" link="/#booking" />
          <Button.Card text="ANTAR JEMPUT" link="/#pickup" />
          <Button.Card text="DATA CUSTOMER" link="/customer" />
          <Button.Card text="DATA ADMIN" link="/admin" />
          <Button.Card text="LAPORAN PEMBUKUAN" link="/laporan" />
        </div>
      </section>

      <section id="booking" className="h-screen bg-surface-1 px-20 my-20">

      </section>
    </div>
  )
}

export default Home