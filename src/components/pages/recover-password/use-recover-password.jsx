import { useEffect, useState } from "react";
import { RecoverPasswordRoutes } from "../../../provider/api/recoverPasswordRoutes/RecoverPasswordRoutes";
import { useLocation, useNavigate } from "react-router-dom";

export const useRecoverPassword = () => {
  const [passwordRecover, setPasswordRecover] = useState("");
  const [confirmPasswordRecover, setConfirmPasswordRecover] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const recoverPasswordRoutes = new RecoverPasswordRoutes();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, []);

  const redefinirSenha = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await recoverPasswordRoutes.changePassword(
        passwordRecover,
        confirmPasswordRecover,
        token
      );

      navigate("/login", { replace: true });
    } catch (error) {
      setMessage(error.response.data.msg);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    passwordRecover,
    setPasswordRecover,
    confirmPasswordRecover,
    setConfirmPasswordRecover,
    redefinirSenha,
    message,
    loading,
  };
};
