import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Input from "@/components/default/Input"

function Table(props:any) {

  const {header, content, footer} = props

  // FILTER TANGGAL MENJADI SATU
  const uniqueDates = new Set();
  
  const transformedLaporan = content.map((value:any, _:any) => {
    if (!uniqueDates.has(value.tanggal)) {
      uniqueDates.add(value.tanggal);
      return value;
    } else {
      return { ...value, tanggal: '' };
    }
  });

  return (
    <div>
      <table className="w-full mt-5">
        {
          header ? (
            <tr className="bg-brand-1 h-10">
              {
                header.map((value:any, index:any) => (
                  <th key={index}>{value}</th>
                ))
              }
            </tr>
          ) : null
        }

        {transformedLaporan.map((value:any, index:any) => (
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
        ))}

        {
          footer ? (
            <tr className="bg-brand-1 text-gray-100 h-10">
              {footer}
            </tr>
          ) : null
        }
      </table>

      <div className="text-gray-900 flex items-center justify-center space-x-10 mt-10 ">
          <FaChevronLeft />
          <p>January 2023</p>
          <FaChevronRight />
        </div>
    </div>
  );
}

export default Table;