import { DivAboutBody, DivImg, DivInfo } from "./stylesAboutBody";
import ImgInfoBody from "../../../../public/assets/imagemInfo.jpg";

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
        <img src={ImgInfoBody} alt="imagem meramente ilustrativa" />
      </DivImg>
    </DivAboutBody>
  );
};

export default AboutBody;
