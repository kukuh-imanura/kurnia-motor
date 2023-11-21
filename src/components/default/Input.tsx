function Default(props:any) {
  return (
    <div className="space-y-1">
      {
        props.label ? (
          <label htmlFor={props.label} className="pl-2">{props.label}</label>
        ) : ""
      }
      <input id={props.label} type="text" placeholder={props.placeholder} className={`bg-gray-100 w-full px-5 py-1 placeholder:text-gray-900 ${props.className}`}/>
    </div>
  )
}

function Disabled(props:any) {
  return (
    <div className="space-y-1">
      {
        props.label ? (
          <label htmlFor={props.label} className="pl-2">{props.label}</label>
        ) : ""
      }
      <input id={props.label} type="text" placeholder={props.placeholder} className={`bg-gray-100 w-full px-5 py-1 placeholder:text-gray-900 ${props.className}`} disabled/>
    </div>
  )
}

function Login(props:any) {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} className="w-full pl-2 bg-white/0 placeholder:text-gray-900 placeholder:text-sm border-b-[1px] border-gray-900 focus:outline-none" />
    </>
  )
}

const Input = {
  Default,
  Disabled,
  Login,
}

export default Input