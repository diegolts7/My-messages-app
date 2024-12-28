import { BsArrowRight } from "react-icons/bs";
import InputPassword from "../../layout/inputPassword/InputPassword";
import Nav from "../../layout/nav/Nav";
import { DivFormLogin, DivLogin, FormLogin } from "../login/styles-login";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import AuthLoading from "../../layout/authLoading/AuthLoading";
import { useRegister } from "./use-register";

const Register = () => {
  const {
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
    fazerCadastro,
  } = useRegister();

  return (
    <DivLogin>
      <Nav isInitial={false} to={"/login"} nameBtn={"Entrar"} />
      <DivFormLogin>
        <FormLogin>
          <strong>Fazer cadastro</strong>
          <input
            type="text"
            name="fullname"
            autoComplete="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputPassword
            placeholder={"Senha"}
            password={password}
            setPassword={setPassword}
          />
          <InputPassword
            placeholder={"Confirme sua senha"}
            password={confirmPassword}
            setPassword={setConfirmPassword}
          />
          {authLoadingRegister ? (
            <AuthLoading />
          ) : (
            <AuthFlashMessage message={message} />
          )}
          <button type="submit" onClick={fazerCadastro}>
            Cadastrar
            <BsArrowRight />
          </button>
        </FormLogin>
      </DivFormLogin>
    </DivLogin>
  );
};

export default Register;
