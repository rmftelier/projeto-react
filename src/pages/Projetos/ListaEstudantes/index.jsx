import { useEffect, useState } from "react";
import { Formulario, ListaDeEstudantes, SubTitulo, Container } from "../../../components";
import { estudantes } from "../../../data/estudantes";


const ListaEstudantes = () => {
  const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);

  // onCreate
  useEffect(() => {
    if (listaStorage) {
      setLista(JSON.parse(listaStorage));
    }
  }, []);

  // onUpdate
  useEffect(() => {
    localStorage.setItem("estudantes", JSON.stringify(lista));
  }, [lista]);

  return (
    <Container
      boxProps={{
        padding: "60px",
        borderTop: "1px solid #000",
        height: "100%"
      }}
      stackProps={{
        alignItems: "center",
        gap: "20px"
      }}
    >
      <SubTitulo>Referências Negras</SubTitulo>
      <Formulario setLista={setLista} lista={lista} />
      <ListaDeEstudantes lista={lista} />
    </Container>
  );
};

export default ListaEstudantes;