import { Navigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const ProtectedRoute = ({ children, currentRoute }) => { 
    const { user } = useAuthentication();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (currentRoute) {
        return <Navigate to={`/${currentRoute}`} replace />;
    }

    return children;
}

export default ProtectedRoute;
