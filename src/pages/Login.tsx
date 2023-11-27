import Input from "@/components/default/Input";
import logo from "/assets/images/Kurnia_Motor_jingga-removebg-preview.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-brand-1 h-screen w-screen flex items-center relative drop-shadow">
      <div className="h-screen w-2/3 flex items-center justify-center bg-[url('../../public/assets/images/bg-login.png')]">
        <img src={logo} className="shadow-md" />
      </div>

      <form action="" method="post" className="absolute right-32 w-1/3 py-20 flex flex-col items-center bg-white/80 text-gray-900">
        <div className="w-2/3">
          <p className="font-bold text-2xl">Login</p>
          <p>Masuk ke akun anda</p>
        </div>
        <br />

        <div className="w-2/3 space-y-2">
          <Input.Login type="text" placeholder="Username" />
          <Input.Login type="password" placeholder="Password" />
          <Link to="/recovery" className="text-sm text-right block">
            Lupa password?
          </Link>
        </div>

        <Link to="/" type="submit" className="px-5 py-1 bg-brand-1 text-gray-100 text-sm mt-5">
          Masuk
        </Link>
      </form>
    </div>
  );
}

export default Login;
