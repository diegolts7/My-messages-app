import { useContext, useEffect, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import styled from "styled-components";
import CreateMessage from "../../layout/createMessage/CreateMessage";
import ConteinerMessages from "../../layout/conteinerMessages/ConteinerMessages";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";

const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow-y: auto;
`;

const Home = () => {
  const messagesRoutes = new MessageRoutes();
  const { signOut, user, token } = useContext(ContextAuth);
  const [listMessages, setListMessages] = useState([]);
  const [loadingMessagesFeed, setLoadingMessagesFeed] = useState(true);

  const pegarMessages = async () => {
    try {
      setLoadingMessagesFeed(true);
      const response = await messagesRoutes.getAllMessages(token);
      setListMessages(response.data);
      console.log(response);
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        signOut();
      }
    } finally {
      setLoadingMessagesFeed(false);
    }
  };

  useEffect(() => {
    pegarMessages();
  }, []);

  return (
    <DivHome>
      <CreateMessage />
      <ConteinerMessages list={listMessages} loading={loadingMessagesFeed} />
    </DivHome>
  );
};

export default Home;
