import { FormLogin, DivFormLogin, DivLogin } from "./Login.styled";
import { BsArrowRight } from "react-icons/bs";
import Nav from "../../layout/nav/Nav";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import InputPassword from "../../layout/inputPassword/InputPassword";
import { AuthRoutes } from "../../../provider/api/authRoutes/AuthRoutes";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import AuthLoading from "../../layout/authLoading/AuthLoading";

const Login = () => {
  const authRoutes = new AuthRoutes();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const { salvarToken } = useContext(ContextAuth);

  const fazerLogin = async (e) => {
    e.preventDefault();
    try {
      setAuthLoading(true);
      const response = await authRoutes.login(email, password);
      salvarToken(response.data.token);
      location.reload();
    } catch (error) {
      setMessage(error.response.data.msg);
      console.error(error);
    }
    setAuthLoading(false);
  };

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
