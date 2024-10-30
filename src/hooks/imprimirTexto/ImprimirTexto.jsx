import { useEffect, useState } from "react";

function ImprimirTexto() {
  const [texto, setTexto] = useState("");
  const frases = ["Seu", "Nosso", "Mais completo", "My messages"];

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

  return <>{texto}</>;
}

export default ImprimirTexto;
