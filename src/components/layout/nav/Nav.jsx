import { useNavigate } from "react-router-dom";
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
    width: 80px;
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
      transition: 0.2s ease;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
      color: #3a3a3a;
    }
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  return (
    <DivNav>
      <img src="/src/assets/logo.png" alt="logo my messages" />
      <button onClick={() => navigate("/login")}>Entrar</button>
    </DivNav>
  );
};

export default Nav;
