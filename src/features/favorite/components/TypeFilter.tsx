import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { favoriteActions } from '../modules';

export function PokemonFavoriteTypeFilter({ types, filter }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Box>
      <Button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1,
          color: 'text.secondary',
        }}
        startIcon={<FilterAltIcon />}
      >
        filter
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        {types.map((type) => (
          <MenuItem
            key={type}
            selected={type === filter}
            onClick={() => {
              dispatch(favoriteActions.filterType(type));
              setAnchorEl(null);
            }}
          >
            {type}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
