import SimpleAlert from "../simpleAlert/SimpleAlert";
import { CircularProgress } from "@mui/material";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  DivButton,
  DivButtonAndEmoji,
  DivCreateMessage,
  DivPicker,
  Form,
} from "./styles-create-message";
import { useCreateMessage } from "./useCreateMessage";

const CreateMessage = ({ pegarMessages, isModal }) => {
  const {
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
  } = useCreateMessage(pegarMessages);

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
