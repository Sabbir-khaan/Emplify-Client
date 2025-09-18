import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivetRoutes = ({children}) => {

    const location=useLocation();
    console.log(location.pathname);

    const {user,loading}=useAuth();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        <Navigate to="login" state={loading.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoutes;