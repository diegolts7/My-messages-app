import { useContext, useRef, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";

export const useCreateMessage = (pegarMessages) => {
  const { token, signOut } = useContext(ContextAuth);
  const textareaRef = useRef(null);
  const [textMessage, setTextMessage] = useState("");
  const messagesRoutes = new MessageRoutes(token);
  const [messageInfoOperation, setMessageInfoOperation] = useState("");
  const [openModalFlashMessage, setOpenModalFlashMessage] = useState(false);
  const [typeMessageInfoOperation, setTypeMessageInfoOperation] = useState("");
  const [loadingCreateMessage, setLoadingCreateMessage] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const handlePickerVisible = () => {
    setIsPickerVisible((before) => !before);
  };

  const handleMessage = (message, type) => {
    setTypeMessageInfoOperation(type);
    setMessageInfoOperation(message);
    setOpenModalFlashMessage(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (textMessage.length < 1 || textMessage.trim() === "") {
      setTextMessage("");
      return;
    }

    try {
      setLoadingCreateMessage(true);
      const response = await messagesRoutes.createOneMessage(textMessage);
      setTextMessage("");
      handleMessage(response.data.msg, "success");
      pegarMessages();
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        signOut();
      }
      handleMessage(error.response.data.msg, "warning");
    } finally {
      setLoadingCreateMessage(false);
    }
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return {
    handleSubmit,
    textareaRef,
    handleInput,
    textMessage,
    setTextMessage,
    handlePickerVisible,
    isPickerVisible,
    loadingCreateMessage,
    openModalFlashMessage,
    setOpenModalFlashMessage,
    messageInfoOperation,
    typeMessageInfoOperation,
  };
};
