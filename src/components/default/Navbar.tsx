import logo from '../../../public/assets/images/logo-orange.png'

function Navbar() {
  return (
    <div className="text-black py-3 px-10 flex justify-between items-center" style={{backgroundColor : '#FFEDD3'}}>
      <img src={logo} alt="" className='w-44'/>

      <div className='space-x-10'>
        <a href="" className='font-bold' style={{color : '#F18805'}}>Beranda</a>
        <a href="" className=''>Layanan</a>
        <a href="" className=''>Tentang Kami</a>
      </div>

      <button className='px-10 h-11 text-white rounded font-bold' style={{backgroundColor : '#F18805'}}>Keluar</button>
    </div>
  )
}

export default Navbar