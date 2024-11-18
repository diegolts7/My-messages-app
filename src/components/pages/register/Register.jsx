import { BsArrowRight } from "react-icons/bs";
import InputPassword from "../../layout/inputPassword/InputPassword";
import Nav from "../../layout/nav/Nav";
import {
  DivAuthLoading,
  DivFormLogin,
  DivLogin,
  FormLogin,
} from "../login/Login.styled";
import { useState } from "react";
import { AuthRoutes } from "../../../provider/api/authRoutes/AuthRoutes";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import AuthLoading from "../../../../public/assets/authLoading.svg";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
            <DivAuthLoading>
              <img src={AuthLoading} alt="auth loading register" />
            </DivAuthLoading>
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
