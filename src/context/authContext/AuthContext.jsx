import { createContext, useEffect, useState } from "react";
import { AuthRoutes } from "../../provider/api/authRoutes/AuthRoutes";
import { UserRoutes } from "../../provider/api/userRoutes/UserRoutes";

const ContextAuth = createContext();

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const authRoutes = new AuthRoutes();
  const userRoutes = new UserRoutes();

  const salvarToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const checarAcesso = async () => {
    try {
      if (token) {
        const id = await authRoutes.checkAcess(token);
        const user = await userRoutes.getUserData(id, token);
        setUser(user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      signOut();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checarAcesso();
  }, []);
  return (
    <ContextAuth.Provider
      value={{ token, salvarToken, isLoggedIn, loading, signOut, user }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export { AuthContext, ContextAuth };
