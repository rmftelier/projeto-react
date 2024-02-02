import { Box, Stack } from "@mui/material";


const PaginaInicial = () => {

  return (
    <Stack direction="column">
      <section>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#DD599D",
          height: "500px",
          padding: "20px",
          borderBottom: "1px solid #000"
        }}>
          <h2>Roberta Meyrelles</h2>

        </Box>
      </section>
      <section>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#A38ABB",
          borderBottom: "1px solid #000",
          height: "500px",

        }}>
          <h2>Roberta França</h2>
        </Box>
      </section>
      <section>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#8dbd81",
          borderBottom: "1px solid #000",
          height: "500px",

        }}>
          <h2>Roberta França</h2>
        </Box>
      </section>
    </Stack>
  );

};

export default PaginaInicial;