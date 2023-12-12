// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Input from "@/components/default/Input";
import Button from "./Button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";

function Laporan(props: any) {
  const { header, content, footer } = props;

  // FILTER TANGGAL MENJADI SATU
  const uniqueDates = new Set();

  const transformedLaporan = content.map((value: any, _: any) => {
    if (!uniqueDates.has(value.tanggal)) {
      uniqueDates.add(value.tanggal);
      return value;
    } else {
      return { ...value, tanggal: "" };
    }
  });

  return (
    <div>
      <table className={`${props.className} w-full rounded-md`}>
        {header ? (
          <tr className="bg-dark-6 text-light-1 h-10">
            {header.map((value: any, index: any) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        ) : null}

        {transformedLaporan.map((value: any, index: any) => (
          <tr key={index} className={`${index % 2 === 0 ? "bg-gray-200" : "bg-gray"} text-dark-1 h-10`}>
            <td>
              <Input.Checkbox />
            </td>
            <td>{value.tanggal}</td>
            <td className="text-left">{value.layanan}</td>
            <td>{value.satuan}</td>
            <td>{value.harga}</td>
            <td>{value.total}</td>
          </tr>
        ))}

        {footer ? <tr className="bg-dark-6 text-light-1 h-10">{footer}</tr> : null}
      </table>
    </div>
  );
}

function Form(props: any) {
  // HANDLE FORM
  // const { register, handleSubmit, setValue, getValues } = useForm();
  
  // HANDLE INPUT
  const [date, setDate] = useState("");
  
  const [rows, setRows] = useState([
    { layanan: "", satuan: 0, harga: 0, total: 0 },
  ]);

  const handleInputChange = (index: number, field: string, value: any) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };

    // Hitung ulang total untuk baris saat ini
    newRows[index].total = newRows[index].satuan * newRows[index].harga;

    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { layanan: "", satuan: 0, harga: 0, total: 0 }]);
  };


  return (
    <div>
      <div className="p-8 bg-gray-100 flex-space-around flex justify-between">
        <input type="date" placeholder=".../.../..." value={date} onChange={(e) => setDate(e.target.value)} className="text-center bg-dark-100 rounded-full border-2 text-gray-900 rounded-md border-2 placeholder:text-dark-100 placeholder:text-center p-3 w-40 focus:outline-none" />
        <div className="flex gap-3">
          <Button.Default text="Simpan" className="w-fit" />
          <Button.Default text="Hapus" className="w-fit" />
        </div>
      </div>
      <table className={`${props.className} w-full`}>
        <thead className="bg-dark-6 h-10 text-center">
          <tr>
            <td className="w-10"></td>
            <td>Layanan</td>
            <td>Satuan</td>
            <td>Harga</td>
            <td>Total</td>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={`bg-gray-200 odd:bg-gray-100 text-dark-1 h-10 text-center`}>
              <td className="w-10">
                <Input.Checkbox className="border-gray-900" />
              </td>
              <td>
                <input type="text" value={row.layanan} onChange={(e) => handleInputChange(index, 'layanan', e.target.value)} className="px-2 w-2/3 border border-gray-900" />
              </td>
              <td>
                <input type="number" value={row.satuan} onChange={(e) => handleInputChange(index, 'satuan', e.target.valueAsNumber)} className="text-center w-2/3 border border-gray-900" />
              </td>
              <td>
                <input type="number" value={row.harga} onChange={(e) => handleInputChange(index, 'harga', e.target.valueAsNumber)} className="text-center w-2/3 border border-gray-900" />
              </td>
              <td>
                <input type="number" value={row.total} onChange={(e) => handleInputChange(index, 'total', e.target.valueAsNumber)} className="text-center w-2/3 border border-gray-900" />
              </td>
            </tr>
          ))}

          {/* TAMBAHKAN BARIS */}
          <tr className="h-10 text-gray-900 bg-gray-100 cursor-pointer" onClick={handleAddRow}>
            <td colSpan={5} className="px-2 w-full">
              <div className="flex gap-2">
                <div className="rounded-full p-1 bg-gray-900 w-fit h-fit">
                  <FaPlus className="text-gray-100" />
                </div>
                Tambahkan Kolom Baru
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Default(props: any) {
  return (
    <div className={props.className}>
      <table className="w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <tr key={index} className={`flex items-center justify-between p-3 ${index % 2 === 0 ? "" : "border-y-2"}`}>
            <div className="flex items-center gap-5">
              <td>{index + 1}.</td>
              <td>
                <img src="/assets/images/admin/adelia.png" alt="Foto Profil" className="h-16 rounded-full" />
              </td>
              <td>
                <p className="font-bold">Nama</p>
                <p className="font-light">10:00</p>
              </td>
            </div>

            <td className="flex gap-3">
              {props.detail ? <Button.Default text="Detail" link="/detail" /> : null}
              <Button.Default text="Terima" />
              <Button.Default text="Tolak" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const Table = {
  Default,
  Laporan,
  Form,
};

export default Table;
