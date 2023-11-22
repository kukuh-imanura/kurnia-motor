import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Input from "@/components/default/Input"

function Laporan(props:any) {

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
      <table className={`${props.className} w-full`}>
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

function Form(props:any) {

  const {header, footer} = props
  const row = 5

  return (
    <div>
      <table className={`${props.className} w-full`}>

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

        {
          Array.from({ length:row }).map((_, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-surface-2" : "bg-surface-1"} text-gray-900 h-10 text-center`}>
              <td className='w-10'><Input.Checkbox /></td>
              {
                Array.from({length:header.length - 1}).map((_, index) => (
                  <td key={index}><Input.Default className="w-3/4 h-1/2 border border-gray-900"/></td>
                ))
              }
            </tr>
          ))
        }


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

        {
          footer ? (
            <tr className="bg-brand-1 text-gray-100 h-10">
              {footer}
            </tr>
          ) : null
        }
      </table>
    </div>
  );
}

const Table = {
  Laporan,
  Form,
}

export default Table;