// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Input from "@/components/default/Input";
import Button from "./Button";

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
  const { header, footer } = props;
  const row = 5;

  return (
    <div>
      <table className={`${props.className} w-full`}>
        {header ? (
          <tr className="bg-dark-6 h-10">
            {header.map((value: any, index: any) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        ) : null}

        {Array.from({ length: row }).map((_, index) => (
          <tr key={index} className={`${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"} text-dark-1 h-10 text-center`}>
            <td className="w-10">
              <Input.Checkbox />
            </td>

            {Array.from({ length: header.length - 1 }).map((_, index) => (
              <td key={index}>
                <Input.Default className="w-3/4 h-1/2 border border-gray-900" />
              </td>
            ))}
          </tr>
        ))}

        {/* {content.map((value:any, index:any) => (
          <tr key={index} className={`${index % 2 === 0 ? "bg-surface-2" : ""} text-gray-900 h-10`}>
            <td>
              <Input.Checkbox />
            </td>
            <td>{value.tanggal}</td>
            <td className="text-left">{value.layanan}</td>
            <td>{value.satuan}</td>
            <td>{value.harga}</td>
            <td>{value.total}</td>
          </tr>
        ))} */}

        {footer ? <tr className="bg-brand-1 text-gray-100 h-10">{footer}</tr> : null}
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
