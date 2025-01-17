import styled from "styled-components";

const DivModalMessage = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  gap: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

const DivImgModalMessage = styled.div`
  display: flex;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    justify-content: start;
  }
  svg {
    font-size: 40px;
    color: #e0e0e0;
  }
`;

const DivCabecalhoMessage = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const DivUsernameAndHandleCabecalho = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: black;
    font-size: 14px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    svg {
      font-size: 15px;
    }
  }
  p {
    font-size: 12px;
    color: gray;
    cursor: pointer;
  }
`;

const DivDescricraoModalMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const DivContentMessage = styled.div`
  p {
    color: #14171a;
  }
`;

const DivIconsInfoMessage = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    font-size: 20px;
    color: #00bfff;
    cursor: pointer;
  }
`;

const DivDateAndIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ParagrafoDate = styled.p`
  color: #cac6c6;
  font-size: 11px;
  font-weight: bold;
`;

export {
  ParagrafoDate,
  DivCabecalhoMessage,
  DivContentMessage,
  DivDateAndIcons,
  DivDescricraoModalMessage,
  DivIconsInfoMessage,
  DivImgModalMessage,
  DivModalMessage,
  DivUsernameAndHandleCabecalho,
};
