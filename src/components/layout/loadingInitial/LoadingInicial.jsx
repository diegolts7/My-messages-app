import React from "react";
import LinearIndeterminate from "../linearIndeterminate/LinearIndeterminate";
import styled from "styled-components";
import Logo from "../../../../public/assets/logo.png";

const DivLoadingInitial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    width: 200px;
    animation: blink-animation 1.5s infinite;
  }
  @keyframes blink-animation {
    0%,
    100% {
      opacity: 0.2; /* Imagem apagada */
    }
    50% {
      opacity: 0.8; /* Imagem acesa */
    }
  }
`;

const LoadingInicial = () => {
  return (
    <>
      <LinearIndeterminate />
      <DivLoadingInitial>
        <img src={Logo} alt="" />
      </DivLoadingInitial>
    </>
  );
};

export default LoadingInicial;
