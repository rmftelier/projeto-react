import { Stack, ThemeProvider } from "@mui/material";
import { Footer, Header } from "./components";
import { PaginaInicial, Projetos, SobreMim, SobrePretaLab } from './pages';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './components/theme'

const Rotas = () => {

  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/sobre">
        <Route path="mim" element={<SobreMim />} />
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
