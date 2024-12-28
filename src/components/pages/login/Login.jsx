import { FormLogin, DivFormLogin, DivLogin } from "./styles-login";
import { BsArrowRight } from "react-icons/bs";
import Nav from "../../layout/nav/Nav";
import InputPassword from "../../layout/inputPassword/InputPassword";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import AuthLoading from "../../layout/authLoading/AuthLoading";
import { useLogin } from "./use-login";

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
      <Nav isInitial={false} to={"/register"} nameBtn={"Cadastro"} />
      <DivFormLogin>
        <FormLogin>
          <strong>Fazer login</strong>
          <input
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
          <button type="submit" onClick={fazerLogin}>
            Entrar <BsArrowRight />
          </button>
          <p onClick={() => navigate("/recover-password")}>
            esqueceu a senha ?
          </p>
        </FormLogin>
      </DivFormLogin>
    </DivLogin>
  );
};

export default Login;
