import { BsArrowRight } from "react-icons/bs";
import InputPassword from "../../layout/inputPassword/InputPassword";
import Nav from "../../layout/nav/Nav";
import {
  FormRegister,
  DivCentralRegister,
  DivRegister,
  ButtonRegister,
  InputRegister,
  DivContentRegister,
  InfoSteps,
} from "./styles-register";
import AuthFlashMessage from "../../layout/authFlashMessage/AuthFlashMessage";
import AuthLoading from "../../layout/authLoading/AuthLoading";
import { useRegister } from "./use-register";
import BasicDatePicker from "../../layout/basicDatePicker/BasicDatePicker";
import { IconButton, Tooltip } from "@mui/material";
import { IoArrowBackCircle } from "react-icons/io5";

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
    stepRegister,
    checkAvancedFirstStep,
    handle,
    setHandle,
    dateBirth,
    setDateBirth,
    handleStep,
  } = useRegister();

  return (
    <DivRegister>
      <Nav isInitial={false} to={"/login"} nameBtn={"Entrar"} />
      <DivContentRegister>
        <DivCentralRegister>
          <strong>Fazer cadastro</strong>

          {stepRegister > 1 && (
            <InfoSteps>
              <Tooltip title="Voltar" arrow>
                <IconButton onClick={() => handleStep(false)}>
                  <IoArrowBackCircle />
                </IconButton>
              </Tooltip>

              <p>{`${stepRegister}/2`}</p>
            </InfoSteps>
          )}

          {stepRegister === 1 && (
            <FormRegister>
              <InputRegister
                type="text"
                name="fullname"
                autoComplete="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputRegister
                type="text"
                placeholder="Nome de usuário"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
              />
              <BasicDatePicker date={dateBirth} setDate={setDateBirth} />
              <ButtonRegister
                onClick={(e) => {
                  e.preventDefault();
                  checkAvancedFirstStep();
                }}
              >
                Avançar
              </ButtonRegister>
            </FormRegister>
          )}

          {stepRegister === 2 && (
            <FormRegister>
              <InputRegister
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

              <ButtonRegister type="submit" onClick={fazerCadastro}>
                Cadastrar
                <BsArrowRight />
              </ButtonRegister>
            </FormRegister>
          )}
          {authLoadingRegister ? (
            <AuthLoading />
          ) : (
            <AuthFlashMessage message={message} />
          )}
        </DivCentralRegister>
      </DivContentRegister>
    </DivRegister>
  );
};

export default Register;
