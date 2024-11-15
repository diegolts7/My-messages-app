import { FormLogin, DivFormLogin, DivLogin } from "./Login.styled";
import { BsArrowRight } from "react-icons/bs";
import Nav from "../../layout/nav/Nav";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import InputPassword from "../../layout/inputPassword/InputPassword";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <DivLogin>
      <Nav isInitial={false} to={"/register"} nameBtn={"Cadastro"} />
      <DivFormLogin>
        <FormLogin>
          <strong>Fazer login</strong>
          <input
            type="email"
            placeholder="Digite seu email."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputPassword
            placeholder={"Digite sua senha"}
            password={password}
            setPassword={setPassword}
          />
          <button type="submit" onClick={(e) => e.preventDefault()}>
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
