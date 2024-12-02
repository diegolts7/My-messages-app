import { useContext, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import styled from "styled-components";
import CreateMessage from "../../layout/createMessage/CreateMessage";

const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Home = () => {
  const { signOut, user } = useContext(ContextAuth);
  const [userImg, setUserImg] = useState(
    user.profileImg.srcImg ? user.profileImg.srcImg : null
  );
  return (
    <DivHome>
      <CreateMessage />
      <p>{user.name}</p>
    </DivHome>
  );
};

export default Home;
