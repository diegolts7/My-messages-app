import styled from "styled-components";

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

export { DivButton, DivButtonAndEmoji, DivCreateMessage, DivPicker, Form };
