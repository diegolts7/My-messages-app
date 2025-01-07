import React from "react";
import { DivContentRegister, DivRegister } from "../register/styles-register";
import Nav from "../../layout/nav/Nav";

const RecoverPassword = () => {
  return (
    <DivRegister>
      <Nav isInitial={false} to={"/login"} nameBtn={"Entrar"} />
      <DivContentRegister></DivContentRegister>
    </DivRegister>
  );
};

export default RecoverPassword;
