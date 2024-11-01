import Footer from "../../layout/footer/Footer";
import { FormLogin, DivFormLogin, DivLogin, DivPassword } from "./Login.styled";
import { BsArrowRight } from "react-icons/bs";
import Nav from "../../layout/nav/Nav";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleShowPassword() {
    setShowPassword((before) => (before === "password" ? "text" : "password"));
  }

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

          <DivPassword>
            <input
              type={showPassword}
              placeholder="Digite sua senha."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword === "password" ? (
              <FaRegEyeSlash onClick={toggleShowPassword} />
            ) : (
              <FaRegEye onClick={toggleShowPassword} />
            )}
          </DivPassword>
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Entrar <BsArrowRight />
          </button>
          <p onClick={() => navigate("/recover-password")}>
            esqueceu a senha ?
          </p>
        </FormLogin>
      </DivFormLogin>
      <Footer />
    </DivLogin>
  );
};

export default Login;
