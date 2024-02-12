import { Stack, ThemeProvider } from "@mui/material";
import { Footer, Header } from "./components";
import {
  PaginaInicial,
  PaginaInicialProjeto,
  ListaEstudantes,
  Pokedex,
  SobrePretaLab,
  Contador,
  ConsultaCEP
} from './pages';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './components/theme'


const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/projetos" element={<PaginaInicialProjeto />} />
      <Route path="/lista-pokemons" element={<Pokedex />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/lista-estudantes" element={<ListaEstudantes />} />
      <Route path="/consulta-cep" element={<ConsultaCEP />} />
      <Route path="/sobre" >
        <Route path="preta-lab" element={<SobrePretaLab />} />
      </Route>
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
