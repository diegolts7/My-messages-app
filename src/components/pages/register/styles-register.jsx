import styled from "styled-components";

const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff, #f5f5f5, #e0e0e0);
`;

const DivContentRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

const DivCentralRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vh;
  strong {
    font-size: 35px;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    color: #3a3a3a;
    text-align: center;
  }
`;

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
  p {
    font-size: small;
    text-align: center;
    cursor: pointer;
    color: darkblue;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const ButtonRegister = styled.button`
  background: linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
  border: none;
  padding: 13px;
  border-radius: 5px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  &:hover {
    opacity: 0.7;
  }
  svg {
    font-size: 15px;
  }
`;

const InputRegister = styled.input`
  border: none;
  padding: 13px;
  background-color: inherit;
  border: 1px solid #a6a6a6;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  &:focus {
    outline: 2px solid #8c8c8c;
  }
`;

const InfoSteps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p {
    letter-spacing: 1px;
    font-size: small;
    color: #555555;
  }

  svg {
    color: #1e90ff;
  }
`;

export {
  FormRegister,
  DivCentralRegister,
  DivRegister,
  ButtonRegister,
  InputRegister,
  DivContentRegister,
  InfoSteps,
};
