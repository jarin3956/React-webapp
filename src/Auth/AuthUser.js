import { useLocation,Navigate,Outlet } from "react-router-dom";

function AuthUser() {
    const token = localStorage.getItem('userId');
    const location = useLocation();
  return (
    token ? <Navigate to={'/home'} state={{from:location}} replace /> : <Outlet/>
  )
}

export default AuthUser