import styled from "styled-components";

const DivAboutBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
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

const AboutBody = () => {
  return (
    <DivAboutBody>
      <DivInfo>
        <h1>Sobre o My messages</h1>
        <p>
          My Messages é uma aplicação de mensagens moderna e intuitiva,
          projetada para oferecer uma comunicação rápida, segura e conectada
          entre amigos, colegas e comunidades. Com uma interface amigável em
          tons de azul e branco, a plataforma promove uma experiência de chat
          fluida, garantindo que você possa compartilhar mensagens, fotos e
          momentos importantes com facilidade.
        </p>
        <p>
          Inspirada por designs minimalistas e eficientes, My Messages busca
          simplificar a comunicação digital, mantendo o foco no usuário e na
          privacidade de suas conversas. Seja para chats rápidos ou conversas
          importantes, My Messages é a solução perfeita para se manter conectado
          com quem importa.
        </p>
      </DivInfo>
      <DivImg>
        <img
          src="/src/assets/imagemInfo.jpg"
          alt="imagem meramente ilustrativa"
        />
      </DivImg>
    </DivAboutBody>
  );
};

export default AboutBody;
