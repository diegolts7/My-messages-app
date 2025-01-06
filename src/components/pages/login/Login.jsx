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
  } = useLogin();

  return (
    <DivLogin>
      <Nav isInitial={false} to={"/register?step=1"} nameBtn={"Cadastro"} />
      <DivFormLogin>
        <FormLogin>
          <strong>Fazer login</strong>
          <InputRegister
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Digite seu email."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputPassword
            placeholder={"Digite sua senha"}
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

          <ForgotPassword onClick={() => navigate("/recover-password")}>
            esqueceu a senha ?
          </ForgotPassword>
        </FormLogin>
      </DivFormLogin>
    </DivLogin>
  );
};

export default Login;
