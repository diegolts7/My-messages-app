import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";
import { ContextAuth } from "../../../context/authContext/AuthContext";

export const useModalMessage = (message) => {
  const [userImg, setUserImg] = useState(
    message?.owner?.profileImg?.srcImg || null
  );
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(message.isSaved);
  const [isLiked, setIsLiked] = useState(message.isLiked);
  const { token } = useContext(ContextAuth);
  const messageRoutes = new MessageRoutes(token);
  const [stateToastMessage, setStateToastMessage] = useState({
    open: false,
    isAlert: false,
  });
  const [messageToastMessage, setMessageToastMessage] = useState("");

  const handleClickAndSetMessageToastMessage = (message, isAlert = true) => {
    setMessageToastMessage(message);
    setStateToastMessage({
      open: true,
      isAlert,
    });
  };

  const handleCloseToastMessage = () => {
    setStateToastMessage((before) => ({
      ...before,
      open: false,
    }));
  };

  const likeMSG = async () => {
    try {
      await messageRoutes.likeMessage(message._id);
      handleClickAndSetMessageToastMessage("voce curtiu", false);
    } catch (error) {
      console.error(error);
      handleClickAndSetMessageToastMessage(error.response.data.msg);
      setIsLiked(false);
    }
  };

  const deslikeMSG = async () => {
    try {
      await messageRoutes.deslikeMessage(message._id);
    } catch (error) {
      console.error(error);
      handleClickAndSetMessageToastMessage(error.response.data.msg);
      setIsLiked(true);
    }
  };

  const saveMSG = async () => {
    try {
      await messageRoutes.saveMessage(message._id);
    } catch (error) {
      console.error(error);
      handleClickAndSetMessageToastMessage(error.response.data.msg);
      setIsFavorite(false);
    }
  };

  const discardMSG = async () => {
    try {
      await messageRoutes.discardMessage(message._id);
    } catch (error) {
      console.error(error);
      handleClickAndSetMessageToastMessage(error.response.data.msg);
      setIsFavorite(true);
    }
  };

  const handleLike = async () => {
    if (!isLiked) {
      setIsLiked(true);
      await likeMSG();
      return;
    }

    setIsLiked(false);
    await deslikeMSG();
  };

  const handleSave = async () => {
    if (!isFavorite) {
      setIsFavorite(true);
      await saveMSG();
      return;
    }

    setIsFavorite(false);
    await discardMSG();
  };

  return {
    userImg,
    navigate,
    isFavorite,
    isLiked,
    handleSave,
    handleLike,
    messageToastMessage,
    stateToastMessage,
    handleCloseToastMessage,
  };
};
