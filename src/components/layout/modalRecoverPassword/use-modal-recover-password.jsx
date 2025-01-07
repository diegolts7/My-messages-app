import { useContext, useEffect, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import { RecoverPasswordRoutes } from "../../../provider/api/recoverPasswordRoutes/RecoverPasswordRoutes";

export const useModalRecoverPassword = () => {
  const [emailRecover, setEmailRecover] = useState("");
  const [messageRecover, setMessageRecover] = useState("");
  const [loadingRecover, setLoadingRecover] = useState(false);
  const { token } = useContext(ContextAuth);
  const recoverPasswordRoutes = new RecoverPasswordRoutes(token);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [seconds, setSeconds] = useState();

  const enviarToken = async () => {
    if (isSendEmail) return;

    try {
      setLoadingRecover(true);
      await recoverPasswordRoutes.sendTokenEmail(emailRecover);

      localStorage.setItem(
        "info-recover",
        JSON.stringify({
          time: Date.now(),
          email: emailRecover,
        })
      );
      setSeconds(60);
      setIsSendEmail(true);
    } catch (error) {
      setMessageRecover(error.response.data.msg || "Erro ao enviar e-mail.");
      console.error(error);
    } finally {
      setLoadingRecover(false);
    }
  };

  const checkTimeLastRecover = () => {
    try {
      const result = localStorage.getItem("info-recover");

      if (result) {
        const parseResult = JSON.parse(result);
        const storedTime = parseResult?.time;
        if (!storedTime) return;

        const timeDifference = Date.now() - storedTime;
        const oneMinuteInMs = 60 * 1000;

        if (timeDifference < oneMinuteInMs) {
          setSeconds(Math.floor((oneMinuteInMs - timeDifference) / 1000));
          setEmailRecover(parseResult?.email || "");
          setIsSendEmail(true);
          return;
        }

        localStorage.removeItem("info-recover");
      }
    } catch (error) {
      console.error("Erro ao recuperar informações do localStorage:", error);
    }
  };

  useEffect(() => {
    checkTimeLastRecover();
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      setIsSendEmail(false);
      localStorage.removeItem("info-recover");
      return;
    }

    const timerCount = setTimeout(() => {
      setSeconds((before) => before - 1);
    }, 1000);

    return () => clearTimeout(timerCount);
  }, [seconds]);

  return {
    emailRecover,
    setEmailRecover,
    enviarToken,
    messageRecover,
    loadingRecover,
    isSendEmail,
    seconds,
    setIsSendEmail,
    setMessageRecover,
  };
};
