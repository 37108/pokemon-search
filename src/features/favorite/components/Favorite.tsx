import * as React from "react";
import {
  Card,
  Typography,
  Stack,
  Avatar,
  CardHeader,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

export function PokemonFavorite({ name, sprites, types, id }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ display: "flex" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={sprites.front_default} />}
        title={name}
        subheader={
          <Stack spacing={1} direction="row" sx={{ mb: 2 }}>
            {types.map(({ type }) => (
              <Typography
                key={type.name}
                variant="caption"
                color="textSecondary"
              >
                {type.name}
              </Typography>
            ))}
          </Stack>
        }
      />
      <Box sx={{ ml: "auto", mr: 4, my: "auto" }}>
        <IconButton
          aria-label="delete from favorite"
          onClick={() => {
            dispatch({
              type: "DELETE_FAVORITE",
              payload: {
                id,
              },
            });
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
