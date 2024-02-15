import { Box, Typography } from "@mui/material";
import { Botao, Container, SubTitulo } from "../../../components";
import { useState } from "react";

const Contador = () => {

  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor((valorAnterior) => valorAnterior + 1);
  };

  const decrementar = () => {
    setValor((valorAnterior) => valorAnterior - 1);
  };

  const resetar = () => {
    setValor(0);
  };

  return (
    <Container
      boxProps={{
        padding: "60px",
        borderTop: "1px solid #000",
        height: "660px"
      }}
      stackProps={{
        maxWidth: "70rem",
        alignItems: "center"
      }}
    >
      <SubTitulo>Contador</SubTitulo>

      <Box sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "55px",
        padding: "60px 20px"
      }}>
        <Botao texto="-" acao={decrementar}></Botao>
        <Typography sx={{
          fontSize: "50px"
        }}>{valor}</Typography>
        <Botao texto="+" acao={incrementar}></Botao>
      </Box>
      <Botao texto="Reiniciar" acao={resetar}></Botao>
    </Container>
  );
};

export default Contador;