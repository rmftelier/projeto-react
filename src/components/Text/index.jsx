import { Typography } from "@mui/material";

export const Titulo = ({ children }) => (
  <Typography variant="secondary"
    sx={{
      fontFamily: "Playfair Display",
      fontSize: "6rem",
      position: "relative",
      maxWidth: "10ch",
      lineHeight: "110%",
      fontWeight: "900",
      textShadow: "4px 3px 0px #b71b52",
      marginBottom: "2rem"
    }}
  >
    {children}
  </Typography>
);

export const SubTitulo = ({ subTitulo }) => (
  <Typography variant="secondary"
    sx={{
      fontFamily: "Playfair Display",
      fontSize: "6rem",
      position: "relative",
      maxWidth: "10ch",
      lineHeight: "110%",
      fontWeight: "900",
      textShadow: "4px 3px 0px #b71b52",
      marginBottom: "2rem"
    }}
  >
    {subTitulo}
  </Typography>
);
