import { useContext, useEffect, useRef, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import styled from "styled-components";
import CreateMessage from "../../layout/createMessage/CreateMessage";
import ConteinerMessages from "../../layout/conteinerMessages/ConteinerMessages";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";
import ModalCreateMessage from "../../layout/modalCreateMessage/ModalCreateMessage";
import { IoMdAdd } from "react-icons/io";

const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`;

const DivBtnOpenModalCreateMessage = styled.div`
  position: sticky;
  bottom: 6vh;
  align-self: flex-end;
  margin-right: 4vh;
  width: fit-content;
  z-index: 10;

  button {
    padding: 13px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
  }

  button:hover {
    transform: scale(1.1);
    color: black;
  }
`;

const Home = () => {
  const { signOut, token } = useContext(ContextAuth);
  const messagesRoutes = new MessageRoutes(token);
  const [openModalCreateMessage, setOpenModalCreateMessage] = useState(false);
  const [listMessages, setListMessages] = useState([]);
  const [loadingMessagesFeed, setLoadingMessagesFeed] = useState(true);
  const divHomeRef = useRef(null);
  const divCreateMessageRef = useRef(null);
  const [isIconOpenCreateMessage, setIsIconOpenCreateMessage] = useState(false);

  useEffect(() => {
    const div = divHomeRef.current;
    const divCreateMessage = divCreateMessageRef.current;

    function checkScroll() {
      if (div && divCreateMessage) {
        const topBottomHome = divHomeRef.current.getBoundingClientRect();
        const topBottomCreateMessage = divCreateMessage.getBoundingClientRect();
        if (topBottomHome.top > topBottomCreateMessage.bottom) {
          setIsIconOpenCreateMessage(true);
        } else {
          setIsIconOpenCreateMessage(false);
        }
      }
    }
    div?.addEventListener("scroll", checkScroll);

    return () => {
      div?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const pegarMessages = async () => {
    try {
      setLoadingMessagesFeed(true);
      const response = await messagesRoutes.getAllMessages();
      setListMessages(response.data);
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
    <>
      <DivHome ref={divHomeRef}>
        <div ref={divCreateMessageRef}>
          <CreateMessage pegarMessages={pegarMessages} isModal={false} />
        </div>

        <ConteinerMessages list={listMessages} loading={loadingMessagesFeed} />

        {isIconOpenCreateMessage && (
          <DivBtnOpenModalCreateMessage>
            <button onClick={() => setOpenModalCreateMessage(true)}>
              <IoMdAdd />
            </button>
          </DivBtnOpenModalCreateMessage>
        )}
      </DivHome>
      <ModalCreateMessage
        pegarMessages={pegarMessages}
        open={openModalCreateMessage}
        handleClose={() => setOpenModalCreateMessage(false)}
      />
    </>
  );
};

export default Home;
