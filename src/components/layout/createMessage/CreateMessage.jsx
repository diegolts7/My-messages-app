import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import SimpleAlert from "../simpleAlert/SimpleAlert";
import { CircularProgress } from "@mui/material";
import LinearIndeterminate from "../linearIndeterminate/LinearIndeterminate";

const DivCreateMessage = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;

  flex-direction: column;
  textarea {
    padding: 10px;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 18px;
    height: auto;
    resize: none;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    color: #555555;
  }
`;

const DivButton = styled.div`
  margin-left: auto;
  button {
    padding: 10px;
    background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
    border: none;
    border-radius: 15px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const CreateMessage = ({ pegarMessages }) => {
  const { token, signOut } = useContext(ContextAuth);
  const textareaRef = useRef(null);
  const [textMessage, setTextMessage] = useState("");
  const messagesRoutes = new MessageRoutes(token);
  const [messageInfoOperation, setMessageInfoOperation] = useState("");
  const [openModalFlashMessage, setOpenModalFlashMessage] = useState(false);
  const [typeMessageInfoOperation, setTypeMessageInfoOperation] = useState("");
  const [loadingCreateMessage, setLoadingCreateMessage] = useState(false);

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
  return (
    <>
      <DivCreateMessage>
        <Form onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            type="text"
            placeholder="Diga o que está acontecendo?"
            onInput={handleInput}
            rows={1}
            maxLength={200}
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
          <DivButton>
            {!loadingCreateMessage ? (
              <button type="submit">Postar</button>
            ) : (
              <CircularProgress size={18} />
            )}
          </DivButton>
        </Form>
      </DivCreateMessage>
      <SimpleAlert
        open={openModalFlashMessage}
        handleClose={() => setOpenModalFlashMessage(false)}
        text={messageInfoOperation}
        type={typeMessageInfoOperation}
      />
    </>
  );
};

export default CreateMessage;
