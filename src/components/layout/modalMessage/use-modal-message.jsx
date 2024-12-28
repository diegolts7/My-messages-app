import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useModalMessage = (message) => {
  const [userImg, setUserImg] = useState(false);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(message.isSaved);
  const [isLiked, setIsLiked] = useState(message.isLiked);

  const handleSave = () => {
    setIsFavorite((before) => !before);
  };

  const handleLike = () => {
    setIsLiked((before) => !before);
  };

  return {
    userImg,
    navigate,
    isFavorite,
    isLiked,
    handleSave,
    handleLike,
  };
};
