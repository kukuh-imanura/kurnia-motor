import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes(props:any) {
  return props.isLogin ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes