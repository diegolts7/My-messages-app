import { useRef } from "react";
import {
  DivFimBody,
  TextoAux,
  DivCentralInicioBody,
  DivBody,
  DivInicioBody,
  DivTexto,
} from "./Body.styled";
import ImprimirTexto from "../../../hooks/imprimirTexto/ImprimirTexto";

const Body = () => {
  const divRef = useRef(null);

  function scrolledPage() {
    divRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <DivBody>
      <DivInicioBody>
        <DivCentralInicioBody>
          <DivTexto>
            <p>Bem vindo ao </p>
            <p style={{ color: "#3a3a3a" }}>{ImprimirTexto()}</p>
          </DivTexto>
          <TextoAux>
            Um aplicativo de mensagens inovador e super intuitivo.
          </TextoAux>
          <button onClick={scrolledPage}>Veja mais sobre nós</button>
        </DivCentralInicioBody>
      </DivInicioBody>
      <DivFimBody ref={divRef}></DivFimBody>
    </DivBody>
  );
};

export default Body;
