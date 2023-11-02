import { useLocation,Navigate,Outlet} from "react-router-dom";

function UnAuthUser() {
    const token = localStorage.getItem('userId');
    const location = useLocation();
  return (
    token ? <Outlet/> : <Navigate to={'/'} state={{from:location}} replace />
  )
}

export default UnAuthUser