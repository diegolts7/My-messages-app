import { BsArrowRight } from "react-icons/bs";
import InputPassword from "../../layout/inputPassword/InputPassword";
import Nav from "../../layout/nav/Nav";
import { DivFormLogin, DivLogin, FormLogin } from "../login/Login.styled";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <DivLogin>
      <Nav isInitial={false} to={"/login"} nameBtn={"Entrar"} />
      <DivFormLogin>
        <FormLogin>
          <strong>Fazer cadastro</strong>
          <input
            type="text"
            name="name"
            autoComplete="given-name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="sobrenome"
            autoComplete="additional-name"
            placeholder="Digite seu nome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputPassword
            placeholder={"Digite sua senha"}
            password={password}
            setPassword={setPassword}
          />
          <InputPassword
            placeholder={"Confirme sua senha"}
            password={confirmPassword}
            setPassword={setConfirmPassword}
          />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Cadastrar
            <BsArrowRight />
          </button>
        </FormLogin>
      </DivFormLogin>
    </DivLogin>
  );
};

export default Register;
