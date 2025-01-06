import styled from "styled-components";

const DivLogin = styled.div`
  display: flex;

  flex-direction: column;
  background: linear-gradient(135deg, #ffffff, #f5f5f5, #e0e0e0);
`;

const DivFormLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 50vh;
  strong {
    font-size: 35px;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    color: #3a3a3a;
    text-align: center;
  }
`;

const ForgotPassword = styled.p`
  font-size: small;
  text-align: center;
  cursor: pointer;
  color: darkblue;
  &:hover {
    opacity: 0.7;
  }
`;

export { FormLogin, DivFormLogin, DivLogin, ForgotPassword };
