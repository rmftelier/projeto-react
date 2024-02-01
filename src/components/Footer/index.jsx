import { Box, Stack, Link } from "@mui/material";

const Creditos = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #000",
        textAlign: "center",
        padding: "20px",
        fontSize: "1.25rem",
        backgroundColor: "#658bd7da",
        width: "100%",
        bottom: 0,
        position: "fixed",
        fontFamily: "Lato",
        fontWeight: "600"
      }}
    >
      Feito por mim com React e Material UI. Hospedado no Netlify.
    </Box>
  );
};

//dá pra criar um componente sobre se for usar em algum outro lugar
const LinkCustomizado = ({ href, label }) => {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        color: "#000",
        fontFamily: "allenoire",
        fontWeight: "600",
        borderBottom: "0.2rem solid #000",
        position: "relative",
      }}
    >
      {label}
    </Link>
  );
};



const RedesSociais = () => {
  return (
    <Stack
      sx={{
        textAlign: "center",
        fontSize: "1.5rem",
        backgroundColor: "#91a4c9b7",
        width: "100%",
        bottom: "64px",
        position: "fixed",
        margin: "0px",
        height: "8%",
        borderTop: "1px solid #000",
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={12}
    >

      <LinkCustomizado href="#" label="Github" />
      <LinkCustomizado href="#" label="Linkedin" />
      <LinkCustomizado href="#" label="Dev.to" />
      <LinkCustomizado href="#" label="E-mail" />

    </Stack>

  );
}

const Footer = () => {
  return (
    <Box>
      <RedesSociais />
      <Creditos />
    </Box >
  );
};

export default Footer;


