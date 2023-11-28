import Navbar from "@/components/default/Navbar";
import Sidebar from "@/components/default/Sidebar"

function Home() {
 
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar/>

      <div className="w-5/6">
        <Navbar.Default2 text="Dashboard"/>
        <div className="h-[523px] flex justify-center items-center">
          <img src="/assets/images/home-img.png" alt="" className="h-4/5"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
