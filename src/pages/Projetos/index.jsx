import { useState } from "react";
import { Box, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ProjectCard = ({ title, description, link }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          p: 2,
          border: 1,
          borderColor: "#000",
          borderRadius: 5,
          textAlign: "center",
          backgroundColor: "#c28fa0",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center", color: "#8b0000" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#fff" }}>
          {description}
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpenModal}>
          Ver Projeto
        </Button>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{description}</Typography>
          </DialogContent>
          <DialogActions>
            <Button component={RouterLink} to={link} variant="contained" color="secondary" onClick={handleCloseModal}>
              Ver Detalhes
            </Button>
            <Button onClick={handleCloseModal} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
};

const Projetos = () => {
  const projects = [
    {
      title: "Lista de Pokemons",
      description: "Uma lista de Pokemons desenvolvida no PretaLab.",
      link: "/lista-pokemons",
    },
    {
      title: "Lista de Estudantes",
      description: "Uma lista de estudantes desenvolvida no PretaLab.",
      link: "/lista-estudantes",
    },
    {
      title: "Consulta de CEP",
      description: "Um aplicativo para consultar endereços a partir de CEPs.",
      link: "/consulta-cep",
    },
    {
      title: "Contador",
      description: "Contador simples desenvolvido no PretaLab.",
      link: "/contador",
    },
  ];

  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(221, 89, 157, 0.17)",
          padding: "60px",
          borderTop: "1px solid #000",
          height: "100vh",
        }}
      >
        <Typography variant="h1">Projetos Desenvolvidos no PretaLab</Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Projetos;
