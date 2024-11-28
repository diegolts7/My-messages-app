import { useContext, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";

const Home = () => {
  const { signOut, user } = useContext(ContextAuth);
  const [userImg, setUserImg] = useState(
    user.profileImg.srcImg ? user.profileImg.srcImg : null
  );
  return (
    <div>
      <button onClick={signOut}>Deslogar</button>
      <p>{user.name}</p>
    </div>
  );
};

export default Home;
