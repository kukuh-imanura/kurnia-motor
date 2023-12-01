import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { RiDeleteBinLine } from "react-icons/ri";

import axios from "axios";
import ReactPaginate from "react-paginate";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/default/Sidebar";
import Navbar from "@/components/default/Navbar";
import { getUsersAdmin } from "@/lib/Api/api";

function Admin() {
  interface User {
    id_admin: number;
    name: string;
    tlp: string;
    email: string;
    username: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsersAdmin(keyword, page, limit).then((result) => {
      setUsers(result.result as User[]);
      setPage(result.page);
      setPages(result.totalPage);
      setRows(result.totalRows);
    });
  }, [page, keyword]);

  const changePage = ({ selected }: { selected: number }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg("Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!");
    } else {
      setMsg("");
    }
  };

  const searchData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  const deleteUser = async (id_admin: number) => {
    try {
      await axios.delete(`https://bengkel-api-ruby.vercel.app/api/admin/${id_admin}`);
      // Refresh the user list after deletion
      getUsersAdmin(keyword, page, limit).then((result) => {
        setUsers(result.result as User[]);
        setPage(result.page);
        setPages(result.totalPage);
        setRows(result.totalRows);
      });
      // setPage(updatedUsers.page);
      // Update other relevant state variables if needed
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-surface-1 flex text-gray-900">
      <Sidebar />

      <section className=" bg-surface-1 h-auto pb-40 px-12  ">
        <Navbar.Default2 text="Data Admin" input />
        {/* <form onSubmit={searchData}>
          <Navbar.search input value={query} onChange={(e) => setQuery(e.target.value)} />
        </form> */}

        <div className="flex justify-between items-center">
          <form className="text-stone-800 w-1/3" onSubmit={searchData}>
            <Input className="py-6" type="text" placeholder="Cari" value={query} onChange={(e) => setQuery(e.target.value)} />
          </form>
          <Link to={"/addAdmin"}>
            <Button className=" text-xl font-bold border-2 px-11 py-6 border-[#20B038] text-[#20B038] hover:text-gray-100 hover:bg-[#20B038]">Tambah</Button>
          </Link>
        </div>

        <Table className="text-stone-800 mt-5">
          <TableCaption className="text-left">
            {" "}
            Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
          </TableCaption>
          <TableHeader>
            <TableRow className=" bg-dark-2    text-orange-50">
              <TableHead className="px-10 rounded-tl-[10px]">No</TableHead>
              <TableHead className="pr-40">Nama</TableHead>
              {/* <TableHead>No. Hp</TableHead> */}
              <TableHead className="pr-48">Email</TableHead>
              <TableHead className="pr-24 pl-20">Username</TableHead>
              <TableHead className="text-center pr-8 rounded-tr-[10px]">Action</TableHead>
              {/* <TableHead className="text-right">Username</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, i) => (
              <TableRow key={user.id_admin}>
                <TableCell className="font-medium text-center">{i + 1 + page * limit}</TableCell>
                <TableCell>{user.name}</TableCell>
                {/* <TableCell>{user.tlp}</TableCell> */}
                <TableCell>{user.email}</TableCell>
                <TableCell className="pl-20">{user.username}</TableCell>
                <TableCell>
                  {/* <Button className="bg-brand-2">Edit</Button>{" "} */}
                  <Button className=" text-dark-5 " onClick={() => deleteUser(user.id_admin)}>
                    <RiDeleteBinLine size="1.5em" />
                    Hapus
                  </Button>
                </TableCell>
                {/* <TableCell>081333806595</TableCell> */}
                {/* <TableCell className="text-right">$250.00</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p className="has-text-centered has-text-danger">{msg}</p>

        <nav className="flex items-center justify-center space-x-4 pb-5" key={rows} role="navigation" aria-label="pagination">
          <ReactPaginate
            previousLabel={<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500  border-gray-300 hover:text-gray-700">{`< Sebelumnya`}</span>}
            nextLabel={<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500  border-gray-300 hover:text-gray-700">{`Berikutnya >`}</span>}
            pageCount={Math.min(10, pages)}
            onPageChange={changePage}
            containerClassName={"flex space-x-3  items-center"} // Updated to include 'items-center'
            pageLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:text-gray-700"}
            previousLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-white border-t border-r border-b border-l border-gray-300 rounded-l-md rounded-r-md hover:text-gray-700"}
            nextLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-white border-l border-t border-b border-r border-gray-300 rounded-l-md rounded-r-md hover:text-gray-700"}
            activeLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-white active-link border border-blue-500 rounded-md pointer-events-none"}
            disabledLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-300 bg-white border border-gray-300 rounded-md pointer-events-none"}
          />
        </nav>
      </section>
    </div>
  );
}

export default Admin;
