import { useContext } from "react";
import { ContextAuth } from "../../context/authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesLoggedIn = () => {
  const { isLoggedIn } = useContext(ContextAuth);
  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutesLoggedIn;
