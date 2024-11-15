import { createContext, useEffect, useState } from "react";
import { AuthRoutes } from "../../provider/api/authRoutes/AuthRoutes";

const ContextAuth = createContext();

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authRoutes = new AuthRoutes();

  useEffect(() => {
    if (token) {
      authRoutes.checkAcess(token, setIsLoggedIn);
    }
  }, []);
  return (
    <ContextAuth.Provider value={{ token, setToken, isLoggedIn }}>
      {children}
    </ContextAuth.Provider>
  );
};

export { AuthContext, ContextAuth };
