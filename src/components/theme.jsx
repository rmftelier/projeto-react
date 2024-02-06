import { createTheme } from "@mui/material";


const theme = createTheme({
  typography: {
    secondary: {
      fontFamily: "Lato"
    },
    h1: {
      fontFamily: "Playfair Display",
      fontSize: "6rem",
      position: "relative",
      maxWidth: "10ch",
      lineHeight: "110%",
      fontWeight: "900",
      textShadow: "4px 3px 0px #b71b52",
      marginBottom: "2rem"
    },
    h2: {
      fontFamily: "Playfair Display",
      fontSize: "3.5rem",
      position: "relative",
      maxWidth: "10ch",
      lineHeight: "110%",
      fontWeight: "900",
      textShadow: "1px 1px 0px #00000",
      marginBottom: "2rem",
    },
    h3: {
      fontFamily: "Playfair Display",
      fontSize: "2.2rem",
      position: "relative",
      maxWidth: "10ch",
      lineHeight: "110%",
      fontWeight: "900",
      marginBottom: "2rem",
    },
    h4: {
      fontSize: "1.75rem",
      maxWidth: "42rem",
      fontFamily: "Lato",
      fontWeight: "500",
      marginBottom: "2rem",
    },
    body: {
      fontSize: "1.45rem",
      fontFamily: "Lato",
      fontWeight: "500",
      marginBottom: "2rem",
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          boxSizing: "border-box"
        }
      }
    }
  }

})

export default theme;
