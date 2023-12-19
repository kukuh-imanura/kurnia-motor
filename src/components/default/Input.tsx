import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaEye, FaEyeSlash, FaLock, FaLockOpen, FaMagnifyingGlass } from "react-icons/fa6";

function Disabled(props: any) {
  return (
    <div className="space-y-1">
      {props.label ? (
        <label htmlFor={props.label} className="pl-2">
          {props.label}
        </label>
      ) : (
        ""
      )}
      <input id={props.label} type="text" placeholder={props.placeholder} className={`bg-gray-100 w-full px-5 py-1 placeholder:text-gray-900 ${props.className}`} disabled />
    </div>
  );
}

function Checkbox(props:any) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="relative">
      <input id="myCheckbox" type="checkbox" name="" onChange={() => setIsChecked(!isChecked)} className={` ${props.className} appearance-none w-[13px] h-[13px] bg-gray-100 border rounded-sm checked:bg-blue-500 checked:border-0`} />
      {isChecked && <FaCheck className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-gray-100 pointer-events-none" />}
    </div>
  );
}

// DIVIDER

function Login(props: any) {
  const [type, setType] = useState(props.type);
  const handleSetType = () => {
    type === "text" ? setType("password") : setType("text");
  };

  return (
    <>
      {type === "submit" ? (
        <input type={props.type} placeholder={props.placeholder} value={props.value} className={`${props.className} py-1 rounded-full`} />
      ) : (
        <div className="relative rounded-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">{props.type === "password" ? type === "password" ? <FaLock /> : <FaLockOpen /> : props.icon}</div>

          <input type={type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onchange} className={`${props.className} block w-full py-1 pl-10 pr-10 bg-white/0 text-sm placeholder:text-gray-900 border rounded-full focus:outline-none`} />

          {props.type === "password" ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={handleSetType}>
              {type === "text" ? <FaEyeSlash /> : <FaEye />}
            </div>
          ) : (
            ""
          )}
          
        </div>
      )}
    </>
  );
}

function Search(props: any) {
  return (
    <>
      <div className="relative rounded-full">
        {
          props.icon === "left" ? (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
              <FaMagnifyingGlass className="text-brand-1"/>
            </div>
          ) : null
        }

        <input type="text" placeholder={props.placeholder} value={props.value} className={`${props.className} h-full block w-full px-10 text-sm placeholder:text-light placeholder:text-gray-500 rounded-xl border-gray-900 focus:outline-none`} />
        
        {
          props.icon === "right" ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <FaMagnifyingGlass />
            </div>
          ) : null
        }
      </div>
    </>
  );
}

function Textarea(props: any) {
  return (
    <div className="m-5 p-5 border-2 rounded-xl">
      {
        props.header ? (
          <p className="font-bold">Catatan Customer</p>
        ) : null
      }
      <textarea id={props.id} name={props.name} rows={2} placeholder={props.placeholder} className={`${props.className} text-sm placeholder:text-light focus:outline-none resize-none`} readOnly/>
    </div>
  );
}

function Default(props:any) {

  const [inputValue, setInputValue] = useState(props.value || '');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  return (
    <div className="flex flex-col">
      {
        props.label ? (
          <label htmlFor="#" className="mb-2">{props.label} :</label>
        ) : null
      }
      <input type={props.type} placeholder={props.placeholder} value={inputValue} onChange={handleChange} className={`${props.className} focus:outline-none`} />
    </div>
  )
}

const Input = {
  Default,
  Textarea,
  Disabled,
  Checkbox,
  Login,
  Search,
};

export default Input;
