import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

// export default function Dropdown() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className={`w-28 text-center inline-flex w-full justify-center gap-x-1.5 px-3 py-2 hover:font-bold hover:text-brand-1 ${useLocation().pathname === "/customer" || useLocation().pathname === "/admin" || useLocation().pathname === "/laporan" || useLocation().pathname === "/detail" || useLocation().pathname === "/laporan/update" ? 'font-bold text-brand-1' : ''}`}>Layanan</Menu.Button>
//       </div>

//       <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
//         <Menu.Items className="absolute z-10 mt-2 w-56 shadow-2xl bg-surface-2">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <Link to="/#booking" className={`block px-4 py-2 text-sm ${active ? "text-brand-1 font-bold" : "text-gray-900"}`}>
//                   Antrian Online
//                 </Link>
//               )}
//             </Menu.Item>

//             <Menu.Item>
//               {({ active }) => (
//                 <Link to="/#pickup" className={`block px-4 py-2 text-sm ${active ? "text-brand-1 font-bold" : "text-gray-900"}`}>
//                   Antar Jemput
//                 </Link>
//               )}
//             </Menu.Item>

//             <Menu.Item>
//               {({ active }) => (
//                 <Link to="/customer" className={`block px-4 py-2 text-sm ${active ? "text-brand-1 font-bold" : "text-gray-900"}`}>
//                   Data Customer
//                 </Link>
//               )}
//             </Menu.Item>

//             <Menu.Item>
//               {({ active }) => (
//                 <Link to="/admin" className={`block px-4 py-2 text-sm ${active ? "text-brand-1 font-bold" : "text-gray-900"}`}>
//                   Data Admin
//                 </Link>
//               )}
//             </Menu.Item>

//             <Menu.Item>
//               {({ active }) => (
//                 <Link to="/chat" className={`block px-4 py-2 text-sm ${active ? "text-brand-1 font-bold" : "text-gray-900"}`}>
//                   Chat Customer
//                 </Link>
//               )}
//             </Menu.Item>

//             <Menu.Item>
//               {({ active }) => (
//                 <Link to="/laporan" className={`block px-4 py-2 text-sm ${active ? "text-brand-1 font-bold" : "text-gray-900"}`}>
//                   Laporan Pembukuan
//                 </Link>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }

export default function Dropdown(props:any) {
  const menu = props.menu
  const [chevron, setChevron] = useState(true)

  return (
    <Menu as="div" className="text-lg font-medium">
      
      <Menu.Button onClick={() => setChevron(!chevron)} className={`w-full flex items-center justify-between px-5 py-3 hover:bg-black/10`}>
        <div className="flex gap-3">
          {props.icon}
          {props.text}
        </div>
        {
          chevron ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />
        }
      </Menu.Button>

      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="p-0">
            {
              menu.map((value:any, index:any) => (
                <Link key={index} to={value.link} className="flex gap-3 items-center pl-[3.25em] pr-5 py-3 hover:bg-black/10">{value.text}</Link>
              ))
            }
          </Menu.Items>
      </Transition>
    </Menu>
  );
}
