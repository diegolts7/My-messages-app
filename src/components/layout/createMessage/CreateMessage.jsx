import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { MessageRoutes } from "../../../provider/api/messageRoutes/MessageRoutes";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import SimpleAlert from "../simpleAlert/SimpleAlert";
import { CircularProgress } from "@mui/material";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const DivCreateMessage = styled.div`
  display: flex;
  width: 100%;
  border-top: ${(props) => (!props.$isModal ? "1px solid #e0e0e0" : "none")};
  border-bottom: ${(props) => (!props.$isModal ? "1px solid #e0e0e0" : "none")};
  padding: ${(props) => (!props.$isModal ? "6px" : "none")};
`;

const Form = styled.form`
  display: flex;
  width: 100%;

  flex-direction: column;
  textarea {
    padding: 25px;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 18px;
    height: auto;
    resize: none;
    overflow: hidden;
    font-family: "Arial", sans-serif;
    color: #555555;
  }
`;

const DivButton = styled.div`
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

const DivButtonAndEmoji = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  svg {
    font-size: 22px;
    cursor: pointer;
  }
`;

const DivPicker = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
`;

const CreateMessage = ({ pegarMessages, isModal }) => {
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
  return (
    <>
      <DivCreateMessage $isModal={isModal}>
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
          <DivButtonAndEmoji>
            <HiOutlineEmojiHappy
              color="#00bfff"
              onClick={handlePickerVisible}
            />
            {isPickerVisible && (
              <DivPicker>
                <Picker
                  data={data}
                  previewPosition="none"
                  onEmojiSelect={(e) =>
                    setTextMessage((before) => before + e.native)
                  }
                />
              </DivPicker>
            )}
            <DivButton>
              {!loadingCreateMessage ? (
                <button type="submit">Postar</button>
              ) : (
                <CircularProgress size={18} />
              )}
            </DivButton>
          </DivButtonAndEmoji>
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
