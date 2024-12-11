import React from "react";
import styled from "styled-components";
import { Box, CircularProgress } from "@mui/material";
import ModalMessage from "../modalMessage/ModalMessage";

const ConteinerPrincipal = styled.div`
  width: 100%;
`;

const ConteinerMessages = ({ list, loading }) => {
  return (
    <ConteinerPrincipal>
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2vh" }}
        >
          <CircularProgress size={20} />
        </Box>
      ) : list.length > 0 ? (
        list.map((message) => (
          <ModalMessage key={message._id} message={message} />
        ))
      ) : (
        <p>vazio</p>
      )}
    </ConteinerPrincipal>
  );
};

export default ConteinerMessages;
