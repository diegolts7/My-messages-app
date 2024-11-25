import { useContext } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";

const Home = () => {
  const { signOut, user } = useContext(ContextAuth);
  return (
    <div>
      <button onClick={signOut}>Deslogar</button>
      <p>{user.name}</p>
    </div>
  );
};

export default Home;
