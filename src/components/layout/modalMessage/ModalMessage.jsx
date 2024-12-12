import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  GoBookmark,
  GoBookmarkFill,
  GoHeart,
  GoHeartFill,
} from "react-icons/go";
import { format } from "date-fns";
import { IconButton, Tooltip } from "@mui/material";
import { TbCircleDashedCheck } from "react-icons/tb";

const DivModalMessage = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  gap: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

const DivImgModalMessage = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: start;
  }
  svg {
    font-size: 35px;
    color: #e0e0e0;
  }
`;

const DivCabecalhoMessage = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  strong {
    color: #007bff;
    font-size: 13px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: #d2cdcd;
    font-size: 11px;
    font-weight: bold;
  }
`;

const DivDescricraoModalMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const DivContentMessage = styled.div`
  p {
    color: #444455;
  }
`;

const DivIconsInfoMessage = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  svg {
    font-size: 23px;
    color: #00bfff;
    cursor: pointer;
  }
`;

const ModalMessage = ({ message }) => {
  const [userImg, setUserImg] = useState(false);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleSave = () => {
    setIsFavorite((before) => !before);
  };

  const handleLike = () => {
    setIsLiked((before) => !before);
  };

  return (
    <DivModalMessage>
      <DivImgModalMessage>
        {userImg ? <img src={userImg} alt="profile image" /> : <FaUserCircle />}
      </DivImgModalMessage>
      <DivDescricraoModalMessage>
        <DivCabecalhoMessage>
          <strong onClick={() => navigate(`/${message.ownerId}`)}>
            {message.ownerName}
            <TbCircleDashedCheck color="gray" />
          </strong>
          <p>{format(new Date(message.createdAt), "dd/MM/yyyy HH:mm:ss")}</p>
        </DivCabecalhoMessage>
        <DivContentMessage>
          <p>{message.content}</p>
        </DivContentMessage>
        <DivIconsInfoMessage>
          {isLiked ? (
            <Tooltip title="Descurtir" arrow>
              <IconButton onClick={handleLike}>
                <GoHeartFill color="#FF3040" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Curtir" arrow>
              <IconButton onClick={handleLike}>
                <GoHeart />
              </IconButton>
            </Tooltip>
          )}
          {isFavorite ? (
            <Tooltip title="Desfavoritar" arrow>
              <IconButton onClick={handleSave}>
                <GoBookmarkFill />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Favoritar" arrow>
              <IconButton onClick={handleSave}>
                <GoBookmark />
              </IconButton>
            </Tooltip>
          )}
        </DivIconsInfoMessage>
      </DivDescricraoModalMessage>
    </DivModalMessage>
  );
};

export default ModalMessage;
