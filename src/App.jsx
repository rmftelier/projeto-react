import { Stack } from "@mui/material";
import { Footer, Header } from "./components";
import { PaginaInicial } from './pages';

function App() {

  return (
    <Stack>
      <Header />
      <PaginaInicial />
      <Footer />
    </Stack>
  )
}

export default App;
