import styled from "styled-components";

const DivAboutBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
`;

const DivInfo = styled.div`
  display: flex;

  flex-direction: column;
  width: 60vh;
  gap: 1rem;
  h1 {
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    color: #3a3a3a;
  }
  p {
    letter-spacing: 1px;
    font-size: 14px;
    text-indent: 5px;
    text-align: justify;
    line-height: 1.6;
    color: #3a3a3a;
  }
`;

const DivImg = styled.div`
  img {
    width: 300px;
    border-radius: 20px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  }
`;

export { DivAboutBody, DivImg, DivInfo };
