import { useState } from "react";
import { FaCheck } from 'react-icons/fa';

function Default(props: any) {
  return (
    <div className="space-y-1">
      {props.label ? (
        <label htmlFor={props.label} className="pl-2">
          {props.label}
        </label>
      ) : (
        ""
      )}
      <input id={props.label} type="text" placeholder={props.placeholder} className={`bg-gray-100 w-full px-5 py-1 placeholder:text-gray-900 ${props.className}`} />
    </div>
  );
}

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

function Login(props: any) {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} className="w-full pl-2 bg-white/0 placeholder:text-gray-900 placeholder:text-sm border-b-[1px] border-gray-900 focus:outline-none" />
    </>
  );
}

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="relative">
      <input id="myCheckbox" type="checkbox" name="" onChange={() => setIsChecked(!isChecked)} className="appearance-none w-[13px] h-[13px] bg-gray-100 border border-brand-1 rounded-sm checked:bg-blue-500 checked:border-0" />
      {isChecked && <FaCheck className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-gray-100 pointer-events-none" />}
    </div>
  );
}

const Input = {
  Default,
  Disabled,
  Login,
  Checkbox,
};

export default Input;
