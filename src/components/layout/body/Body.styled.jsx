import styled from "styled-components";

const DivBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivInicioBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  background-color: transparent;
`;

const DivCentralInicioBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  button {
    margin-top: 2vh;
    padding: 13px;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.4);
    color: #00bfff;

    cursor: pointer;
    &:hover {
      transition: 0.3s ease;
      box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
      scale: 1.05;
    }
  }
`;

const DivTexto = styled.div`
  display: flex;

  gap: 1rem;
  p {
    color: #f0f4f8;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
  }
`;

const TextoAux = styled.p`
  color: white;
  letter-spacing: 2px;
  font-size: 14px;
`;

const DivFimBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff, #f5f5f5, #e0e0e0);
`;

export {
  DivFimBody,
  TextoAux,
  DivCentralInicioBody,
  DivBody,
  DivInicioBody,
  DivTexto,
};
