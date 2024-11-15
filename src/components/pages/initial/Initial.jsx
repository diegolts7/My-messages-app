import styled from "styled-components";
import Nav from "../../layout/nav/Nav";
import Body from "../../layout/body/Body";

const DivInitial = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
`;

const Initial = () => {
  return (
    <DivInitial>
      <Nav isInitial={true} to={"/login"} nameBtn={"Entrar"} />
      <Body />
    </DivInitial>
  );
};

export default Initial;
