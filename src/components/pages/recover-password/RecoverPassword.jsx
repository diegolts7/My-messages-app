import React from "react";
import {
  ButtonRegister,
  DivCentralRegister,
  DivRegister,
} from "../register/styles-register";
import { FormLogin } from "../login/styles-login";
import Nav from "../../layout/nav/Nav";
import InputPassword from "../../layout/inputPassword/InputPassword";
import { useRecoverPassword } from "./use-recover-password";
import AuthLoading from "../../layout/authLoading/AuthLoading";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import { DivContentRecoverPassword } from "./styles-recover-password";

const RecoverPassword = () => {
  const {
    passwordRecover,
    setPasswordRecover,
    confirmPasswordRecover,
    setConfirmPasswordRecover,
    redefinirSenha,
    message,
    loading,
  } = useRecoverPassword();

  return (
    <DivRegister>
      <DivContentRecoverPassword>
        <DivCentralRegister>
          <strong>Redefinir senha</strong>
          <FormLogin onSubmit={redefinirSenha}>
            <InputPassword
              placeholder={"Nova senha"}
              password={passwordRecover}
              setPassword={setPasswordRecover}
            />
            <InputPassword
              placeholder={"Confirmar senha"}
              password={confirmPasswordRecover}
              setPassword={setConfirmPasswordRecover}
            />

            {loading ? <AuthLoading /> : <AuthFlashMessage message={message} />}

            <ButtonRegister>Redefinir</ButtonRegister>
          </FormLogin>
        </DivCentralRegister>
      </DivContentRecoverPassword>
    </DivRegister>
  );
};

export default RecoverPassword;
