import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreateMessage from "../createMessage/CreateMessage";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { IconButton } from "@mui/material";

const DivSvgClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
  svg {
    font-size: 22px;
    cursor: pointer;
  }
`;

export default function ModalCreateMessage({
  open,
  handleClose,
  pegarMessages,
}) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 0,
          borderRadius: "15px",
          outline: "none",
        }}
      >
        <DivSvgClose>
          <IconButton onClick={handleClose}>
            <IoMdClose color="black" />
          </IconButton>
        </DivSvgClose>
        <CreateMessage pegarMessages={pegarMessages} isModal={true} />
      </Box>
    </Modal>
  );
}
