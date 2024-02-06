import { Stack, ThemeProvider } from "@mui/material";
import { Footer, Header } from "./components";
import { PaginaInicial, Pokedex, SobreMim, SobrePretaLab } from './pages';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './components/theme'

const Rotas = () => {

  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/projetos" element={<Pokedex />} />
      <Route path="/sobremim" element={<SobreMim />} />
      <Route path="/sobrepretalab" element={<SobrePretaLab />} />
    </Routes>
  );
}





function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack>
        <Header />
        <Rotas />
        <Footer />
      </Stack>
    </ThemeProvider>
  )
}

export default App;
