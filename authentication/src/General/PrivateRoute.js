import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navbar } from "../Pages/Navbar";

export const PrivateRoute = () => {
    const login = useSelector(state => state.login.login);
    
    if(!login){
        return <Navigate to='/login'/>
    }
    console.log("private route");
    console.log("124");
    console.log("124 54484");
    return (
        <>
            <Navbar />
            <Outlet />
        </>
);
}
