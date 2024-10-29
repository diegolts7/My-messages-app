import React from "react";
import styled from "styled-components";
import Nav from "../../layout/nav/Nav";

const DivInitial = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
  font-family: "Poppins", sans-serif;
`;

const Initial = () => {
  return (
    <DivInitial>
      <Nav />
    </DivInitial>
  );
};

export default Initial;
