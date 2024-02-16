import { useState } from "react";
import { Container, Paragrafo, MiniTitulo, SubTitulo } from "../../../components";
import { Link, Paper, Box, TextField, Stack, Button, Typography } from "@mui/material";
import axios from "axios";
import { red } from "@mui/material/colors";

const ConsultaCEP = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    rua: "",
    cidade: "",
    estado: "",
    latitude: "",
    longitude: ""
  })

  const [erroMensagem, setErroMensagem] = useState("");

  const consultarCEP = async () => {
    try {
      const resposta = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)

      const enderecoResposta = resposta.data;

      setEndereco(enderecoAnterior => ({
        ...enderecoAnterior,
        rua: enderecoResposta.street || "",
        cidade: enderecoResposta.city || "",
        estado: enderecoResposta.state || "",
        latitude: enderecoResposta.location?.coordinates?.latitude || "",
        longitude: enderecoResposta.location?.coordinates?.longitude || ""
      }));

      setErroMensagem("");

    } catch (erro) {
      setErroMensagem("Ocorreu um erro ao buscar o CEP apresentado. Por favor digite um CEP válido.")
    }
  }
  return (
    <Container
      boxProps={{
        padding: "60px",
        borderTop: "1px solid #000",
        height: "100%"
      }}
      stackProps={{
        alignItems: "center"
      }}
    >
      <SubTitulo>Consulta CEP</SubTitulo>
      <Paragrafo>
        <Link
          href="https://brasilapi.com.br/"
          underline="none"
          sx={{
            color: "#000",
            fontFamily: "Playfair Display",
            fontWeight: "700",
            borderBottom: "0.15rem solid #000",
            position: "relative",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          via Brasil API
        </Link>
      </Paragrafo>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={12} sx={{ backgroundColor: "#fdfdfd9e", padding: "60px" }}>
          <Stack alignItems="center" direction="column">
            <MiniTitulo>Digite o CEP que deseja buscar:</MiniTitulo>
            <Stack direction="row" gap={4}>
              <TextField
                variant="standard"
                placeholder="23119350"
                required
                inputProps={{ maxLength: 8 }}
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                helperText="Apenas os números do CEP são necessários."
                FormHelperTextProps={{ sx: { fontSize: '1rem' } }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(160, 37, 101, 0.638)",
                  fontFamily: "Lato",
                }}
                onClick={() => consultarCEP()}
              >
                Buscar
              </Button>
            </Stack>
          </Stack>
          <Stack sx={{ marginTop: 2 }}>
            {erroMensagem && <Typography sx={{ fontFamily: "Lato", margin: 2, color: red[700], textAlign: "center", fontWeight: "600" }}>{erroMensagem}</Typography>}
          </Stack>
          <Stack width="70vh" gap={3} marginTop={4}>
            <TextField label="Rua" fullWidth readOnly value={endereco.rua} />
            <TextField label="Cidade" fullWidth readOnly value={endereco.cidade} />
            <TextField label="Estado" fullWidth readOnly value={endereco.estado} />
            <TextField label="Latitude" fullWidth readOnly value={endereco.latitude} />
            <TextField label="Longitude" fullWidth readOnly value={endereco.longitude} />
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default ConsultaCEP;
