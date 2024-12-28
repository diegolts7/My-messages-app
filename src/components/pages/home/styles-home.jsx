import styled from "styled-components";

const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`;

const DivBtnOpenModalCreateMessage = styled.div`
  position: sticky;
  bottom: 6vh;
  align-self: flex-end;
  margin-right: 4vh;
  width: fit-content;
  z-index: 10;

  button {
    padding: 13px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
  }

  button:hover {
    transform: scale(1.1);
    color: black;
  }
`;

export { DivBtnOpenModalCreateMessage, DivHome };
