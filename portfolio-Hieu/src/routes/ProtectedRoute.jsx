import useAuthentication from "../hooks/useAuthentication";

const ProtectedRoute = ({ children }) => { 
    const { user } = useAuthentication();
    if (!user) {
        return <Navigate to="/" replace />;
    }
    return children;
}
export default ProtectedRoute;