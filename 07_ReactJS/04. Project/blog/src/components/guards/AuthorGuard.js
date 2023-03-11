import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export default function AuthorGuard() {
    const { user } = useContext(AuthContext);

    if (user?.roles?.includes('author')) {
        return <Outlet />
    }

    return <Navigate to="/" replace />
}