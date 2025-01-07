import {
  FormLogin,
  DivFormLogin,
  DivLogin,
  ForgotPassword,
} from "./styles-login";
import { BsArrowRight } from "react-icons/bs";
import Nav from "../../layout/nav/Nav";
import InputPassword from "../../layout/inputPassword/InputPassword";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import AuthLoading from "../../layout/authLoading/AuthLoading";
import { useLogin } from "./use-login";
import { ButtonRegister, InputRegister } from "../register/styles-register";
import ModalRecoverPassword from "../../layout/modalRecoverPassword/ModalRecoverPassword";

const Login = () => {
  const {
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
  } = useLogin();

  return (
    <>
      <DivLogin>
        <Nav isInitial={false} to={"/register?step=1"} nameBtn={"Cadastro"} />
        <DivFormLogin>
          <FormLogin>
            <strong>Fazer login</strong>
            <InputRegister
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputPassword
              placeholder={"Senha"}
              password={password}
              setPassword={setPassword}
            />

            {authLoading ? (
              <AuthLoading />
            ) : (
              <AuthFlashMessage message={message} />
            )}

            <ButtonRegister type="submit" onClick={fazerLogin}>
              Entrar <BsArrowRight />
            </ButtonRegister>

            <ForgotPassword onClick={handleClickOpenModalRecoverPassword}>
              esqueceu a senha ?
            </ForgotPassword>
          </FormLogin>
        </DivFormLogin>
      </DivLogin>
      <ModalRecoverPassword
        open={openModalRecoverPassword}
        handleClose={handleCloseModalRecoverPassword}
      />
    </>
  );
};

export default Login;
