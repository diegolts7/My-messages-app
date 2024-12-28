import { useLocation, useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../../provider/api/authRoutes/AuthRoutes";
import { useEffect, useState } from "react";
import { z } from "zod";
import { firstStepSchema } from "../../../validators/checkFirstStepSchema/checkFirstStepSchema";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authLoadingRegister, setAuthLoadingRegister] = useState(false);
  const [handle, setHandle] = useState("");
  const [dateBirth, setDateBirth] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const step = query.get("step");
  const [stepRegister, setStepRegister] = useState(Number(step) || 1);
  const authRoutes = new AuthRoutes();
  const navigate = useNavigate();

  const fazerCadastro = async (e) => {
    e.preventDefault();
    try {
      setAuthLoadingRegister(true);
      await authRoutes.register(
        name,
        email,
        handle,
        dateBirth?.toDate(),
        password,
        confirmPassword
      );
      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.msg);
    }
    setAuthLoadingRegister(false);
  };

  useEffect(() => {
    const parsedStep = Number(step);

    if (!step || parsedStep < 1) {
      navigate(`?step=1`);
    }

    setStepRegister(parsedStep || 1);
  }, [location.search]);

  const handleStep = (isAvanced) =>
    navigate(
      `?step=${
        isAvanced ? stepRegister + 1 : stepRegister === 1 ? 1 : stepRegister - 1
      }`
    );

  const checkAvancedFirstStep = async () => {
    try {
      firstStepSchema.parse({
        name,
        dateBirth: dateBirth?.toDate(),
        handle: handle,
      });
      handleStep(true);
      setMessage("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error);
        setMessage(error.errors[0].message);
      }
      console.log(error);
    }
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
    stepRegister,
    checkAvancedFirstStep,
    handle,
    setHandle,
    dateBirth,
    setDateBirth,
    handleStep,
  };
};
