import { Avatar, Box, Stack, Typography, List, ListItem } from "@mui/material";
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Intro = () => {
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(221, 89, 157, 0.17)",
          padding: "20px",
          borderBottom: "1px solid #000",
          paddingBottom: "3rem",
          paddingLeft: "2rem",
          paddingTop: "2rem",
        }}
      >

        <Stack
          sx={{
            width: "50rem",
            maxWidth: "95%",
          }}
        >
          <Typography variant="h1">
            Roberta Meyrelles
          </Typography>

          <Typography variant="h4">
            Bacharelanda em Ciência da Computação e
            Desenvolvedora Front-End.
          </Typography>

          <Typography
            sx={{
              '& a': {
                color: 'inherit',
                borderBottom: '2px solid transparent',
                transition: 'border-bottom 0.3s ease-in-out',
                '&:hover': {
                  borderBottom: '2px solid #000',
                },
              },
            }}
            variant="h4"
          >
            <Link href="/#sobreMim">Sobre mim</Link> / <Link component={RouterLink} to="/sobrePretaLab">Sobre PretaLab</Link>
          </Typography>



        </Stack>
        <Avatar
          alt="Sua Foto"
          src="eu.jpeg" // Substitua pelo caminho da sua imagem
          sx={{ width: 400, height: 430, marginRight: "1rem" }}
          variant="rounded"
        />
      </Box>
    </section>

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
          padding: "20px",
          paddingBottom: "3rem",
          paddingLeft: "2rem",
          paddingTop: "2rem",
        }}
      >

        <Stack
          sx={{
            width: "50rem",
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

const ListaTecnologias = () => {
  return (
    <List sx={{ display: 'flex', gap: '2px', }}>
      <ListItem sx={{ padding: "0px" }} >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5%",
            width: "100px", // Ajuste conforme necessário
            height: "50px", // Ajuste conforme necessário
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
            fontWeight: "600"
          }}
        >
          HTML
        </Box>
      </ListItem>
      <ListItem sx={{ padding: "0px" }} >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5%",
            width: "100px", // Ajuste conforme necessário
            height: "50px", // Ajuste conforme necessário
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
            fontWeight: "600"
          }}
        >
          CSS
        </Box>
      </ListItem>
      <ListItem sx={{ padding: "0px" }} >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5%",
            width: "100px", // Ajuste conforme necessário
            height: "50px", // Ajuste conforme necessário
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
            fontWeight: "600"
          }}
        >
          JavaScript
        </Box>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5%",
            width: "100px", // Ajuste conforme necessário
            height: "50px", // Ajuste conforme necessário
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
            fontWeight: "600",

          }}
        >
          React
        </Box>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5%",
            width: "100px", // Ajuste conforme necessário
            height: "50px", // Ajuste conforme necessário
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
            fontWeight: "600"
          }}
        >
          Chakra UI
        </Box>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5%",
            width: "100px", // Ajuste conforme necessário
            height: "50px", // Ajuste conforme necessário
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
            fontWeight: "600"
          }}
        >
          Material UI
        </Box>
      </ListItem>
    </List>
  );
}


const PaginaInicial = () => {
  return (
    <Stack direction="row">
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Intro />
        <SobreMim />
      </Box>
    </Stack>
  );
};

export default PaginaInicial;

