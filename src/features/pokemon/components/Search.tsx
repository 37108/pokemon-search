import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import { pokemonActions } from "../modules";

export function PokemonSearch() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const onSubmitChangePokemon = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      if (value === "") {
        return;
      }
      dispatch(pokemonActions.changePokemon(value.toLowerCase()));
      return;
    },
    [dispatch, value]
  );

  return (
    <Box sx={{ backgroundColor: "rgb(64,42,26)" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/00/26/philatelist-1844080_1280.jpg"
          style={{ width: "320px" }}
        />
      </Box>
      <Box
        component="form"
        onSubmit={onSubmitChangePokemon}
        sx={{
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
          transform: "translateY(-120%)",
        }}
      >
        <TextField
          id="pokemon-search"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          size="small"
          placeholder="search pokemon"
          sx={{
            "&>.MuiOutlinedInput-root": {
              backgroundColor: "#fff",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
