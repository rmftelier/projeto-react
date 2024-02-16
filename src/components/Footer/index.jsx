import { Stack, Box } from "@mui/material";
import { LinkCustomizado } from "../index";

const RedesSociais = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={12}
      sx={{
        backgroundColor: "#a8bbe0d4",
        borderTop: "1px solid #000",
        padding: "20px",
        fontSize: "1.35rem"
      }}
    >
      <LinkCustomizado href="https://github.com/rmftelier" label="Github" />
      <LinkCustomizado href="https://www.linkedin.com/in/robertameyrelles/" label="Linkedin" />
      <LinkCustomizado href="https://dev.to/asulside" label="Dev.to" />
      <LinkCustomizado href="mailto:meyfran12@gmail.com" label="E-mail" />
    </Stack>
  );
};

const Creditos = () => {
  return (
    <Box
      sx={{
        fontSize: "1.20rem",
        fontFamily: "Lato",
        fontWeight: "600",
        borderTop: "1px solid #000",
        height: "8vh",
        padding: "20px",
        backgroundColor: "#9cb3e0ca"
      }}
    >
      Feito por mim com React e Material UI. Hospedado no Netlify.
    </Box>
  );
};

const Footer = () => {
  return (
    <footer>
      <Box sx={{
        textAlign: "center",
        bottom: 0,
        width: "100%",
      }}
      >
        <RedesSociais />
        <Creditos />
      </Box>
    </footer>
  );
};

export default Footer;


