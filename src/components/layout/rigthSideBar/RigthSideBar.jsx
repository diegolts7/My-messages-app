import React from "react";
import styled from "styled-components";

const DivRigthSideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 30%;
  border: 1px solid #e0e0e0;
  margin-left: auto;
`;

const RigthSideBar = () => {
  return <DivRigthSideBar></DivRigthSideBar>;
};

export default RigthSideBar;
