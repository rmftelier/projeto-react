import { List, ListItem, Box, Typography, Stack } from "@mui/material";


const Caixa = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "5%",
        width: "120px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #000",
        fontWeight: "600",
        fontFamily: "Lato",
        fontSize: "1rem"
      }}
    >
      {children}
    </Box>
  );
};


const ListaTecnologias = () => {
  return (
    <List sx={{ display: 'flex', gap: '2px', }}>
      <ListItem sx={{ padding: "0px" }} >
        <Caixa>HTML</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }} >
        <Caixa>CSS</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }} >
        <Caixa>JavaScript</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Caixa>React</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Caixa>Chakra UI</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Caixa>Material UI</Caixa>
      </ListItem>
    </List>
  );
}

const SobreMim = () => {
  return (
    <section id="sobreMim">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(163, 138, 187, 0.37)",
          padding: "60px"
        }}
      >

        <Stack
          sx={{
            width: "70rem",
            maxWidth: "95%",
          }}
        >
          <Typography variant="h2">
            Sobre Mim
          </Typography>
          <Typography variant="body">
            Olá! Eu sou Roberta Meyrelles França (pronomes: ela/dela), e
            atualmente sou Bacharelanda em Ciência da Computação pela Universidade
            Vila Velha (UVV) e Estagiária em Desenvolvimento de Sistemas no
            Ministério Público Do Estado Do Espírito Santo.
          </Typography>
          <Typography variant="body">
            Particularmente sou interessada em Desenvolvimento Front-End, área
            que estudo e pratico no estágio e paralelamente aos estudos da graduação.
            Principalmente sobre acessibilidade na web e a construção de protótipos e websites user-friendly.
            E tecnologias e abordagens que tratem sobre tecnologia ética, questões raciais e diversidade na área
            tecnológica.
          </Typography>
          <Typography variant="body">
            Durante o estágio tenho a oportunidade de exercer as seguintes
            atividades:
            <List>
              <ListItem>• Desenvolvimento de protótipos utilizando Figma e validação junto aos usuários;</ListItem>
              <ListItem>• Implementação e manutenção de novas funcionalidades com React.js, Chakra UI para a criação
                das interfaces gráficas e C# para a integração com o banco de dados. </ListItem>
            </List>
          </Typography>
          <Typography variant="h3"> Tecnologias </Typography>
          <ListaTecnologias />
        </Stack>
      </Box>
    </section>

  );
}

export default SobreMim;
