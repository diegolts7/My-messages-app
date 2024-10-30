import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const DivButtonScroll = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: fixed;
  margin-top: 90vh;
  margin-left: 95%;
  background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
  color: #ffffff;
  border: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  svg {
    font-size: 13px;
  }
  &:hover {
    color: #3a3a3a;
    transition: 0.2s;
  }
`;

const ScrollTop = () => {
  return (
    <DivButtonScroll
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </DivButtonScroll>
  );
};

export default ScrollTop;
