import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding-left: 7vh;
  padding-right: 7vh;
  width: 100%;
  height: 15vh;
  img {
    width: 65px;
  }
  button {
    padding: 13px;
    border-radius: 15px;
    border: none;
    width: 12vh;
    font-weight: bold;
    box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.4);
    color: #1e90ff;
    cursor: pointer;
    &:hover {
      transition: 0.3s ease;
      box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
      scale: 1.1;
      color: #00bfff;
    }
  }
`;

const Nav = () => {
  return (
    <DivNav>
      <img
        src="/src/assets/WhatsApp_Image_2024-10-29_at_4.29.58_PM-removebg-preview (1).png"
        alt="logo my messages"
      />
      <button onClick={<Navigate to={"/login"} />}>Entrar</button>
    </DivNav>
  );
};

export default Nav;
