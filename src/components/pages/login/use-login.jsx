import { useContext, useState } from "react";
import { AuthRoutes } from "../../../provider/api/authRoutes/AuthRoutes";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../context/authContext/AuthContext";

export const useLogin = () => {
  const authRoutes = new AuthRoutes();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const { salvarToken } = useContext(ContextAuth);
  const [openModalRecoverPassword, setOpenModalRecoverPassword] =
    useState(false);

  const fazerLogin = async (e) => {
    e.preventDefault();
    try {
      setAuthLoading(true);
      const response = await authRoutes.login(email, password);
      salvarToken(response.data.token);
      location.reload();
    } catch (error) {
      setMessage(error.response.data.msg);
      console.error(error);
    }
    setAuthLoading(false);
  };

  const handleCloseModalRecoverPassword = () => {
    setOpenModalRecoverPassword(false);
  };

  const handleClickOpenModalRecoverPassword = () => {
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
