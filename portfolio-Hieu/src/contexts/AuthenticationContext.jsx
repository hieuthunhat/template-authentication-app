import { createContext, useContext } from "react";
import useAuthentication from "../hooks/useAuthentication";

const AuthenticationContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const { user, login, logout, loading } = useAuthentication();
    const value = { user, login, logout };
    console.log(user);
    
    return (
        <AuthenticationContext.Provider value={value}>
            {!loading && children}
        </AuthenticationContext.Provider>
    );
};
