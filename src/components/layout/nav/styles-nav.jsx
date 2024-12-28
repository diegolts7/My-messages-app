import styled from "styled-components";

const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 7vh;
  padding-right: 7vh;
  width: 100%;
  height: 15vh;
  img {
    width: 80px;
    cursor: pointer;
  }
  button {
    padding: 13px;
    border-radius: 15px;
    border: none;
    width: 12vh;
    font-weight: bold;
    box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.4);
    color: ${(props) => (props.$isInitial ? "#00bfff" : "white")};
    background: ${(props) =>
      props.$isInitial
        ? "white"
        : "linear-gradient(135deg, #1e90ff, #00bfff, #add8e6)"};
    cursor: pointer;
    &:hover {
      transition: 0.2s ease;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
      color: #3a3a3a;
    }
  }
`;

export { DivNav };
