import { useNavigate } from "react-router-dom";
import { DivNav } from "./styles-nav";
import Logo from "../../../../public/assets/logo.png";

const Nav = ({ isInitial, to, nameBtn }) => {
  const navigate = useNavigate();
  return (
    <DivNav $isInitial={isInitial}>
      <img src={Logo} alt="logo my messages" onClick={() => navigate("/")} />
      <button onClick={() => navigate(to)}>{nameBtn}</button>
    </DivNav>
  );
};

export default Nav;
