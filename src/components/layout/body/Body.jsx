import { useEffect, useRef, useState } from "react";
import {
  DivFimBody,
  TextoAux,
  DivCentralInicioBody,
  DivBody,
  DivInicioBody,
  DivTexto,
} from "./Body.styled";
import ImprimirTexto from "../../../hooks/imprimirTexto/ImprimirTexto";
import AboutBody from "../aboutBody/AboutBody";

import ScrollTop from "../scrollTop/ScrollTop";
import { useBody } from "./useBody";

const Body = () => {
  const { divRef, isScrollTop, scrolledPage } = useBody();

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
      <DivFimBody ref={divRef}>
        <AboutBody />
      </DivFimBody>
      {isScrollTop && <ScrollTop />}
    </DivBody>
  );
};

export default Body;
