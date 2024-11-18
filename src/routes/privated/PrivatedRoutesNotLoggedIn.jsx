import { useContext } from "react";
import { ContextAuth } from "../../context/authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer/Footer";

const PrivatedRoutesNotLoggedIn = () => {
  const { isLoggedIn } = useContext(ContextAuth);

  return !isLoggedIn ? (
    <>
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to={"/home"} />
  );
};

export default PrivatedRoutesNotLoggedIn;
