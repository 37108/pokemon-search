import * as React from 'react';

import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  CardMedia,
  List,
  ListItemText,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteActions } from '../modules/favorite';
import { currentPokemonSelector } from '../modules/pokemon';

export function PokemonContent({ name, id, height, weight, types, sprites }) {
  const dispatch = useDispatch();
  const pokemon = useSelector(currentPokemonSelector);

  const addFavorite = React.useCallback(() => {
    dispatch(favoriteActions.addFavorite(pokemon));
  }, [dispatch]);
  return (
    <Card sx={{ display: 'flex' }}>
      <Box>
        <CardContent>
          <Typography variant="h5" gutterBottom component="h2">
            {name}
          </Typography>
          <List>
            <ListItemText>id: {id}</ListItemText>
            <ListItemText>height: {height}</ListItemText>
            <ListItemText>weight: {weight}</ListItemText>
          </List>

          <Typography color="textSecondary" variant="h6">
            types
          </Typography>
          <List>
            {types.map(({ type }) => (
              <ListItemText variant="caption" key={type.name}>
                {type.name}
              </ListItemText>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              addFavorite();
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        image={sprites.front_default}
        sx={{
          ml: 'auto',
          width: 240,
          height: 240,
        }}
      />
    </Card>
  );
}
