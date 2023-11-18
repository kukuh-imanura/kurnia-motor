import Navbar from "@/components/default/Navbar"
import imgMechanic from "../../public/assets/images/mechanic.png"
import Button from "@/components/default/Button"
import Tittle from "@/components/default/Tittle"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Slider from "@/components/default/Slider";
import imgPickup from "../../public/assets/images/pickup/def.png";


function Home() {
  const location = useLocation()
  const id = location.hash.substring(1)

  useEffect(() => {
    const element = document.getElementById(id)

    if (element && location.hash) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }else{
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })

  // PICKUP
  const cardPickup = [
    { img: imgPickup, text: "Honda Beat", btn: "Detail1", link: "/detail" },
    { img: imgPickup, text: "Honda Beat", btn: "Detail2", link: "/detail" },
    { img: imgPickup, text: "Honda Beat", btn: "Detail3", link: "/detail" },
    { img: imgPickup, text: "Honda Beat", btn: "Detail4", link: "/detail" },
    { img: imgPickup, text: "Honda Beat", btn: "Detail5", link: "/detail" },
    { img: imgPickup, text: "Honda Beat", btn: "Detail5", link: "/detail" },
    { img: imgPickup, text: "Honda Beat", btn: "Detail5", link: "/detail" },
  ];

  return (
    <div>
      <Navbar />

      <section id="hero" className="grid-cols-2 h-[558.84px] flex justify-between bg-surface-1 px-20 space-x-20">
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

      <section id="pickup" className="max-w-screen h-fit bg-surface-1 px-20 pt-[80.16px] flex flex-col justify-between items-center gap-10">
        <Tittle text="PERMINTAAN ANTAR JEMPUT"/>

        <div className="px-10 h-full w-full">
          <p className="text-2xl text-gray-900">TERBARU</p>
          <Slider cards={cardPickup}/>
        </div>
      </section>

      <section id="booking" className="h-screen bg-surface-1 px-20 pb-10 pt-[80.16px]">
        <Tittle text="PERMINTAAN BOOKING ONLINE"/>
      </section>

      <section id="review" className="h-screen bg-surface-1 px-20 pb-10 pt-[80.16px]">
        <Tittle text="APA KATA MEREKA?"/>
      </section>
    </div>
  )
}

export default Home