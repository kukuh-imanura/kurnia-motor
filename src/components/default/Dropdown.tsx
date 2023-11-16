import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="w-40 text-center inline-flex w-full justify-center gap-x-1.5 px-3 py-2 hover:font-bold hover:text-orange-500">Layanan</Menu.Button>
      </div>

      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute z-10 mt-2 w-56 shadow-2xl" style={{ backgroundColor: "#FFEDD3" }}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`block px-4 py-2 text-sm ${active ? "text-orange-500 font-bold" : "text-gray-900"}`}>
                  Antrian Online
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`block px-4 py-2 text-sm ${active ? "text-orange-500 font-bold" : "text-gray-900"}`}>
                  Antar Jemput
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`block px-4 py-2 text-sm ${active ? "text-orange-500 font-bold" : "text-gray-900"}`}>
                  Data Customer
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`block px-4 py-2 text-sm ${active ? "text-orange-500 font-bold" : "text-gray-900"}`}>
                  Data Admin
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`block px-4 py-2 text-sm ${active ? "text-orange-500 font-bold" : "text-gray-900"}`}>
                  Laporan Pembukuan
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
