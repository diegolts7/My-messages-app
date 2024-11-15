import styled from "styled-components";

const DivFlashMessage = styled.div`
  p {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
  }
`;

const AuthFlashMessage = ({ message }) => {
  return (
    <>
      {message !== "" && (
        <DivFlashMessage>
          <p>{message}</p>
        </DivFlashMessage>
      )}
    </>
  );
};

export default AuthFlashMessage;
