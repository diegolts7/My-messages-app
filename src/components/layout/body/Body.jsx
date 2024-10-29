import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const DivBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivInicioBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  background-color: transparent;
`;

const DivCentralInicioBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  button {
    margin: 0 auto;
    padding: 13px;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.4);
    color: #00bfff;

    cursor: pointer;
    &:hover {
      transition: 0.3s ease;
      box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
      scale: 1.1;
    }
  }
`;

const DivTexto = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 1rem;
  h1 {
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
    color: #ffffff;
  }
`;

const DivFimBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff, #f5f5f5, #e0e0e0);
`;

const Body = () => {
  const divRef = useRef(null);

  function scrolledPage() {
    divRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  function ImprimirTexto() {
    const [texto, setTexto] = useState("");
    const frases = ["Seu", "Nosso", "Mais completo", "My message"];

    useEffect(() => {
      let intervalo;
      let i = 0;
      const imprimir = () => {
        if (i < frases.length) {
          let indice = 0;

          intervalo = setInterval(() => {
            if (indice < frases[i].length) {
              setTexto(frases[i].slice(0, indice + 1));
              indice++;
            } else {
              clearInterval(intervalo);
              i++;
              if (i < frases.length) {
                setTimeout(imprimir, 500);
              } else {
                setTexto(frases[3]);
              }
            }
          }, 130);
        }
      };

      imprimir();

      return () => clearInterval(intervalo);
    }, []);

    return <h1 style={{ color: "black" }}>{texto}</h1>;
  }

  return (
    <DivBody>
      <DivInicioBody>
        <DivCentralInicioBody>
          <DivTexto>
            <h1>Bem vindo ao</h1> {ImprimirTexto()}
          </DivTexto>
          <button onClick={scrolledPage}>Veja mais sobre nós</button>
        </DivCentralInicioBody>
      </DivInicioBody>
      <DivFimBody ref={divRef}></DivFimBody>
    </DivBody>
  );
};

export default Body;
