import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { Checkbox, IconButton, Slide, Tooltip } from "@mui/material";
import { TbCircleCheckFilled } from "react-icons/tb";
import { ptBR } from "date-fns/locale";
import {
  BarChart,
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  MoreHoriz,
} from "@mui/icons-material";
import {
  ParagrafoDate,
  DivCabecalhoMessage,
  DivContentMessage,
  DivDateAndIcons,
  DivDescricraoModalMessage,
  DivIconsInfoMessage,
  DivImgModalMessage,
  DivModalMessage,
  DivUsernameAndHandleCabecalho,
} from "./styles-modal-message";
import { useModalMessage } from "./use-modal-message";
import ToastMessage from "../toastMessage/ToastMessage";

const ModalMessage = ({ message }) => {
  const {
    userImg,
    navigate,
    isFavorite,
    isLiked,
    handleSave,
    handleLike,
    messageToastMessage,
    stateToastMessage,
    handleCloseToastMessage,
  } = useModalMessage(message);

  return (
    <>
      <DivModalMessage>
        <DivImgModalMessage>
          {userImg ? (
            <img src={userImg} alt="profile image" />
          ) : (
            <FaUserCircle />
          )}
        </DivImgModalMessage>

        <DivDescricraoModalMessage>
          <DivCabecalhoMessage>
            <DivUsernameAndHandleCabecalho
              onClick={() => navigate(`/${message.owner._id}`)}
            >
              <strong>
                {message.owner.name}
                {message.owner.role === "admin" && (
                  <TbCircleCheckFilled color="#007bff" />
                )}
              </strong>
              <p>{`@${message.owner.handle}`}</p>
            </DivUsernameAndHandleCabecalho>

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
              <Tooltip title={isLiked ? "Descurtir" : "Curtir"}>
                <Checkbox
                  checked={isLiked}
                  onChange={handleLike}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="#FF3040" />}
                />
              </Tooltip>

              <Tooltip title={isFavorite ? "Desfazer" : "Salvar"}>
                <Checkbox
                  checked={isFavorite}
                  onChange={handleSave}
                  icon={<BookmarkBorder />}
                  checkedIcon={<Bookmark />}
                />
              </Tooltip>

              <Tooltip title={"Sobre"}>
                <IconButton>
                  <BarChart />
                </IconButton>
              </Tooltip>
            </DivIconsInfoMessage>
          </DivDateAndIcons>
        </DivDescricraoModalMessage>
      </DivModalMessage>
      <ToastMessage
        state={stateToastMessage}
        handleClose={handleCloseToastMessage}
        message={messageToastMessage}
      />
    </>
  );
};

export default ModalMessage;
