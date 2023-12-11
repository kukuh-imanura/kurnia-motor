import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserCustomer = () => {
  const [name, setName] = useState("");
  const [tlp, setTlp] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/registerCustomer", {
        name,
        tlp,
        email,
        username,
        password,
        confPassword,
      });
      navigate("/customer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <section className=" bg-surface-2 h-screen px-36 ">
        <div className="grid grid-cols-1  place-items-center">
          <div className="w-1/2">
            <form onSubmit={saveUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nama
                </label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name" aria-required>
                  No. Hp
                </label>
                <input type="number" id="tlp" value={tlp} onChange={(e) => setTlp(e.target.value)} placeholder="No. Hp" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " onWheel={(event) => event.currentTarget.blur()} />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Username
                </label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Password
                </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Password
                </label>
                <input type="password" id="password" value={confPassword} onChange={(e) => setconfPassword(e.target.value)} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddUserCustomer;
