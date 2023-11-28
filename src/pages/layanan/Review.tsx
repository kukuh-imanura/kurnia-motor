import Card from "@/components/default/Card"
import Navbar from "@/components/default/Navbar"
import Pagination from "@/components/default/Pagination"
import Sidebar from "@/components/default/Sidebar"

function Review() {
  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar/>

      <div className="w-5/6 overflow-auto">
        <Navbar.Default2 text="Ulasan" input/>

        <div className="px-20">
          <div className="grid grid-cols-2 gap-5">
            <Card.Review />
            <Card.Review />
            <Card.Review />
            <Card.Review />
          </div>

          <Pagination />
        </div>

      </div>
    </div>
  )
}

export default Review