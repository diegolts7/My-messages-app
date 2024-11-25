import React from "react";
import styled from "styled-components";
import Loading from "../../../../public/assets/authLoading.svg";

const DivAuthLoading = styled.div`
  margin: 0 auto;
  img {
    width: 30px;
  }
`;

const AuthLoading = () => {
  return (
    <>
      <DivAuthLoading>
        <img src={Loading} alt="loading auth" />
      </DivAuthLoading>
    </>
  );
};

export default AuthLoading;
