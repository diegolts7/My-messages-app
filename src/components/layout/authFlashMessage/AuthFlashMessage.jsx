import { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    if (message !== "") {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      {isVisible && (
        <DivFlashMessage>
          <p>{message}</p>
        </DivFlashMessage>
      )}
    </>
  );
};

export default AuthFlashMessage;
