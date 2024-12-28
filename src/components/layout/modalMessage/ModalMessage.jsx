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
import { formatDistanceToNow } from "date-fns";
import { IconButton, Tooltip } from "@mui/material";
import { TbCircleDashedCheck } from "react-icons/tb";
import { ptBR } from "date-fns/locale";
import { MoreHoriz } from "@mui/icons-material";
import {
  ParagrafoDate,
  DivCabecalhoMessage,
  DivContentMessage,
  DivDateAndIcons,
  DivDescricraoModalMessage,
  DivIconsInfoMessage,
  DivImgModalMessage,
  DivModalMessage,
} from "./StylesModalMessage";
import { ContextAuth } from "../../../context/authContext/AuthContext";

const ModalMessage = ({ message }) => {
  const { user } = useContext(ContextAuth);
  const [userImg, setUserImg] = useState(false);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(message.isLiked);

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
          <strong onClick={() => navigate(`/${message.owner._id}`)}>
            {message.owner.name}
            {message.owner.role === "admin" && (
              <TbCircleDashedCheck color="gray" />
            )}
          </strong>

          <Tooltip title="Ver mais">
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </Tooltip>
        </DivCabecalhoMessage>

        <DivContentMessage>
          <p>{message.content}</p>
        </DivContentMessage>

        <DivDateAndIcons>
          <ParagrafoDate>
            {formatDistanceToNow(new Date(message.createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </ParagrafoDate>

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
        </DivDateAndIcons>
      </DivDescricraoModalMessage>
    </DivModalMessage>
  );
};

export default ModalMessage;
