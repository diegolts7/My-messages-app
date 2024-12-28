import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../../provider/api/authRoutes/AuthRoutes";
import { useState } from "react";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authLoadingRegister, setAuthLoadingRegister] = useState(false);
  const authRoutes = new AuthRoutes();
  const navigate = useNavigate();

  const fazerCadastro = async (e) => {
    e.preventDefault();
    try {
      setAuthLoadingRegister(true);
      await authRoutes.register(name, email, password, confirmPassword);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.msg);
    }
    setAuthLoadingRegister(false);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    message,
    authLoadingRegister,
    setAuthLoadingRegister,
    fazerCadastro,
  };
};
