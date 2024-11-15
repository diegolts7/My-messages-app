import { createContext, useEffect, useState } from "react";
import { AuthRoutes } from "../../provider/api/authRoutes/AuthRoutes";

const ContextAuth = createContext();

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const authRoutes = new AuthRoutes();

  const salvarToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(async () => {
    if (token) {
      await authRoutes.checkAcess(token, setIsLoggedIn);
    }
    setLoading(false);
  }, []);
  return (
    <ContextAuth.Provider
      value={{ token, salvarToken, isLoggedIn, loading, signOut }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export { AuthContext, ContextAuth };
