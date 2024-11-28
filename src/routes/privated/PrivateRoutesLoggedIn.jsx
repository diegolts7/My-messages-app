import { useContext } from "react";
import { ContextAuth } from "../../context/authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import LeftSideBar from "../../components/layout/leftSideBar/LeftSideBar";
import styled from "styled-components";

const DivRoutesLoggedIn = styled.div`
  display: flex;
  background: linear-gradient(135deg, #ffffff, #f5f5f5, #e0e0e0);
`;

const PrivateRoutesLoggedIn = () => {
  const { isLoggedIn } = useContext(ContextAuth);
  return isLoggedIn ? (
    <DivRoutesLoggedIn>
      <LeftSideBar />
      <Outlet />
    </DivRoutesLoggedIn>
  ) : (
    <Navigate to={"/"} />
  );
};

export default PrivateRoutesLoggedIn;
