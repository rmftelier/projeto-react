import { Avatar, Card, CardContent, CardHeader, CardMedia, Stack, Typography, Box } from '@mui/material';

const PokemonCard = ({ nome, foto, tipos }) => {
  return (
    <Box width="380px" height="400px" margin="0 10px 20px">
      <Card >
        <CardHeader
          title={`${nome}`}
          sx={{
            textAlign: "center",
            fontSize: "16px",
            fontFamily: "Lato"
          }}
        />
        <CardMedia
          component="img"
          alt=""
          sx={{
            height: "250px",
            width: "250px",
            justifyAlign: "center",
            display: "flex",
            margin: "0 auto"
          }}

          image={`${foto}`}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography gutterBottom component="div">
            <Stack direction="row" spacing={1}>
              {tipos.map((tipo, index) => (
                <Avatar sx={{ height: "30px", width: `${(tipo.type.name.length * 10) + 40}px`, backgroundColor: "#111" }} key={index} variant="square">{tipo.type.name}</Avatar>
              ))}
            </Stack>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
