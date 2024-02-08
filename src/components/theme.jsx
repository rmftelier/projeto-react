import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    main: {
      fontFamily: "Lato"
    },
    secondary: {
      fontFamily: "Playfair Display"
    },
    h4: {
      fontSize: "1.75rem",
      maxWidth: "42rem",
      marginTop: "1rem"
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
          boxSizing: "border-box",
        }
      }
    }
  }

})

export default theme;
