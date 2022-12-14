import { Alert, Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  PokemonFavorite,
  PokemonFavoriteTypeFilter,
  favoriteFilteredPokemonSelector,
  favoritePokemonSelector,
  favoritePokemonTypeFilterSelector,
  favoritePokemonTypesSelector,
} from "@/features/favorite";
import {
  PokemonContent,
  PokemonSearch,
  changePokemonErrorSelector,
  changePokemonStatusSelector,
  currentPokemonSelector,
} from "@/features/pokemon";
import { useTitle } from "../hooks/useTitle";

export function PokemonPage() {
  useTitle(`today's pokemon`);
  const pokemon = useSelector(currentPokemonSelector);
  const isPokemonLoading = useSelector(changePokemonStatusSelector);
  const isPokemonError = useSelector(changePokemonErrorSelector);
  const favorite = useSelector(favoritePokemonSelector);
  const types = useSelector(favoritePokemonTypesSelector);
  const filter = useSelector(favoritePokemonTypeFilterSelector);
  const filteredFavorite = useSelector(favoriteFilteredPokemonSelector);

  const favoriteItems =
    filteredFavorite.length !== 0 ? filteredFavorite : favorite;

  return (
    <Box>
      <PokemonSearch />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "md",
        }}
      >
        {isPokemonLoading && (
          <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <CircularProgress />
          </Box>
        )}
        {isPokemonError && (
          <Alert variant="filled" severity="error" sx={{ m: 2 }}>
            This Pokemon was Not Found
          </Alert>
        )}
        {pokemon !== undefined && (
          <Box sx={{ p: 2 }}>
            <PokemonContent {...pokemon} />
          </Box>
        )}

        {favorite.length !== 0 && (
          <Box sx={{ mt: 2, p: 2 }}>
            <Typography variant="h5" gutterBottom component="h2">
              your favorite
            </Typography>

            <PokemonFavoriteTypeFilter
              types={[...types, "all"]}
              filter={filter}
            />

            <Stack spacing={2}>
              {favoriteItems.map((item) => (
                <PokemonFavorite {...item} key={item.id} />
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
}
