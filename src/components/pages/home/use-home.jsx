import { useContext, useEffect, useRef, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";

export const useHome = () => {
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

  return {
    divHomeRef,
    divCreateMessageRef,
    pegarMessages,
    listMessages,
    loadingMessagesFeed,
    isIconOpenCreateMessage,
    setOpenModalCreateMessage,
    openModalCreateMessage,
  };
};
