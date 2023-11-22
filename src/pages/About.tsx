import Footer from "@/components/default/Footer"
import Navbar from "@/components/default/Navbar"

function About() {
  return (
    <div className="bg-surface-1">
      <Navbar />
      <div className="py-20 px-32 text-gray-900 space-y-3">
        <p>Selamat datang di website Bengkel Motor Kurnia. Website Bengkel Motor Kurnia dikembangkan khusus untuk memenuhi kebutuhan administratif dan manajemen bengkel motor. Dengan fokus pada efisiensi dan kemudahan penggunaan, kami menyediakan berbagai fitur khusus yang dirancang untuk membantu Anda mengelola operasional bengkel dengan lebih efektif.</p>
        <p>Mari berkenalan dengan fitur-fitur utama di Website Bengkel Motor Kurnia</p>

        <ol className="list-decimal pl-[19.28px]">
          <li>Antrian Online : adalah fitur yang memanajemen proses pengajuan booking online oleh customer untuk melakukan service motor di Bengkel Motor Kurnia.</li>
          <li>Antar jemput motor ke dan di lokasi : yaitu fitur dimana berisi segala hal terkait data dan informasi seperti alamat, kerusakan apa yang perlu diperbaiki dari motor customer.</li>
          <li>Data Customer : merupakan fitur yang disediakan oleh website Bengkel Motor Kurnia untuk mengelolah data dan informasi terkait customer.</li>
          <li>Data Admin : adalah fitur yang mengelolah informasi terkait Admin dari website Bengkel Motor Kurnia.</li>
          <li>Laporan Pembukuan : yaitu fitur yang memgelolah terkait rekap bulanan dan pendapatan yang diperoleh persetiap hari dalam sebulan.</li>
        </ol>
        <p>Website Bengkel Motor Kurnia kini hadir dengan berbagai macam solusi sehingga pemilik Bengkel Motor Kurnia tidak lagi merasa kesulitan dalam mengelolah data dan informasi sehingga kebutuhan administratif dapat termanajemen dengan aman dan teratur.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About