import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.tsx";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        user === null || user.token !== true ? <Navigate to="/login"/> : <Outlet/>
    )
}

export default PrivateRoutes;