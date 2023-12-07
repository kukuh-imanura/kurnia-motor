import { Navigate, Outlet } from "react-router-dom";

function AuthRoutes(props:any) {
  return props.isLogin ? <Outlet /> : <Navigate to="/login" />
}

export default AuthRoutes