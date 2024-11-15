import { useContext } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";

const Home = () => {
  const { signOut } = useContext(ContextAuth);
  return (
    <div>
      <button onClick={signOut}>Deslogar</button>
    </div>
  );
};

export default Home;
