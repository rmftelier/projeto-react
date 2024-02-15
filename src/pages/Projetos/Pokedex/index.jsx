import { Container, SubTitulo } from "../../../components";
import CardPokemon from "./CardPokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Pagination, CircularProgress } from "@mui/material";

const Pokedex = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para rastrear o carregamento
  const [page, setPage] = useState(1);
  const pokemonsPorPagina = 12; // 4 Pokémons por linha * 3 linhas por página

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referências dos Pokemons");
    } finally {
      setLoading(false); // Defina o carregamento para falso após receber a resposta ou ocorrer um erro
    }
  };

  useEffect(() => {
    pegar100ReferenciasPokemons();
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

      setListaPokemons(listaTemporaria);
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
        maxWidth: "70rem",
        alignItems: "center"
      }}
    >
      <SubTitulo>PokéDex</SubTitulo>

      <Grid container spacing={3}>
        {listaPokemons.map((pokemon) => (
          <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
            <CardPokemon
              nome={pokemon.name}
              foto={pokemon.sprites.front_default}
              tipos={pokemon.types}
            />
          </Grid>
        ))}
      </Grid>

      {loading && ( // Verifique se o carregamento está em andamento
        <CircularProgress style={{ margin: "20px" }} size={100} /> // Exibir CircularProgress enquanto carrega
      )}

      <Pagination
        count={Math.ceil(referenciasPokemons.length / pokemonsPorPagina)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        size="large"
        style={{ marginTop: "20px" }}
      />
    </Container>
  );
};

export default Pokedex;
