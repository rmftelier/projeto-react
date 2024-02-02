import { Container, Typography, Button } from "@mui/material";

const PaginaInicial = () => {

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 4 }}>
        Bem-vindo à Página Principal
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Este é o conteúdo principal do seu site.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Clique em Mim
      </Button>
    </Container>
  );

};

export default PaginaInicial;