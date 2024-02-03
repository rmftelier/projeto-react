import { Avatar, Box, Stack, Typography, List, ListItem } from "@mui/material";

const Intro = () => {
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(221, 89, 157, 0.17)",
          height: "500px",
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
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: "6rem",
              position: "relative",
              maxWidth: "10ch",
              lineHeight: "110%",
              fontWeight: "900",
              textShadow: "1px 1px 0px #000000",
              marginBottom: "2rem",
            }}
          >
            Roberta Meyrelles
          </Typography>
          <Typography
            sx={{
              fontSize: "1.75rem",
              maxWidth: "42rem",
              fontFamily: "Lato",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
            variant="h2"
          >
            I'm an experienced independent developer, designer and educator.
            I specialize in building accessible and inclusive products, and
            have a particular focus on dataviz accessibility.
          </Typography>
          <Typography
            sx={{
              fontSize: "1.75rem",
              maxWidth: "42rem",
              fontFamily: "Lato",
              fontWeight: "500",
            }}
            variant="h2"
          >
            Sobre mim / Sobre PretaLab
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
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(163, 138, 187, 0.37)",
          height: "500px",
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
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: "3.5rem",
              position: "relative",
              maxWidth: "10ch",
              lineHeight: "110%",
              fontWeight: "900",
              textShadow: "1px 1px 0px #000000",
              marginBottom: "2rem",
            }}
          >
            Sobre Mim
          </Typography>
          <Typography
            sx={{
              fontSize: "1.75rem",
              fontFamily: "Lato",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
            variant="h2"
          >
            I'm an experienced independent developer, designer and educator.
            I specialize in building accessible and inclusive products, and
            have a particular focus on dataviz accessibility.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: "2.2rem",
              position: "relative",
              maxWidth: "10ch",
              lineHeight: "110%",
              fontWeight: "900",
              marginBottom: "2rem",
            }}
          >
            Tecnologias
          </Typography>

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

