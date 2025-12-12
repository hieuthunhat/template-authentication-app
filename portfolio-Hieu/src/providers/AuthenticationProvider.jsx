import useAuthentication from "../hooks/useAuthentication";
import AuthenticationContext from "../contexts/AuthenticationContext.jsx"

export const AuthProvider = ({ children }) => {
  const auth = useAuthentication();

  return (
    <AuthenticationContext value={auth}>
      {!auth.loading && children}
    </AuthenticationContext>
  );
};
