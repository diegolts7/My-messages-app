import { useContext } from "react";
import { ContextAuth } from "../../context/authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivatedRoutesNotLoggedIn = () => {
  const { isLoggedIn } = useContext(ContextAuth);

  return !isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/home"} />
  );
};

export default PrivatedRoutesNotLoggedIn;
