import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import axios from "axios";
import ReactPaginate from "react-paginate";

import Navbar from "@/components/default/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    getUsers();
  }, [page, keyword]);

  const getUsers = async () => {
    const response = await axios.get(`https://bengkel-api-ruby.vercel.app/api/admin/allAdmin?search_query=${keyword}&page=${page}&limit=${limit}`);
    setUsers(response.data.result as User[]);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

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
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <section className=" bg-surface-1 h-auto pb-40 px-36 ">
        <div>
          <h1 className="text-stone-800 text-center text-4xl  whitespace-nowrap pt-9 max-md:pt-10 mb-10">DATA ADMIN</h1>
        </div>
        <div className="flex justify-between items-center">
          <Link to={"/addAdmin"}>
            <Button className="text-orange-50 text-xl font-bold bg-brand-1 px-11 py-6 ">Tambah</Button>
          </Link>
          <form className="text-stone-800 w-1/3  " onSubmit={searchData}>
            <Input className="py-6" type="text" placeholder="Cari" value={query} onChange={(e) => setQuery(e.target.value)} />
          </form>
        </div>

        <Table className="text-stone-800 mt-5">
          <TableCaption className="text-left">
            {" "}
            Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
          </TableCaption>
          <TableHeader>
            <TableRow className=" bg-brand-1   text-orange-50">
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>No. Hp</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead className="text-center">Action</TableHead>
              {/* <TableHead className="text-right">Username</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, i) => (
              <TableRow key={user.id_admin}>
                <TableCell className="font-medium">{i + 1 + page * limit}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.tlp}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  <Button className="bg-brand-2">Edit</Button>{" "}
                  <Button className="bg-red text-orange-50" onClick={() => deleteUser(user.id_admin)}>
                    Delete
                  </Button>
                </TableCell>
                {/* <TableCell>081333806595</TableCell> */}
                {/* <TableCell className="text-right">$250.00</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p className="has-text-centered has-text-danger ">{msg}</p>

        <nav className="flex items-center justify-center space-x-4 pb-5" key={rows} role="navigation" aria-label="pagination">
          <ReactPaginate
            previousLabel={<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500  border-gray-300 hover:text-gray-700">{`< Prev`}</span>}
            nextLabel={<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500  border-gray-300 hover:text-gray-700">{`Next >`}</span>}
            pageCount={Math.min(10, pages)}
            onPageChange={changePage}
            containerClassName={"flex space-x-3  items-center"} // Updated to include 'items-center'
            pageLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:text-gray-700"}
            previousLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-white border-t border-b border-l border-gray-300 rounded-l-md hover:text-gray-700"}
            nextLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-white border-l border-t border-b border-r border-gray-300 rounded-l-md rounded-r-md hover:text-gray-700"}
            activeLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-orange-800 border border-blue-500 rounded-md pointer-events-none"}
            disabledLinkClassName={"inline-flex items-center px-3 py-1 text-sm font-medium text-gray-300 bg-white border border-gray-300 rounded-md pointer-events-none"}
          />
        </nav>
      </section>
    </div>
  );
}

export default Admin;
