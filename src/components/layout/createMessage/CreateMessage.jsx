import React, { useRef } from "react";
import styled from "styled-components";

const DivCreateMessage = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #e0e0e0;

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
  button {
    margin-left: auto;
    padding: 10px;
    background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
    border: none;
    border-radius: 15px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`;

const CreateMessage = () => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <DivCreateMessage>
      <Form onSubmit={(e) => e.preventDefault()}>
        <textarea
          ref={textareaRef}
          type="text"
          placeholder="Diga o que está acontecendo?"
          onInput={handleInput}
          rows={1}
          maxLength={200}
        />
        <button type="submit">Postar</button>
      </Form>
    </DivCreateMessage>
  );
};

export default CreateMessage;
