import Navbar from "@/components/default/Navbar"
import imgMechanic from "../../public/assets/images/mechanic.png"
import Button from "@/components/default/Button"
import Tittle from "@/components/default/Tittle"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Slider from "@/components/default/Slider";
import Footer from "@/components/default/Footer";

// TESTER, 
import imgPickup from "../../public/assets/images/pickup/def.png";
import imgBooking from "../../public/assets/images/booking/def.png";
import review1 from "../../public/assets/images/review/1.png";
import review2 from "../../public/assets/images/review/2.png";
import review3 from "../../public/assets/images/review/3.png";


function Home() {
  // HANDLE NAVIGASI
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
  const date = new Date()
  const today = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  const cardPickup = [
    { id: 1, img: imgPickup, text: "Honda Beat", btn: "Detail1", link: "/detail", status: "waiting", date: today},
    { id: 2, img: imgPickup, text: "Honda Beat", btn: "Detail2", link: "/detail", status: "waiting", date: today},
    { id: 3, img: imgPickup, text: "Honda Beat", btn: "Detail3", link: "/detail", status: "waiting", date: today},
    { id: 4, img: imgPickup, text: "Honda Beat", btn: "Detail4", link: "/detail", status: "waiting", date: today},
    { id: 5, img: imgPickup, text: "Honda Beat", btn: "Detail5", link: "/detail", status: "waiting", date: today},
    { id: 6, img: imgPickup, text: "Honda Beat", btn: "Detail5", link: "/detail", status: "waiting", date: today},
    { id: 7, img: imgPickup, text: "Honda Beat", btn: "Detail5", link: "/detail", status: "waiting", date: today},
  ];

  // BOOKING
  const cardBooking = [
    { id: 1, img: imgBooking, text: "Mr. X", status: "waiting", date: today},
    { id: 2, img: imgBooking, text: "Mr. Y", status: "waiting", date: today},
    { id: 3, img: imgBooking, text: "Mr. Z", status: "waiting", date: today},
    { id: 4, img: imgBooking, text: "Mr. A", status: "waiting", date: today},
    { id: 5, img: imgBooking, text: "Mr. B", status: "waiting", date: today},
    { id: 6, img: imgBooking, text: "Mr. C", status: "waiting", date: today},
    { id: 7, img: imgBooking, text: "Mr. D", status: "waiting", date: today},
  ];
  
  // ULASAN
  const cardReview = [
    { id: 1, date: "18-11-2023", time: "11:30", img: review1, star:5, text: "Pelayanan sangat profesional dan memuaskan."},
    { id: 2, date: "19-11-2023", time: "10:30", img: review2, star:5, text: "Bengkel ini memberikan kemudahan, dalam melakukan servis. tak perlu pergi ke bengkel cukup kontak dan mereka bisa datang ke rumah."},
    { id: 3, date: "18-11-2023", time: "10:30", img: review3, star:5, text: "Tak perlu repot dan tak perlu antri bengkel ini memberikan kemudahan. servis kendaraan dan harga terjangkau."},
    { id: 4, date: "20-11-2023", time: "11:30", img: review2, star:5, text: "Pelayanan sangat profesional dan memuaskan."},
    { id: 5, date: "20-11-2023", time: "10:30", img: review1, star:5, text: "Pelayanan sangat profesional dan memuaskan."},
    { id: 6, date: today, time: "11:30", img: review2, star:5, text: "Pelayanan sangat profesional dan memuaskan."},
    { id: 7, date: today, time: "10:30", img: review3, star:5, text: "Pelayanan sangat profesional dan memuaskan."},
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

      <section id="pickup" className="max-w-screen h-fit bg-surface-1 px-20 pt-nav-h flex flex-col justify-between items-center gap-10">
        <Tittle text="PERMINTAAN ANTAR JEMPUT"/>

        <div className="px-10 h-full w-full">
          <p className="text-2xl text-gray-900">TERBARU</p>
          <Slider.Action cards={cardPickup}/>
        </div>
      </section>

      <section id="booking" className="max-w-screen h-fit bg-surface-1 px-20 pt-nav-h flex flex-col justify-between items-center gap-10">
        <Tittle text="PERMINTAAN BOOKING ONLINE"/>

        <div className="px-10 h-full w-full">
          <p className="text-2xl text-gray-900">TERBARU</p>
          <Slider.Action cards={cardBooking}/>
        </div>
      </section>

      <section id="review" className="pb-10 max-w-screen h-fit bg-surface-1 px-20 pt-nav-h flex flex-col justify-between items-center gap-10">
        <Tittle text="APA KATA MEREKA?"/>

        <div className="px-10 h-full w-full">
          <p className="text-2xl text-gray-900">TERBARU</p>
          <Slider.Review cards={cardReview}/>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home