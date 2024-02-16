import { Container, SubSubTitulo, SubTitulo } from "../../../components";
import CardPokemon from "./CardPokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Box, Pagination, LinearProgress } from "@mui/material";

const Pokedex = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);

  const [loading, setLoading] = useState(false); // Estado para rastrear o carregamento

  const [page, setPage] = useState(1);
  const pokemonsPorPagina = 12; // 4 Pokémons por linha * 3 linhas por página

  const pegarReferenciasPokemons = async () => {
    try {
      setLoading(true);
      const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referências dos Pokemons");
    }
  };

  useEffect(() => {
    pegarReferenciasPokemons();
  }, []);

  useEffect(() => {
    const inicio = (page - 1) * pokemonsPorPagina;
    const fim = page * pokemonsPorPagina;
    const pokemonsPaginados = referenciasPokemons.slice(inicio, fim);

    const pegarListaDePokemons = async () => {
      const listaTemporaria = [];

      for (const referencia of pokemonsPaginados) {
        try {
          const resposta = await axios.get(referencia.url);
          listaTemporaria.push(resposta.data);
        } catch (error) {
          console.error("Erro ao buscar o pokemon", error);
        }
      }
      setTimeout(() => { // Adicionando um atraso antes de definir o loading como false
        setListaPokemons(listaTemporaria);
        setLoading(false);
      }, 1000);
    };

    pegarListaDePokemons();
  }, [referenciasPokemons, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };


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
      <SubTitulo>PokéDex</SubTitulo>
      <SubSubTitulo>Lista de Todos os Pokémons</SubSubTitulo>
      {loading ? (
        <Box sx={{ width: '100%', padding: "100px", spacing: "10px" }}>
          <SubSubTitulo align="center" size={100}>Carregando...</SubSubTitulo >
          <LinearProgress />
        </Box>
      ) : (
        <Box >
          <Grid container spacing={2}>
            {listaPokemons.map((pokemon) => (
              <Grid item key={pokemon.id} xs={6} sm={3} >
                <CardPokemon
                  nome={pokemon.name}
                  foto={pokemon.sprites.front_default}
                  tipos={pokemon.types}
                />
              </Grid>
            ))}
          </Grid>

          <Pagination
            count={Math.ceil(referenciasPokemons.length / pokemonsPorPagina)}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            size="large"
            style={{ marginTop: "20px" }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Pokedex;
