import Navbar from "@/components/default/Navbar"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/components/default/Footer";

function Profile() {
  return (
    <div>
      <Navbar />
      <div>
        <h3>Admin</h3>
        <div>
          <Avatar>
          <AvatarImage src="/public/assets/images/profile/admin1.png" />
          </Avatar>
        </div>
      
      </div>
      <Footer />
    </div>
  )
}

export default Profile