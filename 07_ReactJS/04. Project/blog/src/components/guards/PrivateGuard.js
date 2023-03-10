import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext} from "../../contexts/AuthContext";

export default function PrivateGuard() {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Outlet />
    }

    return <Navigate to="/" replace />
}