import { useContext, useState } from "react";
import { AuthRoutes } from "../../../provider/api/authRoutes/AuthRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../context/authContext/AuthContext";

export const useLogin = () => {
  const authRoutes = new AuthRoutes();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const recover = query.get("recover");
  const recoverToBoolean = recover
    ? recover === "true"
      ? true
      : false
    : false;
  const { salvarToken } = useContext(ContextAuth);
  const [openModalRecoverPassword, setOpenModalRecoverPassword] =
    useState(recoverToBoolean);

  const fazerLogin = async (e) => {
    e.preventDefault();
    try {
      setAuthLoading(true);
      const response = await authRoutes.login(email, password);
      salvarToken(response.data.token);
      console.log(response);
      window.location.reload();
      console.log("oiii");
    } catch (error) {
      setMessage(error.response.data.msg);
      console.error(error);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleCloseModalRecoverPassword = () => {
    navigate("/login");
    setOpenModalRecoverPassword(false);
  };

  const handleClickOpenModalRecoverPassword = () => {
    navigate("?recover=true");
    setOpenModalRecoverPassword(true);
  };

  return {
    navigate,
    email,
    setEmail,
    password,
    setPassword,
    message,
    authLoading,
    fazerLogin,
    openModalRecoverPassword,
    handleClickOpenModalRecoverPassword,
    handleCloseModalRecoverPassword,
  };
};
