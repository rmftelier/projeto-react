import { Typography } from "@mui/material";

const TipografiaTitulo = ({ children, ...props }) => (
  <Typography
    sx={{
      position: "relative",
      lineHeight: "110%",
      fontWeight: "900",
      marginBottom: "2rem",
      ...props
    }}
    variant="secondary"
  >
    {children}
  </Typography>
);

export const Titulo = ({ children }) => (
  <TipografiaTitulo
    fontSize="6rem"
    textShadow="4px 3px 0px #b71b52"
    maxWidth="10ch"

  >
    {children}
  </TipografiaTitulo>
);

export const SubTitulo = ({ children }) => (
  <TipografiaTitulo
    fontSize="3.5rem"
    textShadow="1px 1px 0px #000"
  >
    {children}
  </TipografiaTitulo>

);

export const SubSubTitulo = ({ children }) => (
  <TipografiaTitulo fontSize="2.2rem">
    {children}
  </TipografiaTitulo>
)

const TipografiaTextos = ({ children, ...props }) => (
  <Typography
    sx={{
      fontWeight: "500",
      marginBottom: "2rem",
      ...props
    }}
    variant="main"
  >
    {children}
  </Typography>
);

export const Biografia = ({ children }) => (
  <TipografiaTextos
    maxWidth="42rem"
    fontSize="1.75rem"
    marginTop="1rem"
  >
    {children}
  </TipografiaTextos>
)

export const Paragrafo = ({ children }) => (
  <TipografiaTextos
    fontSize="1.45rem"
  >
    {children}
  </TipografiaTextos>
)
