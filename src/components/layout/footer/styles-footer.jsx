import styled from "styled-components";

const DivFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 30vh;
  background: linear-gradient(180deg, #3a3a3a, #2c2c2c, #1a1a1a);
  color: #a6a6a6;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`;

const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  strong {
    font-size: 14px;
    text-align: center;
    color: #a6a6a6;
  }
  p {
    font-size: 12px;
    color: #8c8c8c;
    text-align: center;
  }
`;

const DivIcons = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 0.5rem;
  a {
    margin: 0 auto;

    color: #a6a6a6;
  }
`;

export { DivFooter, DivIcons, DivInfo };
