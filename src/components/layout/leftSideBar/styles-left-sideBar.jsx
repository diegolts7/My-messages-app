import styled from "styled-components";

const DivLeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 0 0 30%;
  border: 1px solid #e0e0e0;
  padding-top: 8vh;
  align-items: center;
`;

const DivOptionsSideBar = styled.div`
  display: flex;
  gap: 1rem;
  width: fit-content;
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  svg {
    font-size: 30px;
    color: #00bfff; //linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
  }
  p {
    font-size: 20px;
    color: gray;
    font-weight: ${(props) => (props.$iconPageFill ? "bold" : "ligther")};
  }
  &:hover {
    transition: 0.1s ease-in;
    background-color: #e0e0e0;
  }
`;

const DivProfile = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2vh;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  svg {
    font-size: 40px;
    color: #dcd8d8;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &:hover {
    transition: 0.1s ease-in;
    background-color: #e0e0e0;
    svg {
      color: gray;
    }
  }
`;

const DivNameProfile = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 13px;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    svg {
      font-size: 15px;
    }
  }
  p {
    font-size: 13px;
    color: gray;
  }
`;

const DivSvgMoreInformProfile = styled.div`
  svg {
    font-size: 20px;
    color: gray;
  }
`;

export {
  DivLeftSideBar,
  DivOptionsSideBar,
  DivSvgMoreInformProfile,
  DivProfile,
  DivNameProfile,
};
