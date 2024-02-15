import { Avatar, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material';

const PokemonCard = ({ nome, foto, tipos }) => {
  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar>{/* Aqui você pode passar o número do Pokémon como ícone */}</Avatar>
        }
        title={`${nome}`}
      />
      <CardMedia
        component="img"
        alt=""
        height="110"
        image={`${foto}`}
      />
      <CardContent>
        <Typography gutterBottom component="div">
          <Stack direction="row" spacing={1}>
            {tipos.map((tipo, index) => (

              <Avatar key={index} variant="square">{tipo.type.name}</Avatar>
            ))}
          </Stack>
        </Typography>

      </CardContent>
    </Card>
  );
};

export default PokemonCard;
