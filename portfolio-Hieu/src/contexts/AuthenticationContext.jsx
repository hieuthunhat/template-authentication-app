import { createContext, useContext } from "react";
import useAuthentication from "../hooks/useAuthentication";

const AuthenticationContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthentication();

  return (
    <AuthenticationContext.Provider value={auth}>
      {!auth.loading && children}
    </AuthenticationContext.Provider>
  );
};
