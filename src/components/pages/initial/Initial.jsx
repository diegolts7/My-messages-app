import React from "react";
import styled from "styled-components";
import Nav from "../../layout/nav/Nav";
import Body from "../../layout/body/Body";
import Footer from "../../layout/footer/Footer";

const DivInitial = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
  font-family: "Poppins", sans-serif;
`;

const Initial = () => {
  return (
    <DivInitial>
      <Nav />
      <Body />
      <Footer />
    </DivInitial>
  );
};

export default Initial;
