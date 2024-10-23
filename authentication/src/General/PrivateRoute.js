import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navbar } from "../Pages/Navbar";

export const PrivateRoute = () => {
    const login = useSelector(state => state.login.login);
    
    if(!login){
        return <Navigate to='/login'/>
    }
    console.log("private route");
    return (
        <>
            <Navbar />
            <Outlet />
        </>
);
}
